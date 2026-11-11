import Link from "next/link";
import { Check, Clock, Users, Info } from "lucide-react";
import { plans, formatINR } from "@/lib/data";
import ColorIcon from "./ColorIcon";

const planStyle = {
  "starter-website": { band: "from-orange-500 to-amber-400", icon: "Store" },
  "business-website": { band: "from-teal-600 to-sky-500", icon: "Globe" },
  "professional-website": { band: "from-indigo-600 to-pink-600", icon: "TrendingUp" },
  ecommerce: { band: "from-pink-600 to-orange-500", icon: "ShoppingBag" },
};

/*
  Package cards. All prices come from `plans` in src/lib/data.js.
  `detailed` adds limits, what the customer provides and renewal terms (pricing page).
*/
export default function PricingCards({ detailed = false, ids }) {
  const list = ids ? plans.filter((p) => ids.includes(p.id)) : plans;
  return (
    <div className={`grid items-stretch gap-6 sm:grid-cols-2 ${list.length >= 4 ? "xl:grid-cols-4" : "lg:grid-cols-3"}`}>
      {list.map((p) => (
        <article
          key={p.id}
          id={p.id}
          aria-labelledby={`${p.id}-name`}
          className={`card relative flex scroll-mt-28 flex-col overflow-hidden p-6 pt-8 ${p.featured ? "border-cta ring-2 ring-cta" : ""}`}
        >
          <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${planStyle[p.id]?.band ?? "from-orange-500 to-amber-400"}`} />
          {p.badge && (
            <span className={`absolute right-4 top-4 rounded-full px-3 py-0.5 text-xs font-bold ${p.featured ? "bg-cta text-deepnavy" : "bg-marigold-100 text-amber-900 ring-1 ring-amber-300"}`}>
              {p.badge}
            </span>
          )}
          <ColorIcon name={planStyle[p.id]?.icon ?? "Store"} className="size-12" />
          <p className="mt-3 text-sm font-semibold text-saffron-700" lang="hi">{p.hi}</p>
          <h3 id={`${p.id}-name`} className="text-xl font-extrabold text-ink">{p.name}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">{p.description}</p>

          <p className="mt-5 flex items-baseline gap-1.5 border-t border-slate-200 pt-4">
            <span className="text-sm text-slate-500">from</span>
            <span className="text-3xl font-black tracking-tight text-ink">{formatINR(p.price)}</span>
            {p.priceSuffix && <span className="text-sm text-slate-500">{p.priceSuffix}</span>}
          </p>
          <p className="text-sm text-slate-500">Starting price · one-time · + GST if applicable</p>

          <dl className="mt-5 space-y-3 rounded-xl bg-slate-50 p-3 text-sm ring-1 ring-slate-200">
            <div className="flex gap-2">
              <Users className="mt-0.5 size-4 shrink-0 text-brand-700" aria-hidden="true" />
              <div><dt className="font-semibold text-ink">Best for</dt><dd className="text-slate-600">{p.bestFor}</dd></div>
            </div>
            <div className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-700" aria-hidden="true" />
              <div><dt className="font-semibold text-ink">Delivery</dt><dd className="text-slate-600">{p.delivery}</dd></div>
            </div>
            {detailed && (
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 border-t border-slate-200 pt-2">
                <dt className="font-semibold text-ink">Pages</dt><dd className="text-slate-600">{p.pages}</dd>
                <dt className="font-semibold text-ink">Domain</dt><dd className="text-slate-600">{p.domain}</dd>
                <dt className="font-semibold text-ink">Hosting</dt><dd className="text-slate-600">{p.hosting}</dd>
                <dt className="font-semibold text-ink">Support</dt><dd className="text-slate-600">{p.maintenance}</dd>
              </div>
            )}
          </dl>

          <h4 className="mt-5 text-sm font-bold text-ink">Included</h4>
          <ul className="mt-2 space-y-2 text-[0.95rem]">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2 text-slate-700">
                <Check className="mt-0.5 size-4 shrink-0 text-mint-600" aria-hidden="true" /> {f}
              </li>
            ))}
          </ul>

          {detailed && (
            <div className="mt-5 space-y-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
              <div>
                <h4 className="font-bold text-ink">Limits</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5">{p.limits.map((l) => <li key={l}>{l}</li>)}</ul>
              </div>
              <div>
                <h4 className="font-bold text-ink">You provide</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5">{p.youProvide.map((l) => <li key={l}>{l}</li>)}</ul>
              </div>
              <div>
                <h4 className="flex items-center gap-1.5 font-bold text-ink"><Info className="size-4" aria-hidden="true" /> Renewals</h4>
                <p className="mt-1">{p.renewal}</p>
              </div>
            </div>
          )}

          <div className="flex-1" />
          <Link href={`/contact/?service=${encodeURIComponent(p.name)}#enquiry`} className={`btn mt-6 w-full ${p.featured ? "btn-cta" : "btn-outline"}`}>
            {p.cta}
          </Link>
        </article>
      ))}
    </div>
  );
}
