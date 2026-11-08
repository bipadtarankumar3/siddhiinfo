import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Star, TrendingUp, Phone, BadgeCheck } from "lucide-react";
import Icon from "@/components/Icon";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Network from "@/components/Network";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { services, industries, reasons, steps, homeFaqs, plans } from "@/lib/data";
import { site, whatsappLink, pageMeta } from "@/lib/site";

const homeTitle = "Siddhi Info — Websites, Billing & Digital Marketing for Indian Small Businesses";

export const metadata = {
  ...pageMeta({ title: homeTitle, description: site.description, path: "/" }),
  title: { absolute: homeTitle },
};

const integrations = ["Google Business", "WhatsApp API", "Razorpay", "UPI", "Shiprocket", "Zoho", "Google Workspace", "Meta Ads"];

export default function Home() {
  return (
    <>
      <Hero />
      <Integrations />
      <ServicesSection />
      <WhySection />
      <IndustriesSection />
      <StepsSection />
      <PricingTeaser />
      <Faq items={homeFaqs} />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-hero relative -mt-18 overflow-hidden pt-18 text-white">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Network uid="home-net" className="pointer-events-none absolute -left-40 bottom-0 w-[44rem] opacity-30" />

      <div className="container-x relative grid items-center gap-16 pb-24 pt-12 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-32">
        <div>
          <p className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium text-slate-200">
            <BadgeCheck className="size-4 text-mint-400" aria-hidden="true" />
            Digital partner for Bharat’s small businesses
          </p>
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[4rem]">
            Take your business <span className="text-gradient-light">online</span> and grow with confidence.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Websites, online stores, GST billing, WhatsApp automation and Google Maps visibility — everything
            an Indian small business needs, delivered by one dependable team at honest prices.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn btn-light">
              Get a free consultation <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
              <WhatsAppIcon className="size-5 text-mint-400" /> Chat on WhatsApp
            </a>
          </div>
          <ul className="mt-9 flex flex-col gap-x-6 gap-y-2.5 text-sm text-slate-300 sm:flex-row sm:flex-wrap">
            {["Websites from ₹7,999", "Live in 7–10 days", "Hindi & English support"].map((t) => (
              <li key={t} className="flex items-center gap-2 whitespace-nowrap">
                <span className="grid size-5 place-items-center rounded-full bg-mint-400/15">
                  <Check className="size-3.5 text-mint-400" aria-hidden="true" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-aqua-400/60 to-transparent" />
    </section>
  );
}

// Decorative dashboard — pure HTML/CSS, illustrates outcomes (not real client data).
function HeroVisual() {
  const bars = [32, 48, 41, 60, 55, 74, 92];
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-500/30 via-aqua-400/20 to-mint-400/20 blur-2xl" />
      <div className="glass relative rounded-3xl p-6 shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.webp" alt="" width={40} height={40} className="rounded-xl bg-white/90 p-1" />
            <div>
              <p className="text-sm text-slate-300">Enquiries this month</p>
              <p className="text-3xl font-extrabold tracking-tight">142</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-mint-400/15 px-2.5 py-1 text-sm font-semibold text-mint-300">
            <TrendingUp className="size-4" /> +38%
          </span>
        </div>
        <div className="mt-7 flex h-40 items-end gap-3">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-brand-500 via-aqua-400 to-mint-400" style={{ height: `${h}%`, opacity: 0.55 + i * 0.07 }} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            ["Website", "61"],
            ["WhatsApp", "54"],
            ["Google Maps", "27"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl bg-white/5 py-3 ring-1 ring-white/10">
              <p className="text-lg font-bold">{v}</p>
              <p className="text-xs text-slate-400">{k}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-float absolute -left-12 top-36 hidden items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-ink shadow-2xl sm:flex">
        <span className="grid size-10 place-items-center rounded-xl bg-mint-50 text-mint-600">
          <WhatsAppIcon className="size-5" />
        </span>
        <div>
          <p className="text-sm font-semibold">New order received</p>
          <p className="text-xs text-slate-500">₹1,250 • paid via UPI</p>
        </div>
      </div>

      <div className="animate-float-slow absolute -bottom-8 -right-4 hidden items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-ink shadow-2xl sm:flex">
        <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <Star className="size-5 fill-current" />
        </span>
        <div>
          <p className="text-sm font-semibold">Top 3 on Google Maps</p>
          <p className="text-xs text-slate-500">“bakery near me”</p>
        </div>
      </div>
    </div>
  );
}

function Integrations() {
  return (
    <section aria-label="Platforms we work with" className="border-b border-slate-200 bg-white">
      <div className="container-x flex flex-col items-center gap-5 py-8 lg:flex-row lg:justify-between">
        <p className="shrink-0 text-sm font-semibold text-slate-500">We set up &amp; integrate</p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 lg:justify-end">
          {integrations.map((n) => (
            <li key={n} className="text-[0.95rem] font-bold tracking-tight text-slate-400">{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, text, center = true, id }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title mt-4">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-slate-600">{text}</p>}
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="container-x py-20 sm:py-28" aria-labelledby="services-title">
      <SectionHead
        id="services-title"
        eyebrow="What we do"
        title={<>One partner for <span className="text-gradient">everything digital</span></>}
        text="Pick one service or combine them. We keep it simple, affordable and focused on getting you customers."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}/`} className="card card-hover card-accent group flex flex-col p-6">
            <span className="icon-tile size-12">
              <Icon name={s.icon} className="size-6" />
            </span>
            <h3 className="mt-5 font-bold text-ink">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.short}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
              Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-28" aria-labelledby="why-title">
      <div aria-hidden="true" className="bg-dots-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHead
            id="why-title"
            center={false}
            eyebrow="Why Siddhi Info"
            title="A technology partner that speaks your language"
            text="Big agencies are expensive and freelancers disappear. We sit in between — a dependable team that understands how small businesses in India actually work."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about/" className="btn btn-outline">About us</Link>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-primary">
              <Phone className="size-4" aria-hidden="true" /> Talk to us
            </a>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {reasons.map((r) => (
            <div key={r.title} className="card card-hover p-6">
              <span className="icon-tile-soft size-11">
                <Icon name={r.icon} className="size-5" />
              </span>
              <h3 className="mt-4 font-bold text-ink">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="container-x py-20 sm:py-28" aria-labelledby="industries-title">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHead id="industries-title" center={false} eyebrow="Industries" title="Solutions made for your kind of business" />
        <Link href="/industries/" className="btn btn-outline shrink-0">
          All industries <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((i) => (
          <Link key={i.slug} href={`/industries/${i.slug}/`} className="card card-hover card-accent group p-6">
            <span className="icon-tile-soft size-11 transition group-hover:scale-105">
              <Icon name={i.icon} className="size-5" />
            </span>
            <span className="mt-4 block font-bold text-ink">{i.title}</span>
            <span className="mt-1.5 block text-sm leading-relaxed text-slate-600">{i.short}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="bg-hero relative overflow-hidden py-20 text-white sm:py-28" aria-labelledby="steps-title">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow-dark">How it works</p>
          <h2 id="steps-title" className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-[2.5rem] sm:leading-tight">
            From idea to live in <span className="text-gradient-light">four simple steps</span>
          </h2>
        </div>
        <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brand-500 via-aqua-400 to-mint-400 opacity-50 lg:block" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 via-aqua-400 to-mint-400 text-lg font-extrabold text-ink shadow-lg shadow-aqua-400/30">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PricingTeaser() {
  return (
    <section className="container-x pt-20 sm:pt-28" aria-labelledby="pricing-title">
      <SectionHead
        id="pricing-title"
        eyebrow="Pricing"
        title="Transparent packages, no surprises"
        text="One-time prices that include design, setup and the first year of hosting."
      />
      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <Link
            key={p.name}
            href="/pricing/"
            className={`card card-hover p-7 ${p.featured ? "border-transparent bg-gradient-to-br from-brand-800 to-brand-600 text-white shadow-xl shadow-brand-900/25" : ""}`}
          >
            <p className={`text-sm font-semibold ${p.featured ? "text-aqua-300" : "text-brand-600"}`}>{p.name}</p>
            <p className="mt-2">
              <span className="text-sm opacity-70">from </span>
              <span className={`text-3xl font-extrabold tracking-tight ${p.featured ? "" : "text-ink"}`}>{p.price}</span>
            </p>
            <p className={`mt-2 text-sm ${p.featured ? "text-brand-100" : "text-slate-600"}`}>{p.description}</p>
            <span className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${p.featured ? "text-mint-300" : "text-brand-600"}`}>
              See what’s included <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
