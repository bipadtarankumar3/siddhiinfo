"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ColorIcon from "@/components/ColorIcon";
import HeroVisual from "./HeroVisual";

// Prices are passed in from the server (src/lib/data.js) so they never get out of sync.
export default function Hero({ smallFrom }) {
  const { t, languages, locale } = useLanguage();
  const h = t.hero;
  const wa = whatsappLink("Hi Siddhi Info, I'd like to discuss a project for my business.");
  const lang = languages.find((l) => l.code === locale)?.htmlLang;

  return (
    <div lang={lang}>
      <section className="relative isolate overflow-hidden border-b border-brand-100 bg-brand-50 text-ink">
        {/* Background photo (stock, Pexels): faint full-bleed on mobile, right half on desktop */}
        <div className="absolute inset-0 -z-20 lg:left-auto lg:w-[50%]">
          <Image
            src="/images/developer-client-collaboration.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[60%_40%]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-brand-50/90 lg:bg-transparent lg:bg-[linear-gradient(90deg,#eef7ff_0%,rgb(238_247_255/0.55)_22%,rgb(238_247_255/0)_45%),linear-gradient(0deg,rgb(7_22_54/0.25)_0%,transparent_35%)]" />
        </div>
        <p className="absolute bottom-2 right-4 z-10 text-[10px] text-slate-600/80 lg:text-white/80">Representative image</p>
        <div className="container-x relative grid items-center gap-14 pb-20 pt-12 sm:pt-16 lg:min-h-[38rem] lg:grid-cols-2 lg:pb-24 lg:pt-20">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
              <span aria-hidden="true" className="flex h-3 w-5 flex-col overflow-hidden rounded-[2px]"><span className="flex-1 bg-saffron-500" /><span className="flex-1 bg-white" /><span className="flex-1 bg-indiagreen" /></span>
              {h.eyebrow}
            </p>

            <h1 className="mt-6 text-[2.15rem] font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl xl:text-[3.6rem]">
              {h.titleA}{" "}
              <span className="bg-[linear-gradient(transparent_64%,#86efbf_64%,#86efbf_92%,transparent_92%)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">{h.titleB}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{h.sub}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact/#enquiry" className="btn bg-brand-700 px-6 text-white hover:bg-brand-800">
                {h.ctaConsult} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/work/" className="btn bg-white px-6 text-ink ring-1 ring-slate-300 hover:ring-ink">
                {h.ctaWork}
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              {h.orText}{" "}
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-green-800 underline-offset-4 hover:underline">
                  <WhatsAppIcon className="size-4" /> {h.ctaWhatsApp}
                </a>
              ) : (
                <Link href="/contact/#enquiry" className="font-semibold text-ink underline underline-offset-4 hover:text-brand-700">{h.ctaCallback}</Link>
              )}
            </p>

            <ul className="mt-10 flex flex-col gap-x-6 gap-y-2.5 border-t border-brand-200 pt-6 text-sm text-slate-700 sm:flex-row sm:flex-wrap">
              {h.trust.map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-green-700" aria-hidden="true" /> {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Two audience paths */}
      <section className="container-x py-16 sm:py-20" aria-labelledby="paths-title">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-saffron-700">{h.pathEyebrow}</p>
          <h2 id="paths-title" className="section-title mt-3">{h.pathTitle}</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <PathCard
            variant="light"
            badge={h.smallFor}
            emblem="Store"
            title={h.smallTitle}
            text={h.smallText}
            points={h.smallPoints}
            pointIcons={["Globe", "MessageCircle", "ReceiptIndianRupee"]}
            price={smallFrom}
            priceLabel={h.from}
            href="/small-business/"
            cta={h.smallCta}
          />
          <PathCard
            variant="dark"
            badge={h.entFor}
            emblem="Building2"
            title={h.entTitle}
            text={h.entText}
            points={h.entPoints}
            pointIcons={["AppWindow", "Puzzle", "Bot"]}
            price={h.quote}
            href="/enterprise/"
            cta={h.entCta}
          />
        </div>
      </section>
    </div>
  );
}

function PathCard({ variant, badge, emblem, title, text, points, pointIcons, price, priceLabel, href, cta }) {
  const dark = variant === "dark";
  return (
    <article
      className={`relative isolate flex flex-col overflow-hidden rounded-[2rem] p-7 sm:p-9 ${
        dark
          ? "bg-[#0b1d47] text-slate-200 shadow-[0_30px_60px_-30px_rgb(7_22_54/0.8)]"
          : "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-slate-700 ring-1 ring-orange-100"
      }`}
    >
      {/* soft glow + faded emblem */}
      <div
        aria-hidden="true"
        className={`absolute -right-20 -top-20 -z-10 size-72 rounded-full blur-3xl ${dark ? "bg-teal-500/25" : "bg-amber-300/40"}`}
      />
      <ColorIcon name={emblem} className="absolute -bottom-8 -right-8 -z-10 size-48 rotate-[-8deg] opacity-[0.12]" />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${dark ? "bg-teal-400/15 text-teal-200 ring-1 ring-teal-300/30" : "bg-white text-saffron-700 ring-1 ring-orange-200"}`}>
          {badge}
        </span>
        <p className="text-right leading-none">
          {priceLabel && <span className={`mr-1 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>{priceLabel}</span>}
          <span className={`text-2xl font-black tracking-tight ${dark ? "text-white" : "text-ink"}`}>{price}</span>
        </p>
      </div>

      <h3 className={`mt-6 text-2xl font-extrabold tracking-tight sm:text-[1.7rem] ${dark ? "text-white" : "text-ink"}`}>{title}</h3>
      <p className="mt-2 max-w-lg leading-relaxed">{text}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {points.map((p, i) => (
          <li key={p} className={`flex items-center gap-3 rounded-2xl p-2 pr-4 ${dark ? "bg-white/[0.06] ring-1 ring-white/10" : "bg-white/80 ring-1 ring-orange-100"}`}>
            <ColorIcon name={pointIcons[i]} className="size-10" />
            <span className={`font-semibold ${dark ? "text-white" : "text-ink"}`}>{p}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`btn mt-8 self-start px-6 ${dark ? "bg-teal-400 text-ink hover:bg-teal-300" : "bg-saffron-600 text-white hover:bg-saffron-700"}`}
      >
        {cta} <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
