import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import PricingCards from "@/components/PricingCards";
import ProcessSteps from "@/components/ProcessSteps";
import LiveProducts, { ConceptNote } from "@/components/LiveProducts";
import Testimonials from "@/components/home/Testimonials";
import ColorIcon from "@/components/ColorIcon";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import { homeFaqs, benefits, getService, servicePrice, plans, formatINR, customQuote } from "@/lib/data";
import { pageMeta } from "@/lib/site";

const smallFrom = formatINR(Math.min(...plans.map((p) => p.price)));

const homeTitle = "Siddhi Info — Websites, Software & Automation for Indian Businesses";
const homeDescription = `Websites, online ordering, GST billing and WhatsApp tools for small businesses (from ${smallFrom}), and custom software, integrations and automation for growing organisations. Based in Kolkata.`;

export const metadata = {
  ...pageMeta({ title: homeTitle, description: homeDescription, path: "/" }),
  title: { absolute: homeTitle },
};

const featured = [
  "website-development",
  "ecommerce-store",
  "whatsapp-business-automation",
  "billing-gst-software",
  "web-application-development",
  "crm-erp-software",
].map(getService);

export default function Home() {
  return (
    <>
      <Hero smallFrom={smallFrom} />

      {/* Benefits in plain language */}
      <section className="container-x border-t border-slate-200 py-16 sm:py-20" aria-labelledby="benefits-title">
        <SectionHead
          id="benefits-title"
          eyebrow="What changes for you"
          title="Practical technology, explained in plain language"
          text="We start from the problem you want to fix — not from the technology."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b) => (
            <li key={b.title} className="card card-hover p-5 text-center">
              <ColorIcon name={b.icon} className="mx-auto size-16" />
              <h3 className="mt-3 font-bold text-ink">{b.title}</h3>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-slate-600">{b.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured services */}
      <section className="bg-haldi py-16 sm:py-20" aria-labelledby="services-title">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHead center={false} id="services-title" eyebrow="Services" title="Most requested services" />
            <Link href="/services/" className="btn btn-outline self-start sm:self-auto">
              All 12 services <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => <ServiceCard key={s.slug} s={s} price={servicePrice(s)} />)}
          </div>
        </div>
      </section>

      {/* Pricing entry points */}
      <section className="container-x py-16 sm:py-20" aria-labelledby="pricing-title">
        <SectionHead
          id="pricing-title"
          eyebrow="Pricing"
          title="Clear starting prices for small businesses"
          text="One-time starting prices for the scope listed. GST, renewals and third-party fees are explained on the pricing page and in your written quote."
        />
        <div className="mt-12">
          <PricingCards ids={["digital-dukaan", "starter-website", "business-growth"]} />
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border-l-[6px] border-teal-500 bg-gradient-to-r from-teal-50 to-indigo-50 p-6 ring-1 ring-teal-100 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <ColorIcon name="Building2" className="size-14" />
            <div>
            <h3 className="text-lg font-bold text-ink">{customQuote.name}</h3>
            <p className="mt-1 max-w-2xl text-slate-700">{customQuote.description}</p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/pricing/" className="btn btn-outline">Full pricing &amp; terms</Link>
            <Link href="/enterprise/" className="btn btn-primary">Request a custom quote</Link>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-peacock py-16 sm:py-20" aria-labelledby="proof-title">
        <div className="container-x">
          <SectionHead
            id="proof-title"
            eyebrow="Live products"
            title="Products you can open and try today"
            text="Working platforms in the Siddhi Info portfolio. Visit them to see the quality of what we build."
          />
          <div className="mt-10"><LiveProducts /></div>
          <ConceptNote />
        </div>
      </section>

      <ProcessSteps />

      <Testimonials />

      <Faq items={homeFaqs} title="Common questions" />
      <CtaBanner />
    </>
  );
}
