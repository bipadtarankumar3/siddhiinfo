"use client";

import { useEffect } from "react";

/*
  Lightweight conversion tracking for Google Tag Manager / GA4.
  Pushes events to window.dataLayer (no personal data):
    whatsapp_click, phone_click, email_click,
    consultation_click (links to /contact/ or /get-a-quote/),
    demo_click (any element with data-track="demo")
  Form submissions push `quote_submit` / `contact_submit` from the forms.
  In GTM, create GA4 event tags triggered by these custom event names.
*/
export function track(event, params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.("a, [data-track]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const label = (a.getAttribute("aria-label") || a.textContent || "").trim().slice(0, 60);
      const page = window.location.pathname;
      if (a.dataset.track) return track(a.dataset.track, { label, page, url: href });
      if (href.includes("wa.me/")) return track("whatsapp_click", { label, page });
      if (href.startsWith("tel:")) return track("phone_click", { label, page });
      if (href.startsWith("mailto:")) return track("email_click", { label, page });
      if (/^\/(contact|get-a-quote)\//.test(href)) return track("consultation_click", { label, page, destination: href.split("#")[0] });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
