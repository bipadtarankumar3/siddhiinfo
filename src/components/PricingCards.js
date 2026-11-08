"use client";

import Link from "next/link";
import { Check, Clock, Users } from "lucide-react";
import { plans } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function PricingCards() {
  const { t, locale } = useLanguage();

  return (
    <>
      <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((p, i) => {
          const nativeName = locale === "bn" ? p.bn : p.hi;
          return (
            <div
              key={p.name}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` }}
              className={`card relative flex flex-col p-6 sm:p-7 ${
                p.featured
                  ? "border-transparent bg-gradient-to-b from-brand-700 via-brand-800 to-brand-900 text-white shadow-2xl shadow-brand-900/30 xl:-my-3 xl:py-10 ring-2 ring-brand-400/50"
                  : "bg-white border-slate-200/90 hover:border-brand-300"
              }`}
            >
              {p.featured ? (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-mint-500 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                  ★ {p.badge || "Most popular"}
                </span>
              ) : p.badge ? (
                <span className="absolute -top-3 left-6 rounded-full bg-amber-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                  {p.badge}
                </span>
              ) : null}

              <div className="mt-1">
                <span className={`text-xs font-bold ${p.featured ? "text-mint-300" : "text-amber-600"}`}>
                  {nativeName}
                </span>
                <h3 className={`text-lg font-extrabold ${p.featured ? "text-white" : "text-ink"}`}>
                  {p.name}
                </h3>
              </div>

              <p className={`mt-2 text-xs leading-relaxed ${p.featured ? "text-brand-100" : "text-slate-600"}`}>
                {p.description}
              </p>

              <div className="mt-5 border-t pt-4 border-slate-100 dark:border-white/10">
                <p className="flex items-baseline gap-1.5">
                  <span className={`text-xs ${p.featured ? "text-brand-200" : "text-slate-500"}`}>
                    {t.pricing.startingFrom}
                  </span>
                  <span className={`text-3xl font-black tracking-tight ${p.featured ? "text-white" : "text-ink"}`}>
                    {p.price}
                  </span>
                </p>
                <p className={`text-[11px] mt-0.5 ${p.featured ? "text-brand-200" : "text-slate-400"}`}>
                  {t.pricing.startingNote}
                </p>
              </div>

              <dl className={`mt-5 space-y-2 rounded-xl p-3 text-xs ${p.featured ? "bg-white/10" : "bg-slate-50 ring-1 ring-slate-100"}`}>
                <div className="flex gap-2">
                  <Users className={`size-3.5 shrink-0 mt-0.5 ${p.featured ? "text-mint-300" : "text-brand-600"}`} />
                  <div>
                    <dt className={`text-[10px] font-bold uppercase ${p.featured ? "text-brand-200" : "text-slate-500"}`}>{t.pricing.bestFor}</dt>
                    <dd className={p.featured ? "text-white font-medium" : "text-slate-700"}>{p.bestFor}</dd>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Clock className={`size-3.5 shrink-0 mt-0.5 ${p.featured ? "text-mint-300" : "text-brand-600"}`} />
                  <div>
                    <dt className={`text-[10px] font-bold uppercase ${p.featured ? "text-brand-200" : "text-slate-500"}`}>{t.pricing.delivery}</dt>
                    <dd className={p.featured ? "text-white font-medium" : "text-slate-700"}>{p.delivery}</dd>
                  </div>
                </div>
              </dl>

              <ul className="mt-5 flex-1 space-y-2 text-xs">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 ${p.featured ? "text-brand-50" : "text-slate-700"}`}>
                    <Check className={`size-3.5 shrink-0 mt-0.5 font-bold ${p.featured ? "text-mint-300" : "text-mint-600"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact/"
                className={`btn mt-6 w-full text-xs font-bold py-2.5 ${
                  p.featured ? "btn-light" : "btn-primary"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          );
        })}
      </div>

      <div data-reveal className="mx-auto mt-12 max-w-3xl rounded-2xl bg-amber-50/80 p-5 ring-1 ring-amber-200/80 text-center text-xs leading-relaxed text-amber-950 sm:text-sm">
        <p>
          <strong className="font-bold">सच्ची और पारदर्शी दरें:</strong> {t.pricing.writtenQuoteNote}
          {" "}सभी सेवाओं के लिए पक्का जीएसटी बिल (18% ITC क्लेम करने योग्य) दिया जाता है।{" "}
          <Link href="/contact/" className="font-bold text-brand-700 underline hover:text-brand-800">
            मुफ़्त कोटेशन प्राप्त करें →
          </Link>
        </p>
      </div>
    </>
  );
}
