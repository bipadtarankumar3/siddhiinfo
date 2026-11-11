import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BadgeCheck } from "lucide-react";
import Hero from "@/components/home/Hero";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import PricingCards from "@/components/PricingCards";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/home/Testimonials";
import ColorIcon from "@/components/ColorIcon";
import BrandIcon from "@/components/BrandIcon";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import {
  homeFaqs, services, servicePrice, plans, formatINR, customQuote, whyChoose, techStack,
  featuredIndustries, getIndustry, portfolio,
} from "@/lib/data";
import { pageMeta } from "@/lib/site";

const smallFrom = formatINR(Math.min(...plans.map((p) => p.price)));

const homeTitle = "Siddhi Info — Website, Software & AI Automation Company in India";
const homeDescription = `Your complete digital & technology partner: business websites from ${smallFrom}, e-commerce, custom software, CRM/ERP, mobile apps, AI automation and AWS cloud for businesses across India. Based in Kolkata.`;

export const metadata = {
  ...pageMeta({ title: homeTitle, description: homeDescription, path: "/" }),
  title: { absolute: homeTitle },
};

const twelve = services.slice(0, 12);
const live = portfolio.filter((p) => !p.concept);
const demos = portfolio.filter((p) => p.concept);

export default function Home() {
  return (
    <>
      <Hero smallFrom={smallFrom} />

      {/* Services */}
      <section className="bg-haldi py-16 sm:py-20" aria-labelledby="services-title">
        <div className="container-x">
          <SectionHead id="services-title" eyebrow="Services" title="Everything your business needs, under one roof" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {twelve.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.05}>
                <ServiceCard s={s} price={servicePrice(s)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container-x py-16 sm:py-20" aria-labelledby="industries-title">
        <SectionHead id="industries-title" eyebrow="Industries" title="Technology solutions for your industry" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredIndustries.map(getIndustry).map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={(i % 3) * 0.06}>
              <Link href={`/industries/${ind.slug}/`} className="card card-hover group flex h-full items-center gap-4 overflow-hidden p-3 pr-5">
                <span className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                  <Image src={ind.image} alt={ind.imageAlt} fill sizes="80px" className="object-cover transition duration-500 group-hover:scale-105" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-ink">{ind.title}</span>
                  <span className="mt-0.5 block text-sm leading-snug text-slate-600">{ind.short}</span>
                </span>
                <ArrowRight className="size-5 shrink-0 text-brand-700 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Portfolio */}
      <section className="bg-peacock py-16 sm:py-20" aria-labelledby="proof-title">
        <div className="container-x">
          <SectionHead
            id="proof-title"
            eyebrow="Our work"
            title="Real projects. Practical solutions."
            text="Live products you can open today, plus clearly labelled industry demonstrations."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {live.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <article className="card group flex h-full flex-col overflow-hidden">
                  <Link href={`/work/${p.slug}/`} className="relative block aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100">
                    <Image src={p.images.desktop} alt={`Screenshot of the ${p.name} homepage`} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-green-800"><BadgeCheck className="size-4" aria-hidden="true" /> Live product</p>
                    <h3 className="mt-1 text-lg font-bold text-ink"><Link href={`/work/${p.slug}/`} className="hover:underline">{p.name}</Link></h3>
                    <p className="mt-1 flex-1 text-sm text-slate-600">{p.category}</p>
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" data-track="demo_click" className="mt-3 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand-700 hover:underline">
                      Visit {p.url} <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <p className="text-slate-700">{demos.length} industry demonstrations (fictional brands, sample data) are on the work page.</p>
            <Link href="/work/" className="btn btn-outline">See all work <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="container-x py-16 sm:py-20" aria-labelledby="why-title">
        <SectionHead id="why-title" eyebrow="Why Siddhi Info" title="Your technology partner, not just a service provider" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 4) * 0.05} className="card card-hover p-6">
              <ColorIcon name={w.icon} className="size-12" />
              <h3 className="mt-4 font-bold text-ink">{w.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-600">{w.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <ProcessSteps className="border-t border-slate-200" />

      {/* Technology */}
      <section className="bg-haldi py-16 sm:py-20" aria-labelledby="tech-title">
        <div className="container-x">
          <SectionHead id="tech-title" eyebrow="Technology" title="Technologies we work with" text="Proven, widely supported tools — so your software is easy to maintain and to hire for later." />
          <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <li key={t.name} className="flex min-h-12 items-center gap-2.5 rounded-2xl bg-white px-4 py-2 font-semibold text-ink shadow-sm ring-1 ring-slate-200">
                {t.icon ? <BrandIcon name={t.icon} className="size-6" /> : <ColorIcon name={t.name === "AWS" ? "Cloud" : t.name.startsWith("AI") ? "Bot" : "Puzzle"} className="size-6" />}
                {t.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="container-x py-16 sm:py-20" aria-labelledby="pricing-title">
        <SectionHead
          id="pricing-title"
          eyebrow="Pricing"
          title="Solutions for every budget"
          text="One-time starting prices for small-business websites. GST, renewals and third-party fees are explained on the pricing page and in your written quote."
        />
        <div className="mt-12"><PricingCards /></div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border-l-[6px] border-teal-500 bg-gradient-to-r from-teal-50 to-indigo-50 p-6 ring-1 ring-teal-100 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <ColorIcon name="Building2" className="size-14" />
            <div>
              <h3 className="text-lg font-bold text-ink">Need a custom business application?</h3>
              <p className="mt-1 max-w-2xl text-slate-700">{customQuote.description}</p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/pricing/" className="btn btn-outline">Full pricing &amp; terms</Link>
            <Link href="/get-a-quote/?type=enterprise" className="btn btn-cta">Request a custom proposal</Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <Faq items={homeFaqs} title="Frequently asked questions" />
      <CtaBanner />
    </>
  );
}
