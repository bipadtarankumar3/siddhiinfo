import crypto from "node:crypto";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";

/*
  Admin authentication.
  - Passwords: scrypt (N=16384) with per-user salt; constant-time compare.
  - Session: HMAC-signed token in an HTTP-only, Secure, SameSite=Lax cookie (8 h).
    The user is re-checked in the database on every request, so disabling a
    user or changing their role takes effect immediately.
  - Roles: admin (everything incl. CSV export), staff (view + update leads), viewer (read-only).
  Env: ADMIN_SESSION_SECRET (long random string, required).
*/
export const COOKIE = "si_admin";
const TTL_S = 8 * 60 * 60;

export const ROLES = ["admin", "staff", "viewer"];
const PERMS = {
  admin: ["leads:read", "leads:write", "leads:export", "users:manage"],
  staff: ["leads:read", "leads:write"],
  viewer: ["leads:read"],
};
export const can = (user, perm) => Boolean(user && PERMS[user.role]?.includes(perm));

function secret() {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s || s.length < 32) throw new Error("ADMIN_SESSION_SECRET must be set (32+ characters)");
  return s;
}

const SCRYPT = { N: 16384, r: 8, p: 1 };

export function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(password, salt, 64, SCRYPT);
  return `scrypt$${salt.toString("base64")}$${hash.toString("base64")}`;
}

// A dummy hash so login takes the same time whether or not the email exists
const DUMMY = `scrypt$${Buffer.alloc(16).toString("base64")}$${Buffer.alloc(64).toString("base64")}`;

export function verifyPassword(password, stored) {
  const [alg, saltB64, hashB64] = String(stored || DUMMY).split("$");
  if (alg !== "scrypt" || !saltB64 || !hashB64) return false;
  const expected = Buffer.from(hashB64, "base64");
  const actual = crypto.scryptSync(String(password), Buffer.from(saltB64, "base64"), expected.length, SCRYPT);
  return crypto.timingSafeEqual(expected, actual) && Boolean(stored);
}

const sign = (payload) => crypto.createHmac("sha256", secret()).update(payload).digest("base64url");

export function createSessionToken(userId) {
  const payload = Buffer.from(JSON.stringify({ uid: String(userId), exp: Math.floor(Date.now() / 1000) + TTL_S })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function readToken(token) {
  const [payload, sig] = String(token || "").split(".");
  if (!payload || !sig) return null;
  const expected = Buffer.from(sign(payload));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !crypto.timingSafeEqual(expected, given)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    return data.exp > Date.now() / 1000 ? data : null;
  } catch {
    return null;
  }
}

export const sessionCookie = (value, maxAge = TTL_S) => ({
  name: COOKIE,
  value,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge,
});

export function serializeCookie(c) {
  return [
    `${c.name}=${c.value}`,
    `Path=${c.path}`,
    `Max-Age=${c.maxAge}`,
    "HttpOnly",
    `SameSite=${c.sameSite[0].toUpperCase()}${c.sameSite.slice(1)}`,
    c.secure && "Secure",
  ].filter(Boolean).join("; ");
}

/** Current admin user (from the session cookie) or null. */
export async function getAdmin() {
  try {
    const jar = await cookies();
    const data = readToken(jar.get(COOKIE)?.value);
    if (!data || !ObjectId.isValid(data.uid)) return null;
    const db = await getDb();
    const user = await db.collection("admin_users").findOne(
      { _id: new ObjectId(data.uid), active: { $ne: false } },
      { projection: { passwordHash: 0 } },
    );
    return user ? { id: String(user._id), email: user.email, name: user.name, role: user.role } : null;
  } catch {
    return null;
  }
}

/** CSRF defence for state-changing admin API calls: same-origin requests only. */
export function sameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}
