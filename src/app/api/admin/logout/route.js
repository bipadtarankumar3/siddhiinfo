import { sessionCookie, serializeCookie, sameOrigin } from "@/lib/server/auth";

export const runtime = "nodejs";

export async function POST(request) {
  if (!sameOrigin(request)) return Response.json({ ok: false }, { status: 403 });
  const res = Response.json({ ok: true });
  res.headers.append("Set-Cookie", serializeCookie(sessionCookie("", 0)));
  return res;
}
