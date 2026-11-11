"use client";

import Link from "next/link";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ColorIcon from "@/components/ColorIcon";
import Toran from "@/components/india/Toran";
import Rangoli from "@/components/india/Rangoli";
import Jali from "@/components/india/Jali";

// Prices are passed in from the server (src/lib/data.js) so they never get out of sync.
export default function Hero({ smallFrom }) {
  const { t, languages, locale } = useLanguage();
  const h = t.hero;
  const wa = whatsappLink("Hi Siddhi Info, I'd like to discuss a project for my business.");
  const lang = languages.find((l) => l.code === locale)?.htmlLang;

  return (
    <section lang={lang} className="bg-hero relative -mt-18 overflow-hidden pt-18 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_24rem_at_85%_10%,rgb(249_115_22/0.28),transparent_60%),radial-gradient(36rem_22rem_at_0%_90%,rgb(219_39_119/0.22),transparent_60%)]" />
      <Jali uid="hero-jali" className="pointer-events-none absolute inset-0" opacity={0.08} />
      <Rangoli className="pointer-events-none absolute -right-28 top-10 hidden w-[30rem] opacity-30 lg:block" />
      <Toran uid="hero-toran" className="relative" />
      <div className="container-x relative pb-16 pt-8 sm:pb-20 sm:pt-12">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-marigold-400 ring-1 ring-white/20">
            <span aria-hidden="true" className="flex h-3 w-5 flex-col overflow-hidden rounded-[2px]"><span className="flex-1 bg-saffron-500" /><span className="flex-1 bg-white" /><span className="flex-1 bg-indiagreen" /></span>
            {h.eyebrow}
          </p>
          <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.15] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            {h.title}
          </h1>
          <span aria-hidden="true" className="mt-4 block h-1.5 w-40 rounded-full bg-gradient-to-r from-saffron-500 via-marigold-400 to-pink-500" />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">{h.sub}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact/#enquiry" className="btn btn-light">
              {h.ctaConsult} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            {wa ? (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <WhatsAppIcon className="size-5" /> {h.ctaWhatsApp}
              </a>
            ) : (
              <Link href="/contact/#enquiry" className="btn btn-glass">
                <PhoneCall className="size-4" aria-hidden="true" /> {h.ctaCallback}
              </Link>
            )}
            <Link href="/work/" className="btn btn-glass">
              {h.ctaWork}
            </Link>
          </div>
        </div>

        {/* Two audience paths */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
          <PathCard
            icon="Store"
            title={h.smallTitle}
            text={h.smallText}
            points={h.smallPoints}
            price={`${h.from} ${smallFrom}`}
            href="/small-business/"
            cta={h.smallCta}
            tone="border-t-orange-500"
          />
          <PathCard
            icon="Building2"
            title={h.entTitle}
            text={h.entText}
            points={h.entPoints}
            price={h.quote}
            href="/enterprise/"
            cta={h.entCta}
            tone="border-t-teal-500"
          />
        </div>
      </div>
    </section>
  );
}

function PathCard({ icon, title, text, points, price, href, cta, tone }) {
  return (
    <div className={`flex flex-col rounded-3xl border-t-[6px] bg-white p-6 text-slate-700 shadow-xl shadow-black/20 sm:p-7 ${tone}`}>
      <div className="flex items-start justify-between gap-4">
        <ColorIcon name={icon} className="size-16" />
        <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-900 ring-1 ring-amber-200">{price}</span>
      </div>
      <h2 className="mt-4 text-xl font-extrabold text-ink sm:text-2xl">{title}</h2>
      <p className="mt-2 leading-relaxed">{text}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <Check className="mt-0.5 size-5 shrink-0 rounded-full bg-green-100 p-0.5 text-green-700" aria-hidden="true" /> {p}
          </li>
        ))}
      </ul>
      <Link href={href} className="btn btn-primary mt-6 self-start">
        {cta} <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
