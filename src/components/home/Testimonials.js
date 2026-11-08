import Link from "next/link";
import { Quote, Star, MessageSquareHeart } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import { testimonials } from "@/lib/data";

// Shows real testimonials from src/lib/data.js. While none have been added,
// it shows an honest "coming soon" state instead of invented reviews.
export default function Testimonials() {
  return (
    <section className="bg-lavender-mesh py-20 sm:py-28" aria-labelledby="testimonials-title">
      <div className="container-x">
        <SectionHead
          id="testimonials-title"
          eyebrow="Client stories"
          title={<>What our clients <span className="text-gradient">say about us</span></>}
        />
        {testimonials.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={t.name + i} data-reveal style={{ "--reveal-delay": `${(i % 3) * 80}ms` }} className="card flex flex-col p-7">
                <Quote className="size-8 text-brand-300" aria-hidden="true" />
                <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating ?? 5 }, (_, k) => <Star key={k} className="size-4 fill-marigold-400 text-marigold-400" aria-hidden="true" />)}
                </div>
                <blockquote className="mt-3 flex-1 leading-relaxed text-slate-700">“{t.quote}”</blockquote>
                <figcaption className="mt-5 border-t border-slate-100 pt-4">
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}, {t.business}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div data-reveal className="mx-auto mt-12 max-w-3xl rounded-[1.75rem] border-2 border-dashed border-brand-200 bg-white/80 p-8 text-center backdrop-blur sm:p-12">
            <span className="icon-tile mx-auto size-14"><MessageSquareHeart className="size-7" aria-hidden="true" /></span>
            <h3 className="mt-5 text-xl font-bold text-ink">Verified client reviews coming soon</h3>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-600">
              We only publish genuine reviews from real clients, with their permission. If we have worked together,
              we would love to hear about your experience.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact/" className="btn btn-primary">Share your feedback</Link>
              <Link href="/contact/" className="btn btn-outline">Become our next success story</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
