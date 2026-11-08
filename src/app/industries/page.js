import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { pageMeta } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import IndustryArt from "@/components/india/IndustryArt";
import { industries } from "@/lib/data";

export const metadata = pageMeta({
  title: "Industries We Serve — Digital Solutions by Business Type",
  description:
    "Digital solutions for kirana & retail stores, restaurants, clinics, schools, NGOs, salons, real estate, manufacturers, startups and professionals across India.",
  path: "/industries/",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Solutions for every kind of Indian business"
        text="Every business has different problems. Find the tools that make the biggest difference for yours."
        crumbs={[{ label: "Industries", href: "/industries/" }]}
      />
      <section className="container-x grid gap-6 py-16 sm:py-20 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((i, n) => (
          <article
            key={i.slug}
            data-reveal
            style={{ "--reveal-delay": `${(n % 3) * 70}ms` }}
            className="card card-hover group relative flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              {i.image ? (
                <Image
                  src={i.image}
                  alt={i.imageAlt}
                  width={760}
                  height={520}
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="grid size-full place-items-center bg-gradient-to-br from-brand-50 to-saffron-50">
                  <IndustryArt slug={i.slug} className="size-24" />
                </div>
              )}
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-2xl bg-white/95 p-1.5 shadow-lg">
                <IndustryArt slug={i.slug} className="size-10" />
              </span>
              <p className="absolute bottom-3 left-5 right-5 text-sm font-semibold text-saffron-300">{i.hi}</p>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-xl font-bold text-ink">
                <Link href={`/industries/${i.slug}/`} className="after:absolute after:inset-0">{i.title}</Link>
              </h2>
              <p className="mt-2 text-slate-600">{i.short}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {i.solutions.slice(0, 3).map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" /> {s}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                See solutions <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </article>
        ))}
        <aside data-reveal className="bg-hero relative flex flex-col justify-center overflow-hidden rounded-[1.25rem] p-8 text-white md:col-span-2 sm:p-10">
          <div aria-hidden="true" className="bg-dots absolute inset-0" />
          <div aria-hidden="true" className="animate-blob absolute -right-16 -top-16 size-64 rounded-full bg-saffron-500/25 blur-3xl" />
          <div className="relative">
            <p className="eyebrow eyebrow-dark">Don’t see your industry?</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">We work with every kind of business.</h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Transport, events, agriculture, tuition, jewellery, pharma, hotels — tell us how your business works and we
              will suggest the right digital tools. <span className="text-saffron-300">आपका बिज़नेस जो भी हो।</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn btn-light">Talk to us <ArrowRight className="size-4" aria-hidden="true" /></Link>
              <Link href="/services/" className="btn btn-glass">Explore services</Link>
            </div>
          </div>
        </aside>
      </section>
      <CtaBanner />
    </>
  );
}
