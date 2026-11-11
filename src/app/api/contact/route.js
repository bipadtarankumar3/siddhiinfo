import nodemailer from "nodemailer";
import { site } from "@/lib/site";

// Sends website enquiries to the Siddhi Info inbox through Gmail SMTP.
// Needs GMAIL_USER and GMAIL_APP_PASSWORD (a Google "App password") in the
// environment — .env.local locally, Project Settings → Environment Variables on Vercel.
export const runtime = "nodejs";

const clean = (v, max = 200) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function normaliseIndianMobile(value) {
  const digits = String(value ?? "").replace(/[^\d]/g, "");
  const ten = digits.replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(ten) ? ten : null;
}

let transporter;
function getTransporter() {
  transporter ??= nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });
  return transporter;
}

export async function POST(request) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD not set");
    return Response.json({ ok: false, error: "Email is not configured." }, { status: 500 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (body.website) return Response.json({ ok: true });

  const name = clean(body.name, 100);
  const mobile = normaliseIndianMobile(body.phone);
  const city = clean(body.city, 100);
  const service = clean(body.service, 150);
  const message = String(body.message ?? "").trim().slice(0, 2000);
  if (name.length < 2 || !mobile || city.length < 2 || !service || message.length < 10) {
    return Response.json({ ok: false, error: "Please fill in all required fields." }, { status: 400 });
  }

  const fields = [
    ["Name", name],
    ["Mobile", `+91 ${mobile}`],
    ["Business", clean(body.business, 150)],
    ["City", city],
    ["Service", service],
  ].filter(([, v]) => v);

  const text = [...fields.map(([k, v]) => `${k}: ${v}`), message && `\nProject:\n${message}`].filter(Boolean).join("\n");
  const html = `
    <h2 style="font-family:system-ui,sans-serif">New enquiry from ${escapeHtml(site.url.replace("https://", ""))}</h2>
    <table style="font-family:system-ui,sans-serif;border-collapse:collapse">
      ${fields
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`)
        .join("")}
    </table>
    ${message ? `<p style="font-family:system-ui,sans-serif;white-space:pre-wrap;margin-top:16px">${escapeHtml(message)}</p>` : ""}
    <p style="font-family:system-ui,sans-serif;margin-top:16px">
      <a href="https://wa.me/91${mobile}">Reply on WhatsApp</a> · <a href="tel:+91${mobile}">Call +91 ${mobile}</a>
    </p>`;

  try {
    await getTransporter().sendMail({
      from: `"${site.name} Website" <${process.env.GMAIL_USER}>`,
      to: site.email,
      subject: `New enquiry: ${name} — ${service.slice(0, 80)}`,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return Response.json({ ok: false, error: "Could not send email." }, { status: 502 });
  }
}
