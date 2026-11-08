"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher({ light = false, compact = false }) {
  const { locale, setLocale, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === locale) || languages[0];

  if (compact) {
    return (
      <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 text-xs">
        {languages.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => setLocale(l.code)}
            className={`rounded-lg px-2.5 py-1 font-semibold transition ${
              locale === l.code
                ? "bg-brand-600 text-white shadow-sm"
                : "text-slate-600 hover:text-ink hover:bg-white"
            }`}
          >
            {l.nativeName}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold tracking-wide transition ${
          light
            ? "glass text-slate-100 hover:bg-white/20 hover:text-white"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-ink"
        }`}
        aria-label="Select Language"
        aria-expanded={open}
      >
        <Globe className="size-3.5" aria-hidden="true" />
        <span>{current.nativeName}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 w-36 overflow-hidden rounded-2xl bg-white p-1 text-xs shadow-xl ring-1 ring-slate-900/10">
          <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Language / भाषा
          </p>
          {languages.map((l) => {
            const active = locale === l.code;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition ${
                  active
                    ? "bg-brand-50 font-bold text-brand-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-ink"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{l.nativeName}</span>
                </span>
                {active && <Check className="size-3 text-brand-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

