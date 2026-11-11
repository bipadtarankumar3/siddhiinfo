"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { X, Menu, ChevronDown, Phone, Mail } from "lucide-react";
import { nav, site, whatsappLink, telHref, mailHref } from "@/lib/site";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import WhatsAppIcon from "./WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

/*
  Sticky header with dropdown menus (Solutions, Services).
  Desktop (xl+): hover or click to open, Escape / outside click closes, full keyboard support.
  Below xl: slide-in drawer with accordion groups.
*/
export default function Header() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [menu, setMenu] = useState(null); // open desktop dropdown key
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const closeRef = useRef(null);
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const hoverTimer = useRef(null);
  const wa = whatsappLink();

  const label = (item) => item.label || t.nav[item.key] || item.key;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setMenu(null);
  }

  // desktop dropdown: Escape and outside click close it
  useEffect(() => {
    if (!menu) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenu(null);
        navRef.current?.querySelector(`[data-menu-button="${menu}"]`)?.focus();
      }
    };
    const onDown = (e) => { if (!navRef.current?.contains(e.target)) setMenu(null); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [menu]);

  // mobile drawer: focus management, Escape, scroll lock
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

  const solid = scrolled || open || pathname === "/";
  const isActive = (item) =>
    item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href) || item.children?.some((c) => pathname?.startsWith(c.href));

  const hoverOpen = (key) => { clearTimeout(hoverTimer.current); setMenu(key); };
  const hoverClose = () => { clearTimeout(hoverTimer.current); hoverTimer.current = setTimeout(() => setMenu(null), 150); };

  const linkTone = (active) =>
    solid
      ? active ? "bg-brand-50 text-brand-800" : "text-slate-700 hover:bg-slate-100 hover:text-ink"
      : active ? "bg-white/15 text-white" : "text-slate-100 hover:bg-white/10 hover:text-white";

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

          <nav ref={navRef} aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => {
                const active = isActive(item);
                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={`block whitespace-nowrap rounded-lg px-3 py-2.5 text-[0.9rem] font-semibold transition ${linkTone(active)}`}
                      >
                        {label(item)}
                      </Link>
                    </li>
                  );
                }
                const isOpen = menu === item.key;
                const wide = item.children.length > 3;
                return (
                  <li key={item.key} className="relative" onMouseEnter={() => hoverOpen(item.key)} onMouseLeave={hoverClose}>
                    <button
                      type="button"
                      data-menu-button={item.key}
                      aria-expanded={isOpen}
                      aria-controls={`menu-${item.key}`}
                      onClick={() => setMenu(isOpen ? null : item.key)}
                      className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2.5 text-[0.9rem] font-semibold transition ${linkTone(active)}`}
                    >
                      {label(item)}
                      <ChevronDown className={`size-4 transition ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    <div id={`menu-${item.key}`} hidden={!isOpen} className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 ${wide ? "w-[30rem]" : "w-80"}`}>
                      <ul className={`grid gap-1 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-200 ${wide ? "grid-cols-2" : ""}`}>
                        {item.children.map((c) => {
                          const all = c.key === "allServices";
                          return (
                            <li key={c.href} className={all ? "col-span-full border-t border-slate-100 pt-1" : ""}>
                              <Link
                                href={c.href}
                                onClick={() => setMenu(null)}
                                className={`block rounded-xl px-3 py-2.5 hover:bg-brand-50 ${all ? "text-sm font-bold text-brand-700" : "text-sm font-semibold text-ink"}`}
                              >
                                {label(c)}
                                {c.desc && <span className="mt-0.5 block text-xs font-normal leading-snug text-slate-500">{t.nav[c.desc]}</span>}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageSwitcher light={!solid} />
            </div>
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp (opens WhatsApp)"
                className="hidden size-11 place-items-center rounded-xl bg-[#0b7a4b] text-white hover:bg-[#096640] md:grid"
              >
                <WhatsAppIcon className="size-5" />
              </a>
            )}
            <Link href="/get-a-quote/" className="btn btn-cta hidden !px-4 !py-2.5 text-sm md:inline-flex">
              {t.nav.getQuote}
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
          <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label={t.nav.closeMenu} className="grid size-11 place-items-center rounded-xl text-slate-600 hover:bg-slate-100">
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="border-b border-slate-200 px-4 py-3">
          <p className="mb-2 text-xs font-semibold text-slate-500">{t.nav.language} / Language</p>
          <LanguageSwitcher full />
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="space-y-1">
            {nav.map((item) =>
              item.children ? (
                <li key={item.key}>
                  <details className="group" open={isActive(item) || undefined}>
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between rounded-xl px-4 text-base font-semibold text-slate-800 hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                      {label(item)}
                      <ChevronDown className="size-5 text-slate-400 transition group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="mb-1 ml-4 border-l border-slate-200 pl-2">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className={`flex min-h-11 items-center rounded-lg px-3 text-[0.95rem] ${pathname === c.href ? "bg-brand-50 font-semibold text-brand-800" : "text-slate-700 hover:bg-slate-50"}`}
                          >
                            {label(c)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-12 items-center rounded-xl px-4 text-base font-semibold ${isActive(item) ? "bg-brand-50 text-brand-800" : "text-slate-800 hover:bg-slate-50"}`}
                  >
                    {label(item)}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="space-y-2 border-t border-slate-200 bg-slate-50 p-4">
          <Link href="/get-a-quote/" onClick={() => setOpen(false)} className="btn btn-cta w-full">
            {t.nav.getQuote}
          </Link>
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
              <WhatsAppIcon className="size-5" /> WhatsApp
            </a>
          )}
          <div className="flex flex-col gap-1 pt-1 text-sm">
            {telHref && <a href={telHref} className="flex min-h-11 items-center gap-2 text-slate-700"><Phone className="size-4" aria-hidden="true" /> {site.phone}</a>}
            <a href={mailHref} className="flex min-h-11 items-center gap-2 break-all text-slate-700"><Mail className="size-4 shrink-0" aria-hidden="true" /> {site.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
