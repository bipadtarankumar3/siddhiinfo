"use client";

import { useLanguage } from "@/context/LanguageContext";

/*
  Always-visible segmented control: EN · हि · বা
  Short labels keep it one line in the header; full names are exposed to
  screen readers. Changing language never blocks or reloads the page.
*/
const short = { en: "EN", hi: "हि", bn: "বা" };

export default function LanguageSwitcher({ light = false, full = false }) {
  const { locale, setLocale, languages, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={`${t.nav.language} / Language`}
      className={`flex shrink-0 items-center rounded-xl p-0.5 text-xs font-semibold ${light ? "bg-white/10 ring-1 ring-white/20" : "bg-slate-100 ring-1 ring-slate-200"}`}
    >
      {languages.map((l) => {
        const active = locale === l.code;
        return (
          <button
            key={l.code}
            type="button"
            lang={l.htmlLang}
            aria-pressed={active}
            aria-label={l.code === "en" ? "English" : `${l.nativeName} (${l.name})`}
            onClick={() => setLocale(l.code)}
            className={`min-h-9 min-w-9 whitespace-nowrap rounded-[0.6rem] px-2 transition ${
              active
                ? light ? "bg-white text-ink" : "bg-brand-700 text-white"
                : light ? "text-slate-200 hover:text-white" : "text-slate-600 hover:text-ink"
            } ${full ? "min-h-11 flex-1 px-3 text-sm" : ""}`}
          >
            {full ? l.nativeName : short[l.code]}
          </button>
        );
      })}
    </div>
  );
}
