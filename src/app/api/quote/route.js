import { verifyCaptcha, rateLimit, clientIp } from "@/lib/captcha";
import { hasDatabase } from "@/lib/server/mongodb";
import { saveLead, newRef } from "@/lib/server/leads";
import { hasMailer, sendLeadEmail } from "@/lib/server/mailer";
import { clean, cleanText, normaliseIndianMobile, isEmail, oneOf } from "@/lib/server/validate";
import { customerTypes, quoteServices, budgets, contactMethods, indianStates } from "@/lib/quoteOptions";

/*
  Get-a-Quote endpoint.
  Order: rate limit → size check → honeypot → captcha → validation →
  save to MongoDB (if configured) → email the business (if configured).
  Succeeds if at least one of database / email captured the enquiry, so an
  enquiry is never silently lost.
*/
export const runtime = "nodejs";

const bad = (error, status = 400, extra = {}) => Response.json({ ok: false, error, ...extra }, { status });

export async function POST(request) {
  const limited = rateLimit(`quote:${clientIp(request)}`, { limit: 5, windowMs: 15 * 60 * 1000 });
  if (!limited.ok) {
    return Response.json(
      { ok: false, code: "rate_limited", error: "Too many requests from your connection. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } },
    );
  }
  if (Number(request.headers.get("content-length") || 0) > 16_000) return bad("Request too large.", 413);
  if (!hasDatabase() && !hasMailer()) {
    console.error("Quote form: neither MONGODB_URI nor Gmail is configured");
    return bad("Enquiries are not configured yet.", 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return bad("Invalid request.");
  }
  if (body.website) return Response.json({ ok: true, ref: newRef() }); // honeypot

  const captcha = verifyCaptcha(body.captchaToken, String(body.captchaAnswer ?? ""));
  if (!captcha.ok) {
    const msg = captcha.reason === "expired" ? "The security code expired. Please enter the new code." : "The security code was not correct. Please try the new code.";
    return bad(msg, 400, { code: "captcha" });
  }

  const lead = {
    source: "quote",
    customerType: oneOf(body.customerType, customerTypes.map((c) => c.id)),
    service: oneOf(body.service, quoteServices.map((s) => s.id)),
    businessName: clean(body.businessName, 150),
    name: clean(body.name, 100),
    phone: normaliseIndianMobile(body.phone),
    email: clean(body.email, 254).toLowerCase(),
    city: clean(body.city, 100),
    state: oneOf(body.state, indianStates),
    budget: oneOf(body.budget, budgets),
    description: cleanText(body.description, 3000),
    preferredContact: oneOf(body.preferredContact, contactMethods),
    page: clean(body.page, 200),
  };

  const errors = {};
  if (!lead.customerType) errors.customerType = "Choose what describes you best.";
  if (!lead.service) errors.service = "Choose a service.";
  if (lead.name.length < 2) errors.name = "Enter your name.";
  if (!lead.phone) errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!isEmail(lead.email)) errors.email = "Enter a valid email address.";
  if (lead.city.length < 2) errors.city = "Enter your city.";
  if (!lead.state) errors.state = "Choose your state.";
  if (!lead.budget) errors.budget = "Choose a budget range.";
  if (lead.description.length < 20) errors.description = "Describe your project in at least a sentence or two.";
  if (!lead.preferredContact) errors.preferredContact = "Choose how we should contact you.";
  if (Object.keys(errors).length) return bad("Please check the highlighted fields.", 400, { code: "validation", errors });

  let ref = newRef();
  let saved = false;
  let emailed = false;

  if (hasDatabase()) {
    try {
      ref = await saveLead({ ...lead, ref });
      saved = true;
    } catch (err) {
      console.error("Quote form: could not save lead", err);
    }
  }

  if (hasMailer()) {
    const label = (list, id) => list.find((x) => x.id === id)?.label || id;
    try {
      await sendLeadEmail({
        subject: `New quote request: ${lead.name} — ${label(quoteServices, lead.service)}`,
        ref,
        fields: [
          ["Customer type", label(customerTypes, lead.customerType)],
          ["Service", label(quoteServices, lead.service)],
          ["Name", lead.name],
          ["Business", lead.businessName],
          ["Mobile", `+91 ${lead.phone}`],
          ["Email", lead.email],
          ["City", lead.city],
          ["State", lead.state],
          ["Budget", lead.budget],
          ["Preferred contact", lead.preferredContact],
          ["Saved in dashboard", saved ? "Yes" : "No (database unavailable)"],
        ],
        message: lead.description,
        mobile: lead.phone,
        email: lead.email,
      });
      emailed = true;
    } catch (err) {
      console.error("Quote form: could not send email", err);
    }
  }

  if (!saved && !emailed) return bad("We could not receive your request right now.", 502);
  return Response.json({ ok: true, ref });
}
