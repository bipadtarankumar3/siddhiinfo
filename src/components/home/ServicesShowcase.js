import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import ServiceArt, { accents } from "@/components/art/ServiceArt";
import SectionHead from "@/components/SectionHead";
import { services } from "@/lib/data";

export default function ServicesShowcase() {
  return (
    <section id="services" className="container-x scroll-mt-24 py-20 sm:py-28" aria-labelledby="services-title">
      <SectionHead
        id="services-title"
        eyebrow="Our services"
        title={<>Everything your business needs to <span className="text-gradient">go digital</span></>}
        text="From your first website to complete business software — one dependable team, simple language, honest pricing."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((s, i) => {
          const c = accents[s.accent] ?? accents.indigo;
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 70}ms` }}
              className={`card card-hover group flex flex-col overflow-hidden ring-0 ring-transparent transition hover:ring-4 ${c.ring}`}
            >
              <div className={`relative bg-gradient-to-br ${c.card} px-6 pb-2 pt-6`}>
                <ServiceArt name={s.art} accent={s.accent} className="mx-auto w-full max-w-[160px] transition duration-500 sm:max-w-[220px] group-hover:-translate-y-1 group-hover:scale-[1.04]" />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-4">
                <h3 className="text-lg font-bold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
                <ul className="mt-4 flex-1 space-y-1.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className={`mt-0.5 size-4 shrink-0 ${c.text}`} aria-hidden="true" /> {b}
                    </li>
                  ))}
                </ul>
                <span className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${c.text}`}>
                  Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  <span className="sr-only"> about {s.title}</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
