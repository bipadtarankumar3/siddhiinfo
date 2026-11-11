import { Quote } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import { testimonials } from "@/lib/data";

// Renders only genuine, approved testimonials from src/lib/data.js.
// While the list is empty nothing is shown — no placeholders, no ratings.
export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="testimonials-title">
      <div className="container-x">
        <SectionHead id="testimonials-title" eyebrow="Client feedback" title="What clients say" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name + i} className="card flex flex-col p-7">
              <Quote className="size-8 text-brand-300" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 leading-relaxed text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-bold text-ink">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}, {t.business}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
