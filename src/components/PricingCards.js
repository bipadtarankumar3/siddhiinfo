import Link from "next/link";
import { Check, Clock, LifeBuoy, Users } from "lucide-react";
import { plans } from "@/lib/data";

export default function PricingCards() {
  return (
    <>
      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((p, i) => (
          <div
            key={p.name}
            data-reveal
            style={{ "--reveal-delay": `${i * 90}ms` }}
            className={`card relative flex flex-col p-7 sm:p-8 ${
              p.featured ? "border-transparent bg-gradient-to-b from-brand-700 to-brand-900 text-white shadow-2xl shadow-brand-900/30 lg:-my-4 lg:py-12" : "bg-white"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-saffron-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                Most popular
              </span>
            )}
            <h3 className={`text-lg font-bold ${p.featured ? "text-white" : "text-ink"}`}>{p.name}</h3>
            <p className={`mt-1 text-sm ${p.featured ? "text-brand-100" : "text-slate-600"}`}>{p.description}</p>
            <p className="mt-6 flex items-baseline gap-1.5">
              <span className={`text-sm ${p.featured ? "text-brand-200" : "text-slate-500"}`}>from</span>
              <span className={`text-4xl font-extrabold tracking-tight ${p.featured ? "text-white" : "text-ink"}`}>{p.price}</span>
            </p>
            <p className={`text-xs ${p.featured ? "text-brand-200" : "text-slate-500"}`}>{p.note} • one-time • + GST if applicable</p>

            <dl className={`mt-6 space-y-2.5 rounded-2xl p-4 text-sm ${p.featured ? "bg-white/10" : "bg-lavender-50 ring-1 ring-lavender-200"}`}>
              {[
                [Users, "Best for", p.bestFor],
                [Clock, "Delivery", p.delivery],
                [LifeBuoy, "Support", p.support],
              ].map(([I, k, v]) => (
                <div key={k} className="flex gap-2.5">
                  <I className={`mt-0.5 size-4 shrink-0 ${p.featured ? "text-saffron-300" : "text-brand-600"}`} aria-hidden="true" />
                  <div>
                    <dt className={`text-xs font-semibold uppercase tracking-wide ${p.featured ? "text-brand-200" : "text-slate-500"}`}>{k}</dt>
                    <dd className={p.featured ? "text-white" : "text-slate-700"}>{v}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className={`flex gap-2.5 ${p.featured ? "text-brand-50" : "text-slate-700"}`}>
                  <Check className={`mt-0.5 size-5 shrink-0 ${p.featured ? "text-mint-300" : "text-mint-600"}`} aria-hidden="true" /> {f}
                </li>
              ))}
            </ul>
            <Link href="/contact/" className={`btn mt-8 w-full ${p.featured ? "btn-light" : "btn-primary"}`}>
              {p.cta} <span className="sr-only">with the {p.name} package</span>
            </Link>
          </div>
        ))}
      </div>
      <p data-reveal className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
        Prices shown are <strong className="text-slate-700">starting prices</strong>. Your final price depends on your
        requirements and is confirmed in a <strong className="text-slate-700">written quotation</strong> before work begins.
        Custom software, apps, CRM/ERP, automation and marketing are quoted separately.{" "}
        <Link href="/contact/" className="font-semibold text-brand-600 hover:underline">Get a free quote →</Link>
      </p>
    </>
  );
}
