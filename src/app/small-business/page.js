import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ColorIcon from "@/components/ColorIcon";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import PricingCards from "@/components/PricingCards";
import ProcessSteps from "@/components/ProcessSteps";
import WorkingTerms from "@/components/WorkingTerms";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import { ConsultButton, WhatsAppButton } from "@/components/ContactButtons";
import { smallBusinessServices, servicePrice, plans, formatINR } from "@/lib/data";
import { pageMeta } from "@/lib/site";

const from = formatINR(Math.min(...plans.map((p) => p.price)));

export const metadata = pageMeta({
  title: "Small Business Websites, Online Orders & GST Billing",
  description: `Websites, WhatsApp ordering, online stores, GST billing and Google Business Profile set-up for Indian shops, clinics, restaurants and service providers. Starting prices from ${from}; GST and third-party fees extra.`,
  path: "/small-business/",
});

const needs = [
  { icon: "MapPin", q: "“Customers can't find us online.”", a: "Starter Website + Google Business Profile", href: "/services/seo-google-business/" },
  { icon: "MessageCircle", q: "“We take orders on WhatsApp and lose track.”", a: "WhatsApp automation or a Starter Website", href: "/services/whatsapp-automation/" },
  { icon: "ShoppingBag", q: "“We want to ship orders across India.”", a: "Complete E-commerce store", href: "/services/ecommerce-development/" },
  { icon: "ReceiptIndianRupee", q: "“Billing at the counter is slow.”", a: "GST billing & inventory set-up", href: "/services/gst-billing-inventory/" },
];

const faqs = [
  { q: "I'm not technical. Will I be able to manage this?", a: "Yes. We explain everything in plain Hindi, Bengali or English, train you or your staff, and you can always send changes to us." },
  { q: "What do I need to get started?", a: "Usually your logo (if you have one), photos, a list of products or services with prices, and your WhatsApp number. Each package lists what you need to provide." },
  { q: "Are there yearly charges?", a: "Domain, hosting and some third-party services renew yearly. We list every renewal in your quote before you pay anything." },
];

export default function SmallBusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Small Business Solutions"
        title="Get found, take orders and bill faster"
        text={`Practical websites and digital tools for shops, clinics, restaurants, coaching centres and local service businesses. Clear starting prices from ${from}.`}
        crumbs={[{ label: "Small Business", href: "/small-business/" }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ConsultButton className="btn-light" />
          <WhatsAppButton onDark text="Hi Siddhi Info, I run a small business and want to know which package fits." />
        </div>
      </PageHero>

      <section className="container-x py-16 sm:py-20" aria-labelledby="needs-title">
        <SectionHead id="needs-title" eyebrow="Start here" title="What sounds like your business?" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {needs.map((n) => (
            <li key={n.q}>
              <Link href={n.href} className="card card-hover flex h-full items-center justify-between gap-4 p-6">
                <ColorIcon name={n.icon} className="size-14" />
                <span className="flex-1">
                  <span className="block text-lg font-bold text-ink">{n.q}</span>
                  <span className="mt-1 block text-slate-600">Usually: {n.a}</span>
                </span>
                <ArrowRight className="size-5 shrink-0 text-brand-700" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-haldi py-16 sm:py-20" aria-labelledby="packages-title">
        <div className="container-x">
          <SectionHead id="packages-title" eyebrow="Packages" title="Starting prices" text="One-time starting prices for the scope listed. GST, renewals and third-party fees are extra — see full terms." />
          <div className="mt-12"><PricingCards /></div>
          <p className="mt-8 text-center">
            <Link href="/pricing/" className="font-semibold text-brand-700 underline">Full pricing, limits &amp; renewal terms</Link>
          </p>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20" aria-labelledby="sb-services-title">
        <SectionHead id="sb-services-title" eyebrow="Services" title="Services for small businesses" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {smallBusinessServices.map((s) => <ServiceCard key={s.slug} s={s} price={servicePrice(s)} />)}
        </div>
      </section>

      <ProcessSteps className="border-t border-slate-200" />
      <WorkingTerms />
      <Faq items={faqs} title="Small business questions" />
      <CtaBanner title="Not sure which package fits?" text="Tell us what you sell and how customers reach you today. We'll suggest the simplest option that works — even if it's the cheapest one." />
    </>
  );
}
