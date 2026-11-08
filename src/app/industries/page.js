import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Image from "next/image";
import IndustryArt from "@/components/india/IndustryArt";
import { industries } from "@/lib/data";

export const metadata = pageMeta({
  title: "Industries We Serve — Digital Solutions by Business Type",
  description: "Digital solutions for kirana & retail stores, restaurants, clinics, schools, salons, real estate, manufacturers and professionals across India.",
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
      <section className="container-x grid gap-6 py-16 sm:py-20 md:grid-cols-2">
        {industries.map((i) => (
          <article key={i.slug} data-reveal className="card card-hover group relative overflow-hidden">
            {i.image && (
              <div className="aspect-[16/7] overflow-hidden">
                <Image src={i.image} alt={i.imageAlt} width={760} height={520} sizes="(min-width: 768px) 600px, 100vw" className="size-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
            )}
            <div className="p-7 pb-0">
            <div className="flex items-center gap-4">
              {!i.image && <IndustryArt slug={i.slug} className="size-16 shrink-0" />}
              <div>
              <p className="text-xs font-semibold text-saffron-600">{i.hi}</p>
              <h2 className="text-xl font-bold text-ink">
                <Link href={`/industries/${i.slug}/`} className="after:absolute after:inset-0">{i.title}</Link>
              </h2>
              </div>
            </div>
            <p className="mt-4 text-slate-600">{i.short}</p>
            </div>
            <span className="mx-7 mb-7 mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
              See solutions <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </article>
        ))}
      </section>
      <CtaBanner />
    </>
  );
}
