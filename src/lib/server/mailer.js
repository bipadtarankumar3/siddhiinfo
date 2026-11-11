import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const hasMailer = () => Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);

const escapeHtml = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

let transporter;
function getTransporter() {
  transporter ??= nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });
  return transporter;
}

/** Emails a new enquiry to the business inbox. fields: [[label, value], ...] */
export async function sendLeadEmail({ subject, ref, fields, message, mobile, email }) {
  const rows = fields.filter(([, v]) => v);
  const text = [ref && `Reference: ${ref}`, ...rows.map(([k, v]) => `${k}: ${v}`), message && `\nDetails:\n${message}`].filter(Boolean).join("\n");
  const html = `
    <h2 style="font-family:system-ui,sans-serif">${escapeHtml(subject)}</h2>
    ${ref ? `<p style="font-family:system-ui,sans-serif">Reference: <strong>${escapeHtml(ref)}</strong></p>` : ""}
    <table style="font-family:system-ui,sans-serif;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${escapeHtml(k)}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`).join("")}
    </table>
    ${message ? `<p style="font-family:system-ui,sans-serif;white-space:pre-wrap;margin-top:16px">${escapeHtml(message)}</p>` : ""}
    <p style="font-family:system-ui,sans-serif;margin-top:16px">
      ${mobile ? `<a href="https://wa.me/91${mobile}">Reply on WhatsApp</a> · <a href="tel:+91${mobile}">Call +91 ${mobile}</a>` : ""}
      ${email ? ` · <a href="mailto:${escapeHtml(email)}">Email</a>` : ""}
    </p>`;
  await getTransporter().sendMail({
    from: `"${site.name} Website" <${process.env.GMAIL_USER}>`,
    to: site.email,
    replyTo: email || undefined,
    subject: ref ? `${subject} [${ref}]` : subject,
    text,
    html,
  });
}
