import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Sparkles, IndianRupee } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import IndustryArt from "@/components/india/IndustryArt";
import JsonLd from "@/components/JsonLd";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ServiceArt, { accents } from "@/components/art/ServiceArt";
import ProjectCard from "@/components/work/ProjectCard";
import { services, industries, getService, portfolio, steps, plans } from "@/lib/data";
import { absoluteUrl, whatsappLink, pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}/` });
}

// Starting prices only exist for the packaged website services
const startingPrice = {
  "website-development": plans[0].price,
  "ecommerce-store": plans[2].price,
};

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const c = accents[s.accent] ?? accents.indigo;
  const related = industries.filter((i) => i.services.includes(s.slug));
  const projects = portfolio
    .filter((p) => p.service === s.slug)
    .sort((a, b) => Number(a.concept) - Number(b.concept))
    .slice(0, 2);
  const idx = services.findIndex((o) => o.slug === s.slug);
  const others = [1, 2, 3].map((n) => services[(idx + n) % services.length]);
  const price = startingPrice[s.slug];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.metaDescription,
          url: absoluteUrl(`/services/${s.slug}/`),
          areaServed: { "@type": "Country", name: "India" },
          provider: { "@id": absoluteUrl("/#organization") },
          serviceType: s.title,
        }}
      />
      <PageHero
        eyebrow="Service"
        title={s.title}
        text={s.intro}
        crumbs={[
          { label: "Services", href: "/services/" },
          { label: s.title, href: `/services/${s.slug}/` },
        ]}
      >
        <ul className="mt-6 flex flex-wrap gap-2">
          {s.benefits.map((b) => (
            <li key={b} className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-slate-200">
              <Check className="size-4 text-mint-400" aria-hidden="true" /> {b}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact/" className="btn btn-light">
            Get a free quote <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <a href={whatsappLink(`Hi, I'm interested in ${s.title}.`)} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white hover:bg-[#1fb857]">
            <WhatsAppIcon className="size-5" /> Ask on WhatsApp
          </a>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute right-6 top-1/2 hidden w-[24rem] -translate-y-1/2 xl:block">
          <div className="animate-float rounded-[2rem] bg-white/95 p-8 shadow-2xl shadow-black/30">
            <ServiceArt name={s.art} accent={s.accent} />
          </div>
          <span className={`absolute -left-6 -top-5 grid size-16 place-items-center rounded-2xl bg-white shadow-xl ${c.text}`}>
            <Icon name={s.icon} className="size-8" />
          </span>
        </div>
      </PageHero>

      {/* what's included */}
      <section className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHead center={false} eyebrow="What’s included" title={<>Everything you need, <span className="text-gradient">done for you</span></>} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {s.features.map((f, i) => (
              <li key={f} data-reveal style={{ "--reveal-delay": `${(i % 2) * 70}ms` }} className="card card-hover flex items-start gap-4 p-5">
                <span className={`grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${c.card} font-bold ${c.text} ring-1 ring-slate-200`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-2 font-medium text-ink">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div data-reveal className="card bg-hero overflow-hidden border-transparent p-7 text-white shadow-2xl shadow-brand-900/25">
            <Sparkles className="size-6 text-saffron-300" aria-hidden="true" />
            <h2 className="mt-3 text-xl font-bold">What you get</h2>
            <ul className="mt-4 space-y-3">
              {s.outcomes.map((o) => (
                <li key={o} className="flex gap-2 text-slate-200">
                  <Check className="mt-0.5 size-5 shrink-0 text-mint-400" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-200">
                <IndianRupee className="size-4" aria-hidden="true" /> Pricing
              </p>
              <p className="mt-1 text-lg font-bold">{price ? `Starting from ${price}` : "Fixed quote after a free consultation"}</p>
              <p className="mt-1 text-xs text-slate-300">Final price confirmed in a written quotation.</p>
            </div>
            <Link href="/contact/" className="btn btn-light mt-5 w-full">Get my free quote</Link>
          </div>
        </aside>
      </section>

      {/* related work */}
      {projects.length > 0 && (
        <section className="bg-lavender-mesh py-16 sm:py-24" aria-labelledby="related-work-title">
          <div className="container-x">
            <SectionHead
              id="related-work-title"
              eyebrow="Related work"
              title={<>See what we <span className="text-gradient">have built</span></>}
            />
            <div className={`mt-12 grid gap-8 ${projects.length > 1 ? "lg:grid-cols-2" : "mx-auto max-w-2xl"}`}>
              {projects.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} dark={false} />)}
            </div>
          </div>
        </section>
      )}

      {/* how we deliver */}
      <section className="container-x py-16 sm:py-24" aria-labelledby="deliver-title">
        <SectionHead id="deliver-title" eyebrow="How we deliver" title="A simple, transparent process" />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((st, i) => (
            <li key={st.title} data-reveal style={{ "--reveal-delay": `${i * 60}ms` }} className="card p-5">
              <span className="icon-tile size-11"><Icon name={st.icon} className="size-5" /></span>
              <p className="mt-4 text-xs font-bold text-saffron-600">Step {i + 1}</p>
              <h3 className="mt-0.5 font-bold text-ink">{st.title}</h3>
            </li>
          ))}
        </ol>
      </section>

      {/* industries */}
      {related.length > 0 && (
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container-x">
            <SectionHead center={false} eyebrow="Popular with" title="Businesses that use this service" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((ind) => (
                <Link key={ind.slug} href={`/industries/${ind.slug}/`} data-reveal className="card card-hover group flex items-center gap-4 overflow-hidden p-3 pr-5">
                  {ind.image ? (
                    <Image src={ind.image} alt={ind.imageAlt} width={760} height={520} sizes="96px" className="size-20 shrink-0 rounded-xl object-cover transition duration-500 group-hover:scale-105" />
                  ) : (
                    <IndustryArt slug={ind.slug} className="size-20 shrink-0" />
                  )}
                  <span>
                    <span className="block text-xs font-semibold text-saffron-600">{ind.hi}</span>
                    <span className="block font-bold text-ink">{ind.title}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Faq items={s.faqs} />

      {/* other services */}
      <section className="container-x pb-4" aria-labelledby="other-title">
        <SectionHead center={false} id="other-title" eyebrow="Explore more" title="Other services" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((o) => {
            const oc = accents[o.accent] ?? accents.indigo;
            return (
              <Link key={o.slug} href={`/services/${o.slug}/`} data-reveal className="card card-hover group overflow-hidden">
                <div className={`bg-gradient-to-br ${oc.card} px-8 pb-2 pt-6`}>
                  <ServiceArt name={o.art} accent={o.accent} className="mx-auto max-w-[200px] transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 pt-4">
                  <h3 className="font-bold text-ink">{o.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{o.short}</p>
                  <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${oc.text}`}>
                    Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CtaBanner title={`Let’s talk about your ${s.title.replace(/ Development$/, "").toLowerCase()}.`} />
    </>
  );
}
