import { getDb } from "@/lib/server/mongodb";
import { verifyPassword, createSessionToken, sessionCookie, serializeCookie, sameOrigin } from "@/lib/server/auth";
import { rateLimit, clientIp } from "@/lib/captcha";

export const runtime = "nodejs";

const fail = (error, status = 401) => Response.json({ ok: false, error }, { status });

export async function POST(request) {
  if (!sameOrigin(request)) return fail("Forbidden.", 403);
  // 8 attempts per IP per 15 minutes
  const limited = rateLimit(`login:${clientIp(request)}`, { limit: 8, windowMs: 15 * 60 * 1000 });
  if (!limited.ok) return Response.json({ ok: false, error: "Too many attempts. Try again later." }, { status: 429, headers: { "Retry-After": String(limited.retryAfter) } });

  let body;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid request.", 400);
  }
  const email = String(body.email ?? "").trim().toLowerCase().slice(0, 254);
  const password = String(body.password ?? "").slice(0, 200);
  if (!email || !password) return fail("Enter your email and password.", 400);

  try {
    const db = await getDb();
    const user = await db.collection("admin_users").findOne({ email, active: { $ne: false } });
    // verifyPassword runs even when the user doesn't exist (constant time)
    const ok = verifyPassword(password, user?.passwordHash);
    if (!user || !ok) return fail("Incorrect email or password.");
    await db.collection("admin_users").updateOne({ _id: user._id }, { $set: { lastLoginAt: new Date() } });
    const res = Response.json({ ok: true });
    const c = sessionCookie(createSessionToken(user._id));
    res.headers.append("Set-Cookie", serializeCookie(c));
    return res;
  } catch (err) {
    console.error("Admin login error:", err.message);
    return fail("Login is unavailable.", 500);
  }
}
