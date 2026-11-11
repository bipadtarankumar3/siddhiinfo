import { createCaptcha, rateLimit, clientIp } from "@/lib/captcha";

// Issues a fresh image captcha + signed token for the contact form.
export const runtime = "nodejs";

const noStore = { "Cache-Control": "no-store, max-age=0" };

export async function GET(request) {
  const limited = rateLimit(`captcha:${clientIp(request)}`, { limit: 30, windowMs: 10 * 60 * 1000 });
  if (!limited.ok) {
    return Response.json(
      { ok: false, error: "Too many requests. Please wait a few minutes." },
      { status: 429, headers: { ...noStore, "Retry-After": String(limited.retryAfter) } },
    );
  }
  try {
    return Response.json({ ok: true, ...createCaptcha() }, { headers: noStore });
  } catch (err) {
    console.error("Captcha:", err.message);
    return Response.json({ ok: false, error: "Security check unavailable." }, { status: 500, headers: noStore });
  }
}
