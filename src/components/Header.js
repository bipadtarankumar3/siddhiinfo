"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { X, Menu, ArrowRight, Phone, Mail } from "lucide-react";
import { nav, site, whatsappLink, telHref, mailHref } from "@/lib/site";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import WhatsAppIcon from "./WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const closeRef = useRef(null);
  const toggleRef = useRef(null);
  const wa = whatsappLink();

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

  // Escape closes, focus moves into the drawer and back to the toggle, body scroll locked
  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      toggle?.focus();
    };
  }, [open]);

  // Home and inner pages start with a dark hero, so the bar is transparent until scrolled
  // The homepage hero is light, so the bar is always solid there
  const solid = scrolled || open || pathname === "/";
  const isActive = (href) => pathname?.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          solid ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur" : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-18 items-center justify-between gap-4">
          <Link href="/" aria-label="Siddhi Info home" className="shrink-0">
            <Logo light={!solid} priority />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => {
                const active = isActive(item.href);
                const tone = solid
                  ? active ? "bg-brand-50 text-brand-800" : "text-slate-700 hover:bg-slate-100 hover:text-ink"
                  : active ? "bg-white/15 text-white" : "text-slate-100 hover:bg-white/10 hover:text-white";
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block whitespace-nowrap rounded-lg px-3 py-2.5 text-[0.9rem] font-semibold transition ${tone}`}
                    >
                      {t.nav[item.key]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageSwitcher light={!solid} />
            </div>
            <Link href="/contact/" className={`btn hidden !px-4 !py-2.5 text-sm md:inline-flex ${solid ? "btn-primary" : "btn-light"}`}>
              {t.nav.consultation}
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className={`flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold xl:hidden ${
                solid ? "text-ink ring-1 ring-slate-200 hover:bg-slate-100" : "text-white ring-1 ring-white/25 hover:bg-white/10"
              }`}
              aria-label={t.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" aria-hidden="true" />
              <span className="hidden min-[400px]:inline">{t.nav.menu}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet drawer */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-ink/50 transition-opacity duration-200 xl:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.menu}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[min(22rem,90vw)] flex-col bg-white shadow-2xl transition-[transform,visibility] duration-200 xl:hidden ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.nav.closeMenu}
            className="grid size-11 place-items-center rounded-xl text-slate-600 hover:bg-slate-100"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="border-b border-slate-200 px-4 py-3">
          <p className="mb-2 text-xs font-semibold text-slate-500">{t.nav.language} / Language</p>
          <LanguageSwitcher full />
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="space-y-1">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-12 items-center rounded-xl px-4 text-base font-semibold ${
                      active ? "bg-brand-50 text-brand-800" : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-2 border-t border-slate-200 bg-slate-50 p-4">
          <Link href="/contact/" onClick={() => setOpen(false)} className="btn btn-primary w-full">
            {t.nav.consultation} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
              <WhatsAppIcon className="size-5" /> WhatsApp
            </a>
          )}
          <div className="flex flex-col gap-1 pt-1 text-sm">
            {telHref && (
              <a href={telHref} className="flex min-h-11 items-center gap-2 text-slate-700"><Phone className="size-4" aria-hidden="true" /> {site.phone}</a>
            )}
            <a href={mailHref} className="flex min-h-11 items-center gap-2 break-all text-slate-700"><Mail className="size-4 shrink-0" aria-hidden="true" /> {site.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
