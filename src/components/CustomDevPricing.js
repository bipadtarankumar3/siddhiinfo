import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import ColorIcon from "./ColorIcon";
import SectionHead from "./SectionHead";
import { customTypes, engagementModels, customQuote, getService, servicePrice } from "@/lib/data";

// Custom development types — priced by written quote after a free discovery call.
export default function CustomDevPricing() {
  return (
    <section id="custom" className="scroll-mt-24 bg-peacock py-16 sm:py-20" aria-labelledby="custom-title">
      <div className="container-x">
        <SectionHead
          id="custom-title"
          eyebrow="Enterprise & custom development"
          title="Custom development pricing"
          text={customQuote.description}
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {customTypes.map((t) => {
            const svc = getService(t.service);
            const from = t.fromKey ? servicePrice(getService(t.fromKey)) : null;
            const enquire = svc?.title ?? t.service;
            return (
              <li key={t.id} className="card card-hover flex flex-col overflow-hidden">
                <div className="h-2" style={{ background: t.color }} aria-hidden="true" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <ColorIcon name={t.icon} className="size-14" />
                    <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: t.color }}>
                      {from ? `From ${from}` : "Custom quote"}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold text-ink">{t.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-600">{t.scope}</p>

                  <dl className="mt-4 rounded-xl bg-slate-50 p-3 text-sm ring-1 ring-slate-200">
                    <dt className="font-semibold text-ink">Priced as</dt>
                    <dd className="text-slate-600">{t.pricedAs}</dd>
                  </dl>

                  <p className="mt-4 text-sm font-bold text-ink">What affects the cost</p>
                  <ul className="mt-2 flex-1 space-y-1.5 text-sm text-slate-700">
                    {t.costFactors.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0" style={{ color: t.color }} aria-hidden="true" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link href={`/contact/?service=${encodeURIComponent(enquire)}#enquiry`} className="btn btn-primary flex-1 !px-4 text-sm">
                      Get a quote <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                    {svc && (
                      <Link href={`/services/${svc.slug}/`} className="btn btn-outline !px-4 text-sm">
                        Details<span className="sr-only"> about {svc.title}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* How custom pricing works */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-white ring-1 ring-teal-200">
          <div className="bg-gradient-to-r from-teal-600 via-indigo-600 to-pink-600 px-6 py-4 text-white">
            <h3 className="text-lg font-extrabold">How custom pricing works</h3>
          </div>
          <div className="grid gap-6 p-6 md:grid-cols-3">
            {engagementModels.map((m) => (
              <div key={m.title} className="flex gap-4">
                <ColorIcon name={m.icon} className="size-12" />
                <div>
                  <h4 className="font-bold text-ink">{m.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className="grid gap-2 border-t border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
            {customQuote.points.map((pt) => (
              <li key={pt} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-green-700" aria-hidden="true" />{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
