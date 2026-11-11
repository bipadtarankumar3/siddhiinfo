"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { translations, defaultLocale, languages } from "@/lib/translations";

const LanguageContext = createContext({
  locale: defaultLocale,
  setLocale: () => {},
  t: translations[defaultLocale],
  languages,
});

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("siddhi_locale_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("siddhi_locale_change", callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") return defaultLocale;
  try {
    const saved = localStorage.getItem("siddhi_locale");
    return saved && translations[saved] ? saved : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

function getServerSnapshot() {
  return defaultLocale;
}

export function LanguageProvider({ children }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = (code) => {
    if (translations[code] && typeof window !== "undefined") {
      try {
        localStorage.setItem("siddhi_locale", code);
      } catch {
        // ignore storage errors
      }
      window.dispatchEvent(new Event("siddhi_locale_change"));
    }
  };

  const t = translations[locale] || translations[defaultLocale];

  // Keep <html lang> in sync so screen readers pronounce Hindi/Bengali correctly
  useEffect(() => {
    const lang = languages.find((l) => l.code === locale)?.htmlLang || "en-IN";
    document.documentElement.lang = lang;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      locale: defaultLocale,
      setLocale: () => {},
      t: translations[defaultLocale],
      languages,
    };
  }
  return context;
}
