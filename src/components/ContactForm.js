"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/data";

// Static site = no server. The form composes the enquiry and opens WhatsApp
// (or the email app) with everything pre-filled, so no lead is lost.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function compose(form) {
    const d = new FormData(form);
    return [
      `Hi Siddhi Info, I'd like a free consultation.`,
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      d.get("business") && `Business: ${d.get("business")}`,
      d.get("city") && `City: ${d.get("city")}`,
      `Interested in: ${d.get("service")}`,
      d.get("message") && `Details: ${d.get("message")}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function onSubmit(e) {
    e.preventDefault();
    const text = compose(e.currentTarget);
    const via = e.nativeEvent.submitter?.value;
    if (via === "email") {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Enquiry from website")}&body=${encodeURIComponent(text)}`;
    } else {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    }
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Mobile number" name="phone" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9+\s\-]{10,15}" placeholder="+91" />
        <Field label="Business name" name="business" autoComplete="organization" />
        <Field label="City" name="city" autoComplete="address-level2" />
      </div>
      <div>
        <label htmlFor="service" className="label">What do you need?</label>
        <select id="service" name="service" className="input" defaultValue={services[0].title}>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Not sure — need advice</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="label">Tell us about your business <span className="font-normal text-slate-400">(optional)</span></label>
        <textarea id="message" name="message" rows={4} className="input" placeholder="E.g. I run a bakery in Salt Lake and want online orders…" />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" value="whatsapp" className="btn btn-primary flex-1">
          <Send className="size-4" aria-hidden="true" /> Send on WhatsApp
        </button>
        <button type="submit" value="email" className="btn btn-outline flex-1">
          Send by email
        </button>
      </div>
      {sent && (
        <p role="status" className="rounded-xl bg-mint-50 p-4 text-sm text-mint-700 ring-1 ring-mint-100">
          Thank you! Your message is ready in WhatsApp / email — just press send. We usually reply within a few working hours.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, ...props }) {
  return (
    <div>
      <label htmlFor={name} className="label">{label}</label>
      <input id={name} name={name} className="input" {...props} />
    </div>
  );
}
