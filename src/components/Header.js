"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu after navigating
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled || open ? "border-b border-slate-200 bg-white/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Siddhi Info home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact/" className="btn btn-primary hidden !py-2.5 sm:inline-flex">
            Free consultation <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-ink hover:bg-slate-100 md:hidden"
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
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-slate-200 bg-white md:hidden">
          <ul className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact/" className="btn btn-primary w-full">
                Free consultation
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
