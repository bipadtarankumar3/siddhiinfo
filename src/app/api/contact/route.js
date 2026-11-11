import { verifyCaptcha, rateLimit, clientIp } from "@/lib/captcha";
import { hasDatabase } from "@/lib/server/mongodb";
import { saveLead, newRef } from "@/lib/server/leads";
import { hasMailer, sendLeadEmail } from "@/lib/server/mailer";
import { clean, cleanText, normaliseIndianMobile } from "@/lib/server/validate";

/*
  Contact form endpoint (short form on /contact/).
  Saves the enquiry to MongoDB (if configured) and emails the business inbox
  (Gmail SMTP, if configured). Succeeds when at least one of them worked.
  Env: GMAIL_USER, GMAIL_APP_PASSWORD, MONGODB_URI, CAPTCHA_SECRET.
*/
export const runtime = "nodejs";

export async function POST(request) {
  if (!hasMailer() && !hasDatabase()) {
    console.error("Contact form: neither Gmail nor MONGODB_URI is configured");
    return Response.json({ ok: false, error: "Email is not configured." }, { status: 500 });
  }

  // Rate limit: 5 enquiries per IP per 15 minutes (per server instance)
  const limited = rateLimit(`contact:${clientIp(request)}`, { limit: 5, windowMs: 15 * 60 * 1000 });
  if (!limited.ok) {
    return Response.json(
      { ok: false, code: "rate_limited", error: "Too many enquiries from your connection. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } },
    );
  }

  if (Number(request.headers.get("content-length") || 0) > 10_000) {
    return Response.json({ ok: false, error: "Request too large." }, { status: 413 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (body.website) return Response.json({ ok: true });

  // Captcha: server-side check of the signed, single-use, time-limited code
  const captcha = verifyCaptcha(body.captchaToken, String(body.captchaAnswer ?? ""));
  if (!captcha.ok) {
    const msg =
      captcha.reason === "expired" ? "The security code expired. Please enter the new code."
      : captcha.reason === "too-fast" ? "Please take a moment and try again."
      : "The security code was not correct. Please try the new code.";
    return Response.json({ ok: false, code: "captcha", error: msg }, { status: 400 });
  }

  const name = clean(body.name, 100);
  const mobile = normaliseIndianMobile(body.phone);
  const city = clean(body.city, 100);
  const service = clean(body.service, 150);
  const message = cleanText(body.message, 2000);
  if (name.length < 2 || !mobile || city.length < 2 || !service || message.length < 10) {
    return Response.json({ ok: false, error: "Please fill in all required fields." }, { status: 400 });
  }
  const business = clean(body.business, 150);

  let ref = newRef();
  let saved = false;
  let emailed = false;

  if (hasDatabase()) {
    try {
      ref = await saveLead({ ref, source: "contact", name, phone: mobile, businessName: business, city, serviceLabel: service, description: message });
      saved = true;
    } catch (err) {
      console.error("Contact form: could not save lead", err);
    }
  }

  if (hasMailer()) {
    try {
      await sendLeadEmail({
        subject: `New enquiry: ${name} — ${service.slice(0, 80)}`,
        ref,
        fields: [
          ["Name", name],
          ["Mobile", `+91 ${mobile}`],
          ["Business", business],
          ["City", city],
          ["Service", service],
        ],
        message,
        mobile,
      });
      emailed = true;
    } catch (err) {
      console.error("Contact form: failed to send email", err);
    }
  }

  if (!saved && !emailed) return Response.json({ ok: false, error: "Could not send email." }, { status: 502 });
  return Response.json({ ok: true, ref });
}
