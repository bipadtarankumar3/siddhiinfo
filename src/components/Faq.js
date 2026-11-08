import { ChevronDown } from "lucide-react";
import JsonLd from "./JsonLd";

export default function Faq({ items, title = "Frequently asked questions", withSchema = true }) {
  return (
    <section className="container-x py-16 sm:py-20" aria-labelledby="faq-title">
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-title" className="section-title text-center">{title}</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {items.map((f) => (
            <details key={f.q} className="group px-5 sm:px-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-ink sm:py-5">
                {f.q}
                <ChevronDown className="size-5 shrink-0 text-slate-400 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="pb-5 leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
