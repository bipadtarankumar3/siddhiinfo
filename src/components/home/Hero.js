"use client";

import Link from "next/link";
import { ArrowRight, BadgeIndianRupee, Code2, Layers, TrendingUp, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import BrandIcon from "@/components/BrandIcon";
import { LaptopFrame, PhoneFrame } from "@/components/mockups/Frames";
import { DesktopMock, MobileMock } from "@/components/mockups/SiteMocks";
import { whatsappLink } from "@/lib/site";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, locale } = useLanguage();

  const values = [
    { icon: BadgeIndianRupee, label: t.hero.values.affordable },
    { icon: Code2, label: t.hero.values.developerSupport },
    { icon: Layers, label: t.hero.values.completeSolution },
  ];

  return (
    <section className="bg-hero relative -mt-18 overflow-hidden pt-18 text-white">
      {/* animated gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-32 top-20 size-[30rem] rounded-full bg-brand-500/30 blur-3xl" />
        <div className="animate-blob-slow absolute right-[-10rem] top-[-6rem] size-[34rem] rounded-full bg-electric-500/25 blur-3xl" />
        <div className="animate-blob absolute bottom-[-12rem] left-1/3 size-[28rem] rounded-full bg-mint-400/15 blur-3xl" />
        <div className="bg-dots absolute inset-0" />
      </div>

      <div className="container-x relative grid items-center gap-14 pb-20 pt-12 sm:pt-16 xl:grid-cols-[1fr_1.12fr] xl:gap-10 lg:pb-28">
        <div>
          <div data-reveal className="flex flex-wrap items-center gap-2">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium text-slate-200">
              <Sparkles className="size-4 text-mint-400" aria-hidden="true" />
              {t.hero.tagline}
            </span>
            <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 ring-1 ring-amber-400/40">
              लोकल से डिजिटल 🇮🇳
            </span>
          </div>

          <h1 data-reveal style={{ "--reveal-delay": "80ms" }} className="mt-6 text-[2.5rem] font-extrabold leading-[1.06] tracking-tight text-balance sm:text-6xl xl:text-[3.6rem] 2xl:text-[3.9rem]">
            {t.hero.heading} <span className="text-gradient-light">{t.hero.headingHighlight}</span>
          </h1>

          <p data-reveal style={{ "--reveal-delay": "160ms" }} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {t.hero.subheading}
          </p>

          <div data-reveal style={{ "--reveal-delay": "220ms" }} className="mt-4 flex flex-wrap items-center gap-3">
            <p className="text-2xl font-bold text-mint-400">
              {locale === "bn" ? t.hero.bengaliSlogan : t.hero.hindiSlogan}
            </p>
            {locale === "en" && (
              <span className="text-sm font-semibold text-amber-300/90">
                (Aapka Business, Hamari Technology)
              </span>
            )}
          </div>

          <div data-reveal style={{ "--reveal-delay": "280ms" }} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn btn-light">
              {t.hero.ctaConsultation} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/services/" className="btn btn-glass">
              {t.hero.ctaServices}
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white shadow-lg shadow-green-900/30 hover:bg-[#1fb857]">
              <WhatsAppIcon className="size-5" /> {t.hero.ctaWhatsApp}
            </a>
          </div>

          <ul data-reveal style={{ "--reveal-delay": "340ms" }} className="mt-9 grid gap-3 sm:grid-cols-3">
            {values.map(({ icon: I, label }) => (
              <li key={label} className="glass flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-electric-500">
                  <I className="size-4 text-white" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      role="img"
      aria-label="A business website on a laptop, an ordering app on a phone and an analytics dashboard — the kind of solutions Siddhi Info builds"
      className="group relative mx-auto w-full max-w-xl pb-10 pt-6 [perspective:1400px] sm:max-w-2xl xl:max-w-none"
    >
      <div className="relative transition-transform duration-700 ease-out group-hover:[transform:rotateY(-5deg)_rotateX(3deg)]">
        {/* glow */}
        <div aria-hidden="true" className="absolute inset-8 rounded-full bg-gradient-to-tr from-brand-500/40 via-electric-500/30 to-mint-400/20 blur-3xl" />

        <LaptopFrame className="relative mx-auto w-[88%]">
          <DesktopMock variant="business" />
        </LaptopFrame>

        {/* phone with an app */}
        <div className="animate-float absolute -bottom-6 right-0 w-[19%] min-w-[84px]">
          <PhoneFrame>
            <MobileMock variant="ecommerce" />
          </PhoneFrame>
        </div>

        {/* admin dashboard card */}
        <div className="animate-float-slow absolute -bottom-12 -left-4 z-10 hidden w-[34%] min-w-[150px] rounded-2xl sm:block bg-white/95 p-3 text-ink shadow-2xl shadow-black/30 ring-1 ring-white/60 backdrop-blur sm:p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-slate-500 sm:text-xs">Monthly enquiries</p>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-mint-50 px-1.5 py-0.5 text-[10px] font-bold text-mint-700 sm:text-[11px]">
              <TrendingUp className="size-3" aria-hidden="true" /> 38%
            </span>
          </div>
          <p className="mt-0.5 text-xl font-extrabold sm:text-2xl">1,248</p>
          <div className="mt-2 flex h-10 items-end gap-1 sm:h-14" aria-hidden="true">
            {[35, 50, 42, 60, 55, 72, 66, 84, 78, 96].map((h, i) => (
              <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-electric-400" style={{ height: `${h}%`, opacity: 0.45 + i * 0.055 }} />
            ))}
          </div>
          <p className="mt-2 text-[10px] text-slate-400">Sample analytics dashboard</p>
        </div>

        {/* floating integrations */}
        <span aria-hidden="true" className="animate-float absolute right-[2%] top-[-4%] grid size-10 place-items-center rounded-2xl bg-white shadow-xl shadow-black/25 sm:size-14">
          <WhatsAppIcon className="size-7 text-[#25D366]" />
        </span>
        <span aria-hidden="true" className="animate-float-slow absolute left-[4%] top-[-4%] flex items-center gap-1.5 rounded-2xl bg-white px-2.5 py-1.5 sm:left-[28%] sm:px-3 sm:py-2 shadow-xl shadow-black/25">
          <span className="text-sm font-black italic tracking-tight text-[#097939]">UPI</span>
          <span className="text-[11px] font-semibold text-slate-500">₹1,250 paid</span>
        </span>
        <span aria-hidden="true" className="animate-float absolute bottom-[-5%] left-[42%] hidden items-center sm:flex gap-2 rounded-2xl bg-white px-3 py-2 shadow-xl shadow-black/25">
          <BrandIcon name="siGoogle" className="size-5" />
          <span className="text-[11px] font-semibold text-slate-600">Found on Google Maps</span>
        </span>
      </div>
    </div>
  );
}
