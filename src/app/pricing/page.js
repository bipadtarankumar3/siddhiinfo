import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { plans } from "@/lib/data";
import { absoluteUrl, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Pricing — Affordable Website & E-commerce Packages in India",
  description: "Transparent pricing for small business websites (from ₹7,999), business SEO websites and e-commerce stores in India. No hidden charges.",
  path: "/pricing/",
});

const pricingFaqs = [
  { q: "Are there any hidden charges?", a: "No. The quote you approve is the price you pay. Third-party costs like payment gateway fees, ad spend or WhatsApp conversation charges are paid directly by you, and we tell you about them upfront." },
  { q: "What happens after the first year?", a: "Hosting and domain renew yearly at standard rates. Optional annual maintenance plans cover updates, backups and support." },
  { q: "Can I pay in instalments?", a: "Yes. Projects are usually paid in 2–3 milestones — an advance to start, and the balance on approval and launch." },
  { q: "Do prices include GST?", a: "Prices shown are exclusive of GST, where applicable. You receive a proper GST invoice." },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Siddhi Info website packages",
          url: absoluteUrl("/pricing/"),
          itemListElement: plans.map((p) => ({
            "@type": "Offer",
            name: `${p.name} package`,
            description: p.description,
            price: p.price.replace(/[^\d]/g, ""),
            priceCurrency: "INR",
            seller: { "@id": absoluteUrl("/#organization") },
          })),
        }}
      />
      <PageHero
        eyebrow="Pricing"
        title="Simple, honest pricing"
        text="Fixed one-time packages for most needs. Need something different? We'll give you a custom quote within 24 hours."
        crumbs={[{ label: "Pricing", href: "/pricing/" }]}
      />
      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card relative flex flex-col p-8 ${p.featured ? "border-brand-600 shadow-2xl shadow-brand-900/15 ring-1 ring-brand-600 lg:-mt-4 lg:mb-[-1rem]" : ""}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-saffron-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-bold text-ink">{p.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{p.description}</p>
              <p className="mt-6">
                <span className="text-sm text-slate-500">from </span>
                <span className="text-4xl font-extrabold tracking-tight text-ink">{p.price}</span>
                <span className="text-sm text-slate-500"> {p.note}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-slate-700">
                    <Check className="mt-0.5 size-5 shrink-0 text-green-600" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact/" className={`btn mt-8 w-full ${p.featured ? "btn-primary" : "btn-outline"}`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">
          Billing software, WhatsApp API, digital marketing and custom software are quoted based on your needs.{" "}
          <Link href="/contact/" className="font-semibold text-brand-600 hover:underline">Ask for a quote →</Link>
        </p>
      </section>
      <Faq items={pricingFaqs} title="Pricing questions" />
      <CtaBanner />
    </>
  );
}
