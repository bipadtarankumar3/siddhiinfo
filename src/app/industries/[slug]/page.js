import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import ColorIcon from "@/components/ColorIcon";
import Image from "next/image";
import IndustryArt from "@/components/india/IndustryArt";
import { industries, getIndustry, getService, getProject } from "@/lib/data";
import Faq from "@/components/Faq";
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
  const description = `${i.short} ${i.features.slice(0, 3).join(", ")} — by Siddhi Info, Kolkata.`.slice(0, 300);
  return pageMeta({ title, description, path: `/industries/${i.slug}/` });
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();
  const recommended = i.services.map(getService).filter(Boolean);
  const demo = i.demo ? getProject(i.demo) : null;

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={`Digital solutions for ${i.title}`}
        text={i.intro}
        crumbs={[
          { label: "Industries", href: "/industries/" },
          { label: i.title, href: `/industries/${i.slug}/` },
        ]}
      >
        <p className="mt-4 text-xl font-bold text-marigold-400">{i.hi}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={`/get-a-quote/?type=${i.quote}&service=${i.qservice}`} className="btn btn-cta">Get a quote <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
        {i.image ? (
          <div className="absolute right-8 top-1/2 hidden w-80 -translate-y-1/3 rotate-2 overflow-hidden rounded-3xl border-4 border-white/15 shadow-2xl xl:block">
            <Image src={i.image} alt={i.imageAlt} width={760} height={520} sizes="320px" priority className="h-auto w-full" />
          </div>
        ) : (
          <IndustryArt slug={i.slug} className="pointer-events-none absolute right-8 top-1/2 hidden size-56 -translate-y-1/3 rotate-3 drop-shadow-2xl lg:block" />
        )}
      </PageHero>

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
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint-50 text-mint-600">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20" aria-labelledby="features-title">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="card p-7">
            <h2 id="features-title" className="flex items-center gap-3 text-xl font-bold text-ink"><ColorIcon name="ClipboardCheck" className="size-10" /> Typical features</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {i.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-slate-700"><Check className="mt-0.5 size-5 shrink-0 text-green-700" aria-hidden="true" /> {f}</li>
              ))}
            </ul>
          </div>
          <div className="card bg-gradient-to-br from-teal-50 to-white p-7">
            <h2 className="flex items-center gap-3 text-xl font-bold text-ink"><ColorIcon name="TrendingUp" className="size-10" /> What it changes</h2>
            <ul className="mt-5 space-y-3">
              {i.benefits.map((b) => (
                <li key={b} className="flex gap-2.5 font-semibold text-ink"><Check className="mt-0.5 size-5 shrink-0 text-teal-600" aria-hidden="true" /> {b}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">Results depend on your business and how the tools are used.</p>
          </div>
        </div>
      </section>

      {demo && (
        <section className="container-x pb-16 sm:pb-20" aria-labelledby="demo-title">
          <Link href={`/work/${demo.slug}/`} className="card card-hover group grid items-center gap-6 overflow-hidden p-4 sm:grid-cols-[16rem_1fr] sm:p-5">
            <span className="relative block aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
              {demo.images ? (
                <Image src={demo.images.desktop} alt={`${demo.name} screenshot`} fill sizes="256px" className="object-cover object-top" />
              ) : (
                <span className="grid h-full place-items-center bg-gradient-to-br from-brand-50 to-amber-50"><ColorIcon name="AppWindow" className="size-16" /></span>
              )}
            </span>
            <span>
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${demo.concept ? "bg-amber-100 text-amber-900" : "bg-green-100 text-green-800"}`}>
                {demo.concept ? "Concept demo — fictional brand" : "Live product"}
              </span>
              <h2 id="demo-title" className="mt-2 text-xl font-bold text-ink">Example: {demo.name}</h2>
              <span className="mt-1 block text-slate-600">{demo.description}</span>
              <span className="mt-3 inline-flex items-center gap-1 font-semibold text-brand-700">See the {demo.concept ? "demo" : "project"} <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
            </span>
          </Link>
        </section>
      )}

      <section className="bg-haldi py-16 sm:py-20">
        <div className="container-x">
          <h2 className="section-title">Recommended services</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {recommended.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="card card-hover group flex flex-col p-6">
                <ColorIcon name={s.icon} className="size-12" />
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

      <Faq items={i.faqs.map(([q, a]) => ({ q, a }))} title={`${i.title}: common questions`} />
      <CtaBanner title={`Technology for ${i.title.toLowerCase()}`} text="Tell us how your business works today. We'll suggest the simplest set-up that helps — and send a written quote." />
    </>
  );
}
