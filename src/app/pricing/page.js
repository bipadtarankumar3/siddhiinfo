import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PricingCards from "@/components/PricingCards";
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
      <section className="container-x py-16 sm:py-24">
        <PricingCards />
      </section>
      <Faq items={pricingFaqs} title="Pricing questions" />
      <CtaBanner />
    </>
  );
}
