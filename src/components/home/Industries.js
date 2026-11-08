import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import { featuredIndustries, getIndustry } from "@/lib/data";

export default function Industries() {
  const items = featuredIndustries.map(getIndustry);
  return (
    <section className="container-x py-20 sm:py-28" aria-labelledby="industries-title">
      <SectionHead
        id="industries-title"
        eyebrow="Solutions for Indian businesses"
        title={<>Technology That <span className="text-gradient">Understands Your Business</span></>}
        text="Every business has different problems. Here is how we solve them for yours — in simple language."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((ind, i) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}/`}
            data-reveal
            style={{ "--reveal-delay": `${(i % 4) * 70}ms` }}
            className="card card-hover group flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={ind.image}
                alt={ind.imageAlt}
                width={760}
                height={520}
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                className="size-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-lg font-bold leading-tight text-white">
                <span className="block text-xs font-semibold text-mint-300">{ind.hi}</span>
                {ind.title}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-sm leading-relaxed text-slate-600">{ind.short}</p>
              <ul className="mt-3 flex-1 space-y-1.5">
                {ind.solutions.slice(0, 2).map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" /> {s}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                See solutions <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div data-reveal className="mt-10 text-center">
        <Link href="/industries/" className="btn btn-outline">
          All industries we serve <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
