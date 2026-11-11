"use client";

import { useCallback, useEffect, useState } from "react";
import { RefreshCw, ShieldCheck } from "lucide-react";
import { site, mailHref } from "@/lib/site";

/** Loads a fresh single-use security code from /api/captcha/. */
export function useCaptcha() {
  const [captcha, setCaptcha] = useState({ image: "", token: "", loading: true, error: "" });
  const reload = useCallback(async () => {
    setCaptcha((c) => ({ ...c, loading: true, error: "" }));
    try {
      const res = await fetch("/api/captcha/", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Could not load the security code.");
      setCaptcha({ image: data.image, token: data.token, loading: false, error: "" });
    } catch (err) {
      setCaptcha({ image: "", token: "", loading: false, error: err.message });
    }
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial fetch of the security code
    reload();
  }, [reload]);
  return [captcha, reload];
}

export default function CaptchaField({ captcha, onReload, value, onChange, error, id = "captchaAnswer" }) {
  return (
    <div>
      <label htmlFor={id} className="label">
        Security code <span className="text-rose-600" aria-hidden="true">*</span>
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <div className="grid h-14 w-[170px] place-items-center overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-300">
          {captcha.image ? (
            // eslint-disable-next-line @next/next/no-img-element -- server-generated data URI
            <img src={captcha.image} alt="Security code image. If you cannot read it, use the New code button or email us." width={170} height={56} />
          ) : (
            <span className="text-xs text-slate-500">{captcha.loading ? "Loading…" : "Unavailable"}</span>
          )}
        </div>
        <button type="button" onClick={onReload} className="btn btn-outline min-h-12 !px-3" disabled={captcha.loading} aria-label="Get a new security code">
          <RefreshCw className={`size-4 ${captcha.loading ? "animate-spin" : ""}`} aria-hidden="true" /> New code
        </button>
        <input
          id={id}
          name={id}
          className={`input min-h-12 w-40 uppercase tracking-[0.3em] ${error ? "!border-rose-500" : ""}`}
          value={value}
          onChange={onChange}
          maxLength={5}
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          required
          aria-invalid={error ? "true" : undefined}
          aria-describedby={`${id}-hint${error ? ` ${id}-error` : ""}`}
          placeholder="ABC12"
        />
      </div>
      <p id={`${id}-hint`} className="mt-1.5 text-sm text-slate-500">
        <ShieldCheck className="mr-1 inline size-4 align-[-3px] text-green-700" aria-hidden="true" />
        Type the 5 characters above (not case-sensitive). Can&apos;t read it? Tap “New code” or email{" "}
        <a href={mailHref} className="break-all font-semibold text-brand-700 underline">{site.email}</a>.
      </p>
      {captcha.error && <p className="mt-1 text-sm text-rose-700">{captcha.error}</p>}
      {error && <p id={`${id}-error`} className="mt-1 text-sm text-rose-700">{error}</p>}
    </div>
  );
}
