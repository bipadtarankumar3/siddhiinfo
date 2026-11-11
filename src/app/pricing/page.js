import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import SectionHead from "@/components/SectionHead";
import PricingCards from "@/components/PricingCards";
import CommissionCalculator from "@/components/CommissionCalculator";
import CustomDevPricing from "@/components/CustomDevPricing";
import { plans, pricingTerms, thirdPartyFees, formatINR, getPlan } from "@/lib/data";
import { absoluteUrl, pageMeta } from "@/lib/site";

const price = (id) => formatINR(getPlan(id).price);

export const metadata = pageMeta({
  title: "Pricing — Website, Online Store & Digital Dukaan Packages",
  description: `Custom development quotes for web apps, mobile apps, CRM/ERP and integrations. Starting prices: Digital Dukaan from ${price("digital-dukaan")}, websites from ${price("starter-website")}, online stores from ${price("ecommerce")}. GST, renewals and third-party fees explained.`,
  path: "/pricing/",
});

const pricingFaqs = [
  { q: "Are there any hidden charges?", a: "The quote you approve is what you pay us. Third-party costs — payment gateway fees, courier charges, ad spend, WhatsApp/SMS charges, renewals — are listed upfront and paid to those providers." },
  { q: "What happens after the first year?", a: "Domain, hosting and business email renew yearly. The renewal amounts are in your quote, and maintenance after the support period is optional." },
  { q: "Can I pay in instalments?", a: "Projects are paid in milestones — usually an advance to start and the balance on approval and launch." },
  { q: "Do prices include GST?", a: "No. Prices are shown without GST; if GST applies it is added at the prevailing rate on your invoice." },
  { q: "What does “0% commission” mean?", a: "We don't take a cut of the orders you receive through the ordering channel we set up for you. Payment gateways, banks or couriers may still charge their own fees." },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Siddhi Info packages",
          url: absoluteUrl("/pricing/"),
          itemListElement: plans.map((p) => ({
            "@type": "Offer",
            name: p.name,
            description: p.description,
            priceCurrency: "INR",
            priceSpecification: { "@type": "PriceSpecification", minPrice: p.price, priceCurrency: "INR", valueAddedTaxIncluded: false },
            seller: { "@id": absoluteUrl("/#organization") },
          })),
        }}
      />
      <PageHero
        eyebrow="Pricing"
        title="Pricing, limits and terms"
        text="Starting prices for small-business packages, what each one includes and doesn't, and how GST, renewals and third-party fees work. Software projects get a custom written quote."
        crumbs={[{ label: "Pricing", href: "/pricing/" }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#packages" className="btn btn-light">Small business packages</a>
          <a href="#custom" className="btn btn-glass">Custom development</a>
        </div>
      </PageHero>

      <section id="packages" className="container-x scroll-mt-24 py-16 sm:py-20" aria-labelledby="packages-title">
        <SectionHead id="packages-title" eyebrow="Small business" title="Packages" text="Starting prices are one-time, for the scope and limits listed on each card." />
        <div className="mt-12"><PricingCards detailed /></div>
      </section>

      <CustomDevPricing />

      <section className="container-x py-16 sm:py-20" aria-labelledby="terms-title">
        <SectionHead id="terms-title" eyebrow="Terms" title="GST, payments and renewals" />
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTerms.map((t) => (
            <div key={t.title} className="card p-6">
              <dt className="font-bold text-ink">{t.title}</dt>
              <dd className="mt-1.5 text-slate-700">{t.text}</dd>
            </div>
          ))}
        </dl>

        <h3 id="fees-title" className="mt-14 text-center text-2xl font-extrabold text-ink">Third-party fees</h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">Charged by other companies and paid by you directly to them. We tell you which ones apply before you start.</p>
        <div className="mx-auto mt-6 max-w-4xl overflow-hidden rounded-2xl ring-1 ring-slate-200">
          <table className="w-full text-left" aria-describedby="fees-title">
            <thead className="bg-slate-50 text-sm text-slate-600">
              <tr><th scope="col" className="p-4">Item</th><th scope="col" className="p-4">How it&apos;s charged</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {thirdPartyFees.map((f) => (
                <tr key={f.item}><th scope="row" className="p-4 align-top font-semibold text-ink">{f.item}</th><td className="p-4 text-slate-700">{f.note}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-peacock py-16 sm:py-20" aria-labelledby="calc-title">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">For shops on delivery apps</p>
            <h2 id="calc-title" className="section-title mt-3">What does marketplace commission cost you?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Digital Dukaan ({price("digital-dukaan")} starting price) lets regular customers order directly on WhatsApp and pay by UPI.
              Siddhi Info takes no commission on those direct orders. Use the estimator to see what commission costs you today — with your own numbers.
            </p>
            <Link href="#digital-dukaan" className="btn btn-outline mt-6">See what Digital Dukaan includes</Link>
          </div>
          <CommissionCalculator />
        </div>
      </section>

      <Faq items={pricingFaqs} title="Pricing questions" />
      <CtaBanner title="Get a written quote" text="Tell us what you need. You'll get a quote listing scope, price, GST, renewals and any third-party fees before you pay anything." />
    </>
  );
}
