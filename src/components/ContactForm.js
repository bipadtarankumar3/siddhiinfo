"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/data";

/*
  Enquiry form.
  This is a static site (no server). Two ways the enquiry reaches you:

  1. If NEXT_PUBLIC_FORM_ENDPOINT is set at build time (e.g. a Formspree,
     Web3Forms, Getform or your own API URL that accepts JSON POST), the form
     is submitted there and a success message is shown.
  2. Otherwise the visitor sends the pre-filled enquiry to you on WhatsApp or
     by email — the message tells them clearly to press "send".
*/
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

// Indian mobile: optional +91 / 91 / 0 prefix, then 10 digits starting 6–9
function normaliseIndianMobile(value) {
  const digits = String(value).replace(/[^\d]/g, "");
  const ten = digits.replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(ten) ? ten : null;
}

const initial = { name: "", phone: "", business: "", city: "", service: services[0].title, message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | handoff | error

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function validate() {
    const er = {};
    if (values.name.trim().length < 2) er.name = "Please enter your name.";
    if (!normaliseIndianMobile(values.phone)) er.phone = "Enter a valid 10-digit Indian mobile number (e.g. 98765 43210).";
    if (values.message.length > 2000) er.message = "Please keep the description under 2000 characters.";
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  function summary() {
    const mobile = normaliseIndianMobile(values.phone);
    return [
      "Hi Siddhi Info, I'd like a free consultation.",
      `Name: ${values.name.trim()}`,
      `Mobile: +91 ${mobile}`,
      values.business && `Business: ${values.business.trim()}`,
      values.city && `City: ${values.city.trim()}`,
      `Service: ${values.service}`,
      values.message && `Project: ${values.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      const first = e.currentTarget.querySelector("[aria-invalid='true']");
      first?.focus();
      return;
    }
    const via = e.nativeEvent.submitter?.value;

    if (ENDPOINT && via !== "whatsapp" && via !== "email") {
      setStatus("sending");
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...values, phone: `+91 ${normaliseIndianMobile(values.phone)}`, source: "siddhiinfo.in" }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        setValues(initial);
      } catch {
        setStatus("error");
      }
      return;
    }

    const text = summary();
    if (via === "email") {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("New enquiry from website")}&body=${encodeURIComponent(text)}`;
    } else {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    }
    setStatus("handoff");
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl bg-mint-50 p-8 text-center ring-1 ring-mint-100">
        <CheckCircle2 className="mx-auto size-12 text-mint-600" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-ink">Thank you! Your enquiry has been received.</h3>
        <p className="mt-2 text-slate-600">Our team will call or WhatsApp you within one working day. धन्यवाद!</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-6">Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" value={values.name} onChange={set("name")} error={errors.name} required autoComplete="name" />
        <Field
          label="Mobile number"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="98765 43210"
          prefix="+91"
        />
        <Field label="Business name" name="business" value={values.business} onChange={set("business")} autoComplete="organization" />
        <Field label="City" name="city" value={values.city} onChange={set("city")} autoComplete="address-level2" />
      </div>
      <div>
        <label htmlFor="service" className="label">Required service</label>
        <select id="service" name="service" className="input" value={values.service} onChange={set("service")}>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Not sure — need advice</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="label">
          Project description <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="input"
          value={values.message}
          onChange={set("message")}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="E.g. I run a bakery in Salt Lake and want a website with online orders…"
        />
        {errors.message && <p id="message-error" className="mt-1.5 text-sm text-rose-600">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-rose-50 p-4 text-sm text-rose-700 ring-1 ring-rose-100">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Sorry, we couldn’t send your enquiry right now. Please use the WhatsApp button below or call us.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        {ENDPOINT ? (
          <>
            <button type="submit" value="form" disabled={status === "sending"} className="btn btn-primary flex-1 disabled:opacity-70">
              {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
              {status === "sending" ? "Sending…" : "Send enquiry"}
            </button>
            <button type="submit" value="whatsapp" className="btn btn-outline flex-1">Send on WhatsApp</button>
          </>
        ) : (
          <>
            <button type="submit" value="whatsapp" className="btn btn-primary flex-1">
              <Send className="size-4" aria-hidden="true" /> Send on WhatsApp
            </button>
            <button type="submit" value="email" className="btn btn-outline flex-1">Send by email</button>
          </>
        )}
      </div>

      {status === "handoff" && (
        <p role="status" className="flex items-start gap-2 rounded-xl bg-mint-50 p-4 text-sm text-mint-700 ring-1 ring-mint-100">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Almost done! Your enquiry is ready in WhatsApp / your email app — just press <strong>Send</strong>. We usually reply within a few working hours.
        </p>
      )}
      <p className="text-xs text-slate-500">We only use your details to reply to your enquiry. No spam, ever.</p>
    </form>
  );
}

function Field({ label, name, error, prefix, ...props }) {
  const input = (
    <input
      id={name}
      name={name}
      className={`input ${prefix ? "rounded-l-none" : ""} ${error ? "!border-rose-400" : ""}`}
      aria-invalid={error ? "true" : undefined}
      aria-describedby={error ? `${name}-error` : undefined}
      {...props}
    />
  );
  return (
    <div>
      <label htmlFor={name} className="label">
        {label} {props.required && <span className="text-rose-500" aria-hidden="true">*</span>}
      </label>
      {prefix ? (
        <div className="flex">
          <span className="grid place-items-center rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 px-3 text-sm font-semibold text-slate-600">{prefix}</span>
          {input}
        </div>
      ) : (
        input
      )}
      {error && <p id={`${name}-error`} className="mt-1.5 text-sm text-rose-600">{error}</p>}
    </div>
  );
}
