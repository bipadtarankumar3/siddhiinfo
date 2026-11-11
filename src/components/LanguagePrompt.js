"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const DISMISS_KEY = "siddhi_lang_prompt_dismissed";

/*
  Small, non-blocking language suggestion. Shown only when:
  - the browser prefers Hindi or Bengali,
  - the visitor hasn't picked a language yet, and
  - they haven't dismissed it before.
  It never covers the page content and can be ignored.
*/
export default function LanguagePrompt() {
  const { locale, setLocale } = useLanguage();
  const [suggest, setSuggest] = useState(null);

  useEffect(() => {
    try {
      if (localStorage.getItem("siddhi_locale") || localStorage.getItem(DISMISS_KEY)) return;
      const pref = (navigator.languages || [navigator.language]).map((l) => l?.slice(0, 2)).find((l) => l === "hi" || l === "bn");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reads browser-only preferences after hydration
      if (pref) setSuggest(pref);
    } catch {
      // storage blocked: just don't show the prompt
    }
  }, []);

  if (!suggest || locale !== "en") return null;

  const t = translations[suggest];
  const dismiss = () => {
    try { localStorage.setItem(DISMISS_KEY, "1"); } catch {}
    setSuggest(null);
  };

  return (
    <div
      role="region"
      aria-label="Language suggestion"
      lang={suggest}
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 mx-auto flex max-w-md items-center gap-3 rounded-2xl bg-white p-3 pl-4 text-sm text-slate-700 shadow-xl ring-1 ring-slate-200 sm:left-5 sm:right-auto"
    >
      <p className="flex-1">{t.langPrompt.text}</p>
      <button
        type="button"
        onClick={() => { setLocale(suggest); setSuggest(null); }}
        className="min-h-11 shrink-0 rounded-xl bg-brand-700 px-3 font-semibold text-white hover:bg-brand-800"
      >
        {suggest === "hi" ? "हिन्दी" : "বাংলা"}
      </button>
      <button type="button" onClick={dismiss} aria-label={`${t.langPrompt.dismiss} / Dismiss`} className="grid size-11 shrink-0 place-items-center rounded-xl text-slate-500 hover:bg-slate-100">
        <X className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
