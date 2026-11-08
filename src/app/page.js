import Link from "next/link";
import { ArrowRight, Check, Star, TrendingUp, Phone } from "lucide-react";
import Icon from "@/components/Icon";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { services, industries, reasons, steps, homeFaqs } from "@/lib/data";
import { site, whatsappLink, pageMeta } from "@/lib/site";

export const metadata = {
  ...pageMeta({
    title: "Siddhi Info — Websites, Billing & Digital Marketing for Indian Small Businesses",
    description: site.description,
    path: "/",
  }),
  title: { absolute: "Siddhi Info — Websites, Billing & Digital Marketing for Indian Small Businesses" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <IndustriesSection />
      <WhySection />
      <StepsSection />
      <Faq items={homeFaqs} />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden pt-16">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute -right-40 top-10 size-[28rem] rounded-full bg-saffron-100 blur-3xl" />
      <div aria-hidden="true" className="absolute -left-40 top-40 size-[28rem] rounded-full bg-brand-100 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-saffron-100 bg-white/80 px-3 py-1 text-sm font-medium text-saffron-600 shadow-sm">
            <span className="size-2 rounded-full bg-saffron-500" aria-hidden="true" />
            Built for Bharat’s small businesses
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Take your business{" "}
            <span className="bg-gradient-to-r from-brand-600 to-saffron-500 bg-clip-text text-transparent">online</span>{" "}
            and grow faster.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Websites, online stores, GST billing, WhatsApp automation and Google Maps visibility —
            everything an Indian small business needs, at prices that make sense.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn btn-primary">
              Get a free consultation <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <WhatsAppIcon className="size-5 text-[#25D366]" /> Chat on WhatsApp
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {["Websites from ₹7,999", "Live in 7–10 days", "Hindi & English support"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="size-4 text-green-600" aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

// Decorative mock dashboard — pure HTML/CSS, no images to load.
function HeroVisual() {
  const bars = [38, 52, 45, 63, 58, 77, 90];
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="card relative p-6 shadow-2xl shadow-brand-900/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Enquiries this month</p>
            <p className="mt-1 text-3xl font-extrabold text-ink">142</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-sm font-semibold text-green-700">
            <TrendingUp className="size-4" /> +38%
          </span>
        </div>
        <div className="mt-6 flex h-36 items-end gap-3">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-500"
              style={{ height: `${h}%`, opacity: 0.45 + i * 0.08 }}
            />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            ["Website", "61"],
            ["WhatsApp", "54"],
            ["Google Maps", "27"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-slate-50 py-3">
              <p className="text-lg font-bold text-ink">{v}</p>
              <p className="text-xs text-slate-500">{k}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card absolute -left-4 -top-6 hidden items-center gap-3 p-3 pr-5 shadow-xl sm:flex">
        <span className="grid size-10 place-items-center rounded-full bg-[#25D366]/10 text-[#25D366]">
          <WhatsAppIcon className="size-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">New order received</p>
          <p className="text-xs text-slate-500">₹1,250 • paid via UPI</p>
        </div>
      </div>

      <div className="card absolute -bottom-6 -right-2 hidden items-center gap-3 p-3 pr-5 shadow-xl sm:flex">
        <span className="grid size-10 place-items-center rounded-full bg-saffron-50 text-saffron-500">
          <Star className="size-5 fill-current" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">Ranked on Google Maps</p>
          <p className="text-xs text-slate-500">“bakery near me”</p>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="container-x py-20 sm:py-24" aria-labelledby="services-title">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">What we do</p>
        <h2 id="services-title" className="section-title mt-3">One partner for everything digital</h2>
        <p className="mt-4 text-lg text-slate-600">
          Pick one service or combine them. We keep it simple, affordable and focused on getting you customers.
        </p>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}/`} className="card card-hover group flex flex-col p-6">
            <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
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

function IndustriesSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24" aria-labelledby="industries-title">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Industries</p>
            <h2 id="industries-title" className="section-title mt-3">Solutions made for your kind of business</h2>
          </div>
          <Link href="/industries/" className="btn btn-outline shrink-0">
            All industries <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}/`} className="card card-hover flex items-start gap-4 p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-saffron-50 text-saffron-600">
                <Icon name={i.icon} className="size-5" />
              </span>
              <span>
                <span className="block font-semibold text-ink">{i.title}</span>
                <span className="mt-1 block text-sm text-slate-600">{i.short}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="container-x py-20 sm:py-24" aria-labelledby="why-title">
      <div className="grid gap-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow">Why Siddhi Info</p>
          <h2 id="why-title" className="section-title mt-3">Technology partner that speaks your language</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Big agencies are expensive and freelancers disappear. We sit in between — a dependable team that
            understands how small businesses in India actually work.
          </p>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700">
            <Phone className="size-4" aria-hidden="true" /> Talk to us today
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {reasons.map((r) => (
            <div key={r.title} className="card p-6">
              <Icon name={r.icon} className="size-6 text-brand-600" />
              <h3 className="mt-4 font-bold text-ink">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24" aria-labelledby="steps-title">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-saffron-400">How it works</p>
          <h2 id="steps-title" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">From idea to live in four simple steps</h2>
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-sm font-bold text-saffron-400">Step {i + 1}</span>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
