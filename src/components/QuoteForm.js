"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Loader2, AlertCircle, Mail } from "lucide-react";
import ColorIcon from "./ColorIcon";
import CaptchaField, { useCaptcha } from "./CaptchaField";
import WhatsAppIcon from "./WhatsAppIcon";
import { track } from "./ClickTracker";
import { site, whatsappLink, mailHref } from "@/lib/site";
import { customerTypes, quoteServices, budgets, contactMethods, indianStates } from "@/lib/quoteOptions";

/*
  Multi-step Get-a-Quote form.
  1 Customer type → 2 Service → 3 Project details → 4 Review & send → Confirmation (reference ID).
  Posts to /api/quote/ (saves to MongoDB + emails the business). Values are kept
  on any error so nothing is lost.
*/
const STEPS = ["About you", "Service", "Project details", "Review"];

function mobileOk(v) {
  const digits = String(v).replace(/[^\d]/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}
const emailOk = (v) => /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,24}$/i.test(String(v).trim());

const empty = {
  customerType: "", service: "", businessName: "", name: "", phone: "", email: "", city: "", state: "",
  budget: "", description: "", preferredContact: "WhatsApp", captchaAnswer: "", website: "",
};

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [serverMsg, setServerMsg] = useState("");
  const [ref, setRef] = useState("");
  const [captcha, reloadCaptcha] = useCaptcha();
  const headingRef = useRef(null);
  const reduce = useReducedMotion();

  // Pre-select from links like /get-a-quote/?type=enterprise&service=crm-erp
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const type = customerTypes.find((c) => c.id === p.get("type"))?.id;
    const service = quoteServices.find((s) => s.id === p.get("service"))?.id;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of the URL after hydration
    if (type || service) setV((x) => ({ ...x, customerType: type || x.customerType, service: service || x.service }));
  }, []);

  const set = (k) => (e) => {
    const value = e?.target ? e.target.value : e;
    setV((x) => ({ ...x, [k]: value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function validate(s) {
    const er = {};
    if (s === 0 && !v.customerType) er.customerType = "Choose what describes you best.";
    if (s === 1 && !v.service) er.service = "Choose the service you need.";
    if (s === 2) {
      if (v.name.trim().length < 2) er.name = "Enter your name.";
      if (!mobileOk(v.phone)) er.phone = "Enter a 10-digit Indian mobile number, e.g. 98765 43210.";
      if (!emailOk(v.email)) er.email = "Enter a valid email address.";
      if (v.city.trim().length < 2) er.city = "Enter your city.";
      if (!v.state) er.state = "Choose your state.";
      if (!v.budget) er.budget = "Choose a budget range.";
      if (v.description.trim().length < 20) er.description = "Describe your project in a sentence or two (20+ characters).";
    }
    if (s === 3 && !/^[A-Za-z0-9]{5}$/.test(v.captchaAnswer.trim())) er.captchaAnswer = "Enter the 5 characters shown in the image.";
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  const go = (n) => {
    setStep(n);
    requestAnimationFrame(() => headingRef.current?.focus());
  };
  const next = () => { if (validate(step)) go(step + 1); else focusError(); };
  const focusError = () => requestAnimationFrame(() => document.querySelector("[aria-invalid='true'], [data-error='true']")?.focus());

  async function submit(e) {
    e.preventDefault();
    if (!validate(3)) return focusError();
    setStatus("sending");
    setServerMsg("");
    try {
      const res = await fetch("/api/quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...v, phone: mobileOk(v.phone), captchaToken: captcha.token, page: window.location.pathname }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setRef(data.ref);
        setStatus("done");
        track("quote_submit", { service: v.service, customer_type: v.customerType });
        return;
      }
      setV((x) => ({ ...x, captchaAnswer: "" }));
      reloadCaptcha();
      if (data.code === "captcha") {
        setStatus("idle");
        setErrors({ captchaAnswer: data.error });
        return focusError();
      }
      if (data.code === "validation" && data.errors) {
        setStatus("idle");
        setErrors(data.errors);
        const first = Object.keys(data.errors)[0];
        go(first === "customerType" ? 0 : first === "service" ? 1 : 2);
        return;
      }
      setServerMsg(data.error || "");
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const label = (list, id) => list.find((x) => x.id === id)?.label || "—";
  const summaryText = () =>
    [
      "Quote request for Siddhi Info",
      `Type: ${label(customerTypes, v.customerType)}`,
      `Service: ${label(quoteServices, v.service)}`,
      `Name: ${v.name}`,
      v.businessName && `Business: ${v.businessName}`,
      `Mobile: +91 ${mobileOk(v.phone) || v.phone}`,
      `Email: ${v.email}`,
      `Location: ${v.city}, ${v.state}`,
      `Budget: ${v.budget}`,
      `Preferred contact: ${v.preferredContact}`,
      `Project: ${v.description}`,
    ].filter(Boolean).join("\n");

  if (status === "done") {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-slate-200 sm:p-12">
        <CheckCircle2 className="mx-auto size-14 text-green-600" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-extrabold text-ink">Thank you — we&apos;ve received your request</h2>
        <p className="mt-3 text-slate-600">Your reference number is</p>
        <p className="mt-1 font-mono text-2xl font-black tracking-wider text-brand-800">{ref}</p>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          We&apos;ll contact you {site.responseTime} by {v.preferredContact.toLowerCase()}. Please mention this reference if you get in touch with us.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/work/" className="btn btn-outline">See our work</Link>
          <Link href="/" className="btn btn-primary">Back to home</Link>
        </div>
      </div>
    );
  }

  const wa = whatsappLink(summaryText());
  const mailto = `${mailHref}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(summaryText())}`;
  const motionProps = reduce
    ? {}
    : { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -24 }, transition: { duration: 0.22 } };

  return (
    <form onSubmit={step === 3 ? submit : (e) => { e.preventDefault(); next(); }} noValidate className="rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
      {/* honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="q-website">Website</label>
        <input id="q-website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set("website")} />
      </div>

      {/* progress */}
      <ol className="grid grid-cols-4 gap-1 border-b border-slate-200 p-4 sm:p-6" aria-label="Progress">
        {STEPS.map((s, i) => (
          <li key={s} className="flex flex-col gap-2" aria-current={i === step ? "step" : undefined}>
            <span className={`h-1.5 rounded-full ${i <= step ? "bg-cta" : "bg-slate-200"}`} />
            <span className={`hidden text-xs font-semibold sm:block ${i === step ? "text-ink" : "text-slate-500"}`}>
              {i < step && <Check className="mr-1 inline size-3.5 text-green-700" aria-hidden="true" />}
              {i + 1}. {s}
            </span>
          </li>
        ))}
      </ol>

      <div className="p-5 sm:p-8">
        <h2 ref={headingRef} tabIndex={-1} className="text-xl font-extrabold text-ink outline-none sm:text-2xl">
          <span className="text-sm font-semibold text-slate-500 sm:hidden">Step {step + 1} of 4 · </span>
          {["What describes you best?", "What do you need?", "Tell us about your project", "Review and send"][step]}
        </h2>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={step} {...motionProps} className="mt-6">
            {step === 0 && (
              <ChoiceGrid name="customerType" options={customerTypes} value={v.customerType} onChange={set("customerType")} error={errors.customerType} />
            )}
            {step === 1 && (
              <ChoiceGrid name="service" options={quoteServices} value={v.service} onChange={set("service")} error={errors.service} compact />
            )}
            {step === 2 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="q-name" label="Your name" value={v.name} onChange={set("name")} error={errors.name} required autoComplete="name" />
                <Field id="q-business" label="Business / organisation" optional value={v.businessName} onChange={set("businessName")} autoComplete="organization" />
                <Field id="q-phone" label="Mobile number" value={v.phone} onChange={set("phone")} error={errors.phone} required type="tel" inputMode="tel" autoComplete="tel-national" placeholder="98765 43210" prefix="+91" />
                <Field id="q-email" label="Email" value={v.email} onChange={set("email")} error={errors.email} required type="email" autoComplete="email" />
                <Field id="q-city" label="City / town" value={v.city} onChange={set("city")} error={errors.city} required autoComplete="address-level2" />
                <Select id="q-state" label="State" value={v.state} onChange={set("state")} error={errors.state} options={indianStates} placeholder="Choose your state…" />
                <Select id="q-budget" label="Budget range" value={v.budget} onChange={set("budget")} error={errors.budget} options={budgets} placeholder="Choose a range…" />
                <fieldset>
                  <legend className="label">Preferred contact</legend>
                  <div className="flex flex-wrap gap-2">
                    {contactMethods.map((m) => (
                      <label key={m} className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-xl px-3 text-sm font-semibold ring-1 ${v.preferredContact === m ? "bg-brand-50 text-brand-800 ring-brand-400" : "bg-white text-slate-700 ring-slate-300"}`}>
                        <input type="radio" name="preferredContact" value={m} checked={v.preferredContact === m} onChange={set("preferredContact")} className="size-4" /> {m}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="sm:col-span-2">
                  <label htmlFor="q-description" className="label">Project description <span className="text-rose-600" aria-hidden="true">*</span></label>
                  <textarea
                    id="q-description"
                    rows={5}
                    maxLength={3000}
                    className={`input ${errors.description ? "!border-rose-500" : ""}`}
                    value={v.description}
                    onChange={set("description")}
                    aria-invalid={errors.description ? "true" : undefined}
                    aria-describedby={`q-description-hint${errors.description ? " q-description-error" : ""}`}
                    placeholder="What do you want to build or improve? Who will use it? Any deadline or existing system?"
                  />
                  <p id="q-description-hint" className="mt-1.5 text-sm text-slate-500">A few sentences is enough — we&apos;ll ask the rest on the call.</p>
                  {errors.description && <p id="q-description-error" className="mt-1 text-sm text-rose-700">{errors.description}</p>}
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-6">
                <dl className="grid gap-x-6 gap-y-2 rounded-2xl bg-slate-50 p-5 text-sm ring-1 ring-slate-200 sm:grid-cols-[auto_1fr]">
                  {[
                    ["You are", label(customerTypes, v.customerType), 0],
                    ["Service", label(quoteServices, v.service), 1],
                    ["Name", `${v.name}${v.businessName ? ` · ${v.businessName}` : ""}`, 2],
                    ["Contact", `+91 ${mobileOk(v.phone)} · ${v.email}`, 2],
                    ["Location", `${v.city}, ${v.state}`, 2],
                    ["Budget", v.budget, 2],
                    ["Preferred contact", v.preferredContact, 2],
                    ["Project", v.description, 2],
                  ].map(([k, val, s]) => (
                    <div key={k} className="contents">
                      <dt className="text-slate-500">{k}</dt>
                      <dd className="flex items-start justify-between gap-3 font-medium text-ink">
                        <span className="whitespace-pre-wrap break-words">{val}</span>
                        <button type="button" onClick={() => go(s)} className="shrink-0 text-xs font-semibold text-brand-700 underline">Edit</button>
                      </dd>
                    </div>
                  ))}
                </dl>
                <CaptchaField
                  id="q-captcha"
                  captcha={captcha}
                  onReload={() => { setV((x) => ({ ...x, captchaAnswer: "" })); reloadCaptcha(); }}
                  value={v.captchaAnswer}
                  onChange={set("captchaAnswer")}
                  error={errors.captchaAnswer}
                />
                <p className="text-sm text-slate-600">
                  When you send, your request is saved securely and emailed to our team. We use it only to reply and prepare a quotation.{" "}
                  <Link href="/privacy-policy/" className="font-semibold text-brand-700 underline">Privacy policy</Link>
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {status === "error" && (
          <div role="alert" className="mt-6 space-y-3 rounded-xl bg-rose-50 p-4 ring-1 ring-rose-200">
            <p className="flex items-start gap-2 text-rose-900">
              <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <span><strong>Your request was not sent.</strong> {serverMsg || "Your details are kept."} Try again, or send them another way:</span>
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a href={mailto} className="btn btn-outline"><Mail className="size-4" aria-hidden="true" /> Email the details</a>
              {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsAppIcon className="size-4" /> Send on WhatsApp</a>}
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-slate-200 pt-6">
          {step > 0 ? (
            <button type="button" onClick={() => go(step - 1)} className="btn btn-outline">
              <ArrowLeft className="size-4" aria-hidden="true" /> Back
            </button>
          ) : <span />}
          {step < 3 ? (
            <button type="submit" className="btn btn-cta">
              Continue <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          ) : (
            <button type="submit" disabled={status === "sending"} className="btn btn-cta disabled:opacity-70">
              {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
              {status === "sending" ? "Sending…" : "Send request"}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

function ChoiceGrid({ name, options, value, onChange, error, compact }) {
  return (
    <fieldset>
      <legend className="sr-only">{name === "service" ? "Service" : "Customer type"}</legend>
      <div className={`grid gap-3 ${compact ? "grid-cols-2 sm:grid-cols-3" : "sm:grid-cols-2"}`} data-error={error ? "true" : undefined} tabIndex={error ? -1 : undefined}>
        {options.map((o) => {
          const checked = value === o.id;
          return (
            <label
              key={o.id}
              className={`relative flex cursor-pointer items-center gap-3 rounded-2xl p-4 ring-2 transition ${checked ? "bg-orange-50 ring-cta" : "bg-white ring-slate-200 hover:ring-brand-300"}`}
            >
              <input type="radio" name={name} value={o.id} checked={checked} onChange={() => onChange(o.id)} className="sr-only" />
              <ColorIcon name={o.icon} className={compact ? "size-10" : "size-12"} />
              <span>
                <span className="block font-bold text-ink">{o.label}</span>
                {o.text && <span className="block text-sm text-slate-600">{o.text}</span>}
              </span>
              {checked && <Check className="absolute right-3 top-3 size-5 text-cta" aria-hidden="true" />}
            </label>
          );
        })}
      </div>
      {error && <p className="mt-2 text-sm text-rose-700">{error}</p>}
    </fieldset>
  );
}

function Field({ id, label, error, prefix, optional, required, ...props }) {
  const input = (
    <input
      id={id}
      className={`input min-h-12 ${prefix ? "rounded-l-none" : ""} ${error ? "!border-rose-500" : ""}`}
      aria-invalid={error ? "true" : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      required={required}
      {...props}
    />
  );
  return (
    <div>
      <label htmlFor={id} className="label">
        {label} {required && <span className="text-rose-600" aria-hidden="true">*</span>}
        {optional && <span className="font-normal text-slate-500">(optional)</span>}
      </label>
      {prefix ? (
        <div className="flex">
          <span className="grid place-items-center rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 px-3 text-sm font-semibold text-slate-700">{prefix}</span>
          {input}
        </div>
      ) : input}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-rose-700">{error}</p>}
    </div>
  );
}

function Select({ id, label, error, options, placeholder, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="label">{label} <span className="text-rose-600" aria-hidden="true">*</span></label>
      <select
        id={id}
        className={`input min-h-12 ${error ? "!border-rose-500" : ""}`}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        required
        {...props}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-rose-700">{error}</p>}
    </div>
  );
}
