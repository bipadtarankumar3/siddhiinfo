"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Loader2, Copy, Mail } from "lucide-react";
import { site, whatsappLink, mailHref } from "@/lib/site";
import { services, plans } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";

/*
  Enquiry form.
  "Send enquiry" POSTs JSON to /api/contact/ (src/app/api/contact/route.js), which
  emails it to site.email. Nothing is stored on the website itself.
  If sending fails, the visitor keeps everything they typed and gets other ways
  to reach us — an enquiry is never silently dropped.
*/
const ENDPOINT = "/api/contact/";

// Indian mobile: optional +91 / 91 / 0 prefix, then 10 digits starting 6–9
function normaliseIndianMobile(value) {
  const digits = String(value).replace(/[^\d]/g, "");
  const ten = digits.replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(ten) ? ten : null;
}

const baseOptions = [
  ...services.map((s) => s.title),
  ...plans.map((p) => `${p.name} package`),
  "Custom project / Enterprise",
  "Not sure — need advice",
];

const initial = { name: "", phone: "", business: "", city: "", service: "", message: "", website: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState(baseOptions);
  const errorRef = useRef(null);
  const successRef = useRef(null);

  // Pre-select a service passed as ?service=… from a "Get a quote" button
  useEffect(() => {
    const pre = new URLSearchParams(window.location.search).get("service");
    if (!pre) return;
    const match = baseOptions.find((o) => o === pre || o === `${pre} package`) ?? pre.slice(0, 80);
    /* eslint-disable react-hooks/set-state-in-effect -- one-time read of the URL after hydration */
    if (!baseOptions.includes(match)) setOptions([match, ...baseOptions]);
    setValues((v) => ({ ...v, service: match }));
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (status === "error") errorRef.current?.focus();
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function validate() {
    const er = {};
    if (values.name.trim().length < 2) er.name = "Please enter your name.";
    if (!normaliseIndianMobile(values.phone)) er.phone = "Enter a 10-digit Indian mobile number, e.g. 98765 43210.";
    if (values.city.trim().length < 2) er.city = "Please enter your city or town.";
    if (!values.service) er.service = "Please choose a service, or “Not sure — need advice”.";
    if (values.message.trim().length < 10) er.message = "Please describe what you need in a sentence or two.";
    if (values.message.length > 2000) er.message = "Please keep the description under 2,000 characters.";
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  function summary() {
    const mobile = normaliseIndianMobile(values.phone);
    return [
      "Website enquiry for Siddhi Info",
      `Name: ${values.name.trim()}`,
      `Mobile: +91 ${mobile ?? values.phone}`,
      values.business.trim() && `Business: ${values.business.trim()}`,
      `City: ${values.city.trim()}`,
      `Service: ${values.service}`,
      `Project: ${values.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      requestAnimationFrame(() => e.target.querySelector("[aria-invalid='true']")?.focus());
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, phone: `+91 ${normaliseIndianMobile(values.phone)}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setValues(initial);
    } catch {
      setStatus("error"); // values are kept so nothing is lost
    }
  }

  async function copyDetails() {
    try {
      await navigator.clipboard.writeText(summary());
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (status === "sent") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-2xl bg-mint-50 p-8 text-center ring-1 ring-mint-200 outline-none">
        <CheckCircle2 className="mx-auto size-12 text-mint-600" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-ink">Thank you — your enquiry has been sent.</h3>
        <p className="mt-2 text-slate-700">
          It has reached our team&apos;s inbox. We&apos;ll contact you {site.responseTime} on the mobile number you gave.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-6">Send another enquiry</button>
      </div>
    );
  }

  const wa = whatsappLink(summary());
  const mailto = `${mailHref}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(summary())}`;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-how">
      <p id="form-how" className="rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 ring-1 ring-slate-200">
        <strong className="text-ink">What happens when you send:</strong> your details are emailed to our team at{" "}
        <span className="break-all font-semibold">{site.email}</span>. We reply {site.responseTime} by phone or WhatsApp.
        Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.
      </p>

      {/* honeypot for spam bots — hidden from people and screen readers */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
      </div>

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
          autoComplete="tel-national"
          inputMode="tel"
          placeholder="98765 43210"
          prefix="+91"
        />
        <Field label="Business name" optional name="business" value={values.business} onChange={set("business")} autoComplete="organization" />
        <Field label="City / town" name="city" value={values.city} onChange={set("city")} error={errors.city} required autoComplete="address-level2" />
      </div>

      <div>
        <label htmlFor="service" className="label">
          Service <span className="text-rose-600" aria-hidden="true">*</span>
        </label>
        <select
          id="service"
          name="service"
          className={`input min-h-12 ${errors.service ? "!border-rose-500" : ""}`}
          value={values.service}
          onChange={set("service")}
          required
          aria-invalid={errors.service ? "true" : undefined}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="" disabled>Choose a service…</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        {errors.service && <p id="service-error" className="mt-1.5 text-sm text-rose-700">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="label">
          What do you need? <span className="text-rose-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={2000}
          className={`input ${errors.message ? "!border-rose-500" : ""}`}
          value={values.message}
          onChange={set("message")}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={`message-hint${errors.message ? " message-error" : ""}`}
          placeholder="E.g. I run a bakery and want customers to order cakes on WhatsApp."
        />
        <p id="message-hint" className="mt-1.5 text-sm text-slate-500">A sentence or two is enough.</p>
        {errors.message && <p id="message-error" className="mt-1 text-sm text-rose-700">{errors.message}</p>}
      </div>

      {status === "error" && (
        <div ref={errorRef} tabIndex={-1} role="alert" className="space-y-3 rounded-xl bg-rose-50 p-4 ring-1 ring-rose-200 outline-none">
          <p className="flex items-start gap-2 text-rose-900">
            <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <span>
              <strong>Your enquiry was not sent.</strong> Your details are still in the form. Please try again, or send them to us another way:
            </span>
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <button type="submit" className="btn btn-primary">Try again</button>
            <a href={mailto} className="btn btn-outline"><Mail className="size-4" aria-hidden="true" /> Email the details</a>
            {wa && (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsAppIcon className="size-4" /> Send on WhatsApp</a>
            )}
            <button type="button" onClick={copyDetails} className="btn btn-outline"><Copy className="size-4" aria-hidden="true" /> {copied ? "Copied" : "Copy details"}</button>
          </div>
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-70 sm:w-auto">
        {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      <p className="sr-only" role="status">{status === "sending" ? "Sending your enquiry" : ""}</p>

      <p className="text-sm leading-relaxed text-slate-600">
        <strong className="text-slate-700">Privacy:</strong> we use these details only to reply to your enquiry. They are sent by email
        to our inbox and are not stored on this website or shared with anyone else.{" "}
        <Link href="/privacy-policy/" className="font-semibold text-brand-700 underline">Privacy policy</Link>
      </p>
    </form>
  );
}

function Field({ label, name, error, prefix, optional, ...props }) {
  const input = (
    <input
      id={name}
      name={name}
      className={`input min-h-12 ${prefix ? "rounded-l-none" : ""} ${error ? "!border-rose-500" : ""}`}
      aria-invalid={error ? "true" : undefined}
      aria-describedby={error ? `${name}-error` : undefined}
      {...props}
    />
  );
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}{" "}
        {props.required && <span className="text-rose-600" aria-hidden="true">*</span>}
        {optional && <span className="font-normal text-slate-500">(optional)</span>}
      </label>
      {prefix ? (
        <div className="flex">
          <span className="grid place-items-center rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 px-3 text-sm font-semibold text-slate-700">{prefix}</span>
          {input}
        </div>
      ) : (
        input
      )}
      {error && <p id={`${name}-error`} className="mt-1.5 text-sm text-rose-700">{error}</p>}
    </div>
  );
}
