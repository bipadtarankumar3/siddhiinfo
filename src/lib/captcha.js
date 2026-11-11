import crypto from "node:crypto";

/*
  Self-hosted image captcha + request rate limiting for the contact form.

  - The server draws a random 5-character code as a distorted SVG and returns
    it with a signed token: HMAC(secret, code | expiry | nonce). The answer is
    never sent to the browser in readable form.
  - On submit the server recomputes the HMAC with the visitor's answer
    (constant-time compare), checks the 5-minute expiry, and burns the nonce
    so a solved captcha cannot be replayed.
  - Rate limits are per client IP, per server instance (best-effort on
    serverless). For strict global limits, back these Maps with Redis/KV.

  Secret: CAPTCHA_SECRET env var (recommended). Falls back to a value derived
  from GMAIL_APP_PASSWORD so it is stable across serverless instances.
*/

const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no 0/O, 1/I/L
const LENGTH = 5;
const TTL_MS = 5 * 60 * 1000;
const MIN_SOLVE_MS = 3000;

function secret() {
  const s = process.env.CAPTCHA_SECRET || (process.env.GMAIL_APP_PASSWORD && `derived:${process.env.GMAIL_APP_PASSWORD}`);
  if (!s) throw new Error("CAPTCHA_SECRET is not configured");
  return crypto.createHash("sha256").update(`siddhi-captcha:${s}`).digest();
}

const b64url = (buf) => Buffer.from(buf).toString("base64url");
const sign = (answer, exp, nonce) =>
  crypto.createHmac("sha256", secret()).update(`${answer}|${exp}|${nonce}`).digest("base64url");

const rnd = (min, max) => min + Math.random() * (max - min);
const pick = (arr) => arr[crypto.randomInt(arr.length)];

function drawSvg(code) {
  const W = 170;
  const H = 56;
  const colors = ["#1e3a8a", "#9a3412", "#065f46", "#6d28d9", "#0f172a", "#be185d"];
  let out = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
  out += `<rect width="100%" height="100%" fill="#f1f5f9"/>`;
  // background noise
  for (let i = 0; i < 28; i++) {
    out += `<circle cx="${rnd(0, W).toFixed(1)}" cy="${rnd(0, H).toFixed(1)}" r="${rnd(0.6, 1.8).toFixed(1)}" fill="${pick(colors)}" opacity="0.35"/>`;
  }
  for (let i = 0; i < 4; i++) {
    out += `<path d="M${rnd(0, 20).toFixed(0)} ${rnd(5, H - 5).toFixed(0)} C${rnd(40, 70).toFixed(0)} ${rnd(0, H).toFixed(0)} ${rnd(90, 130).toFixed(0)} ${rnd(0, H).toFixed(0)} ${rnd(150, W).toFixed(0)} ${rnd(5, H - 5).toFixed(0)}" stroke="${pick(colors)}" stroke-width="${rnd(1, 2).toFixed(1)}" fill="none" opacity="0.5"/>`;
  }
  // characters
  [...code].forEach((ch, i) => {
    const x = 18 + i * 30 + rnd(-3, 3);
    const y = 38 + rnd(-5, 5);
    const rot = rnd(-28, 28).toFixed(0);
    const size = rnd(26, 32).toFixed(0);
    out += `<text x="${x.toFixed(0)}" y="${y.toFixed(0)}" font-family="Verdana,Arial,sans-serif" font-size="${size}" font-weight="700" fill="${pick(colors)}" transform="rotate(${rot} ${x.toFixed(0)} ${y.toFixed(0)}) skewX(${rnd(-12, 12).toFixed(0)})">${ch}</text>`;
  });
  // strike-through line over the text
  out += `<path d="M5 ${rnd(24, 34).toFixed(0)} Q${W / 2} ${rnd(10, 46).toFixed(0)} ${W - 5} ${rnd(24, 34).toFixed(0)}" stroke="#334155" stroke-width="1.6" fill="none" opacity="0.6"/>`;
  return out + "</svg>";
}

export function createCaptcha() {
  const code = Array.from({ length: LENGTH }, () => ALPHABET[crypto.randomInt(ALPHABET.length)]).join("");
  const exp = Date.now() + TTL_MS;
  const nonce = b64url(crypto.randomBytes(12));
  const token = `${exp}.${nonce}.${sign(code, exp, nonce)}`;
  const image = `data:image/svg+xml;base64,${Buffer.from(drawSvg(code)).toString("base64")}`;
  return { token, image, expiresIn: TTL_MS / 1000 };
}

// nonce -> expiry, so each solved captcha works once (per instance)
const usedNonces = new Map();

export function verifyCaptcha(token, answer) {
  if (typeof token !== "string" || typeof answer !== "string") return { ok: false, reason: "missing" };
  const [expStr, nonce, sig] = token.split(".");
  const exp = Number(expStr);
  if (!exp || !nonce || !sig) return { ok: false, reason: "malformed" };
  if (Date.now() > exp) return { ok: false, reason: "expired" };

  const now = Date.now();
  for (const [n, e] of usedNonces) if (e < now) usedNonces.delete(n);
  if (usedNonces.has(nonce)) return { ok: false, reason: "reused" };

  const normalised = answer.trim().toUpperCase().replace(/\s+/g, "");
  const expected = Buffer.from(sign(normalised, exp, nonce));
  const given = Buffer.from(sig);
  const match = expected.length === given.length && crypto.timingSafeEqual(expected, given);
  // burn the nonce on any attempt, so a captcha can't be brute-forced
  usedNonces.set(nonce, exp);
  if (!match) return { ok: false, reason: "wrong" };
  // solved faster than a person could read it → automated
  if (now - (exp - TTL_MS) < MIN_SOLVE_MS) return { ok: false, reason: "too-fast" };
  return { ok: true };
}

/* ---------- rate limiting (sliding window, per IP, per instance) ---------- */
const buckets = new Map();

export function rateLimit(key, { limit, windowMs }) {
  const now = Date.now();
  const hits = (buckets.get(key) || []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) {
    buckets.set(key, hits);
    return { ok: false, retryAfter: Math.ceil((windowMs - (now - hits[0])) / 1000) };
  }
  hits.push(now);
  buckets.set(key, hits);
  if (buckets.size > 5000) buckets.clear(); // memory guard
  return { ok: true };
}

export function clientIp(request) {
  const fwd = request.headers.get("x-forwarded-for");
  return (fwd && fwd.split(",")[0].trim()) || request.headers.get("x-real-ip") || "unknown";
}
