"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav } from "@/lib/site";
import Logo from "./Logo";

// Every page starts with a dark hero, so the header is transparent with light
// text at the top and turns solid white once the user scrolls.
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const solid = scrolled || open;

  return (
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
              return (
                <li key={item.href}>
                  <Link href={item.href} className={`block rounded-xl px-4 py-2 text-sm font-medium transition ${tone}`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact/" className={`btn hidden !py-2.5 sm:inline-flex ${solid ? "btn-primary" : "btn-light"}`}>
            Free consultation <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className={`grid size-11 place-items-center rounded-xl lg:hidden ${solid ? "text-ink hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact/" className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700">
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <Link href="/contact/" className="btn btn-primary w-full">
                Free consultation <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
