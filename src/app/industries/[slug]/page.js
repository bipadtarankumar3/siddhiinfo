import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { industries, getIndustry, getService } from "@/lib/data";
import { pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  const title = `Digital Solutions for ${i.title} in India`;
  const description = `${i.short} Websites, software and marketing for ${i.title.toLowerCase()} by Siddhi Info.`;
  return pageMeta({ title, description, path: `/industries/${i.slug}/` });
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();
  const recommended = i.services.map(getService).filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={`Digital solutions for ${i.title}`}
        text={i.short}
        crumbs={[
          { label: "Industries", href: "/industries/" },
          { label: i.title, href: `/industries/${i.slug}/` },
        ]}
      />

      <section className="container-x grid gap-6 py-16 sm:py-20 md:grid-cols-2">
        <div className="card p-7">
          <h2 className="text-xl font-bold text-ink">Common challenges</h2>
          <ul className="mt-5 space-y-3">
            {i.problems.map((p) => (
              <li key={p} className="flex gap-3 text-slate-700">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-red-50 text-red-500">
                  <X className="size-4" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="card border-brand-200 bg-brand-50/50 p-7">
          <h2 className="text-xl font-bold text-ink">How we help</h2>
          <ul className="mt-5 space-y-3">
            {i.solutions.map((s) => (
              <li key={s} className="flex gap-3 text-slate-700">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-green-50 text-green-600">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-x">
          <h2 className="section-title">Recommended services</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {recommended.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="card card-hover group flex flex-col p-6">
                <Icon name={s.icon} className="size-7 text-brand-600" />
                <h3 className="mt-4 font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 flex-1 text-sm text-slate-600">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title={`Grow your ${i.title.split(/[,&]/)[0].trim().toLowerCase()} business online`} />
    </>
  );
}
