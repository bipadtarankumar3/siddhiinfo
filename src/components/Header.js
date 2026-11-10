"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X, ArrowRight, Phone } from "lucide-react";
import { Menu } from "lucide-react";
import { nav, whatsappLink } from "@/lib/site";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// Colored nav icons as inline SVG
function NavIcon({ href }) {
  if (href === "/services/")
    return (
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none">
        <rect x="2" y="3" width="9" height="9" rx="2" fill="#f97316" />
        <rect x="13" y="3" width="9" height="9" rx="2" fill="#3b82f6" />
        <rect x="2" y="14" width="9" height="9" rx="2" fill="#8b5cf6" />
        <rect x="13" y="14" width="9" height="9" rx="2" fill="#10b981" />
      </svg>
    );
  if (href === "/work/")
    return (
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none">
        <rect x="2" y="6" width="20" height="14" rx="3" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
        <path d="M12 12v4M10 14h4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  if (href === "/industries/")
    return (
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none">
        <path d="M3 21V9l6-6 6 6v12H3z" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M15 21V13l3-3 3 3v8" fill="#fed7aa" stroke="#f97316" strokeWidth="1.5" />
        <rect x="8" y="14" width="4" height="7" rx="1" fill="#f59e0b" />
      </svg>
    );
  if (href === "/pricing/")
    return (
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none">
        <circle cx="12" cy="12" r="10" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5" />
        <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="800" fill="#059669" fontFamily="system-ui">₹</text>
      </svg>
    );
  if (href === "/blog/")
    return (
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="3" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
        <line x1="7" y1="9" x2="17" y2="9" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="13" x2="14" y2="13" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="17" x2="11" y2="17" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  if (href === "/about/")
    return (
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none">
        <circle cx="12" cy="8" r="4" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" />
        <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  if (href === "/contact/")
    return (
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
        <path d="M2 6l10 7 10-7" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  return null;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLabels = {
    "/services/": t.nav.services,
    "/work/": t.nav.work,
    "/industries/": t.nav.industries,
    "/pricing/": t.nav.pricing,
    "/blog/": t.nav.blog,
    "/about/": t.nav.about,
    "/contact/": t.nav.contact,
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          solid ? "border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_-18px_rgb(7_20_51/0.4)] backdrop-blur-lg" : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-18 items-center justify-between gap-6">
          <Link href="/" aria-label="Siddhi Info home" className="shrink-0">
            <Logo light={!solid} priority />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className={`flex items-center gap-1 rounded-2xl p-1 ${solid ? "" : "glass"}`}>
              {nav.map((item) => {
                const active = pathname?.startsWith(item.href);
                const tone = solid
                  ? active ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:text-ink"
                  : active ? "bg-white/15 text-white" : "text-slate-200 hover:text-white";
                const label = navLabels[item.href] || item.label;
                return (
                  <li key={item.href}>
                    <Link href={item.href} className={`block rounded-xl px-4 py-2 text-sm font-medium transition ${tone}`}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <LanguageSwitcher light={!solid} />
            <Link href="/contact/" className={`btn hidden !py-2.5 sm:inline-flex ${solid ? "btn-primary" : "btn-light"}`}>
              {t.nav.freeConsultation} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              className={`grid size-11 place-items-center rounded-xl lg:hidden ${solid ? "text-ink hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile right-side slide drawer ── */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-y-0 right-0 z-[70] flex w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <Logo priority />
            {/* Indian flag badge */}
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-bold text-orange-600 ring-1 ring-orange-200">
              🇮🇳 Made in India
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-500 transition active:scale-95 hover:bg-slate-200"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Language switcher strip */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3">
          <span className="text-xs font-semibold text-slate-500">भाषा / Language:</span>
          <LanguageSwitcher compact />
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="flex flex-col gap-1">
            {nav.map((item, i) => {
              const active = pathname?.startsWith(item.href);
              const label = navLabels[item.href] || item.label;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 font-semibold transition-all active:scale-[0.98] ${
                      active
                        ? "bg-brand-50 text-brand-700 ring-1 ring-brand-200"
                        : "text-slate-700 hover:bg-slate-50 hover:text-ink"
                    }`}
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <NavIcon href={item.href} />
                    <span>{label}</span>
                    {active && <span className="ml-auto size-2 rounded-full bg-brand-500" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom sticky CTA bar */}
        <div className="border-t border-slate-100 bg-gradient-to-r from-slate-50 to-orange-50 px-4 py-4">
          {/* Quick contact */}
          <div className="mb-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-slate-100">
            <span className="grid size-8 place-items-center rounded-lg bg-brand-50">
              <Phone className="size-4 text-brand-600" />
            </span>
            <div>
              <p className="text-[10px] font-semibold text-slate-400">Call / WhatsApp</p>
              <p className="text-sm font-bold text-ink">+91 98300 XXXXX</p>
            </div>
          </div>
          {/* Action buttons */}
          <div className="flex flex-col gap-2">
            <a
              href={whatsappLink("Hi Siddhi Info! मैं अपने बिज़नेस के लिए वेबसाइट बनवाना चाहता हूँ।")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition active:scale-95"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp पर बात करें
            </a>
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition active:scale-95"
            >
              मुफ्त सलाह लें <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
