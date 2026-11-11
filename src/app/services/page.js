import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import Faq from "@/components/Faq";
import { ConsultButton, WhatsAppButton } from "@/components/ContactButtons";
import { getService, servicePrice } from "@/lib/data";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Services — Websites, E-commerce, Apps, CRM/ERP, Billing & Automation",
  description:
    "Website development, online stores, GST billing, WhatsApp automation, local SEO and digital marketing for small businesses; web applications, CRM/ERP, custom software, mobile apps and AI automation for growing organisations.",
  path: "/services/",
});

const groups = [
  {
    id: "small-business",
    eyebrow: "Small Business Solutions",
    title: "Get online, take orders, bill faster",
    slugs: ["website-development", "ecommerce-store", "billing-gst-software", "whatsapp-business-automation", "local-seo-google-business", "digital-marketing", "domain-hosting-email"],
  },
  {
    id: "enterprise",
    eyebrow: "Enterprise & Custom Projects",
    title: "Custom software, integrations and automation",
    slugs: ["web-application-development", "crm-erp-software", "custom-software-crm", "mobile-app-development", "ai-business-automation"],
  },
];

// Clarifies the services that sound similar
const compare = [
  ["Web Applications", "/services/web-application-development/", "Portals and products used by customers, dealers or partners who log in."],
  ["CRM & ERP", "/services/crm-erp-software/", "Your internal sales, stock, purchase and staff operations in one system."],
  ["Custom Software", "/services/custom-software-crm/", "Industry-specific management systems — school, clinic, NGO, franchise."],
  ["AI & Automation", "/services/ai-business-automation/", "Connecting and automating tools you already use, without a new system."],
  ["GST Billing", "/services/billing-gst-software/", "Counter billing, stock and khata — simpler than a full ERP."],
];

const faqs = [
  { q: "Which service should I start with?", a: "Most small businesses start with a website or WhatsApp catalogue plus a Google Business Profile. Organisations with internal process problems usually start with a discovery call. We'll suggest the right order for your budget." },
  { q: "Can I combine services?", a: "Yes. Tell us what you need and we'll prepare one combined quote." },
  { q: "Do you work with businesses outside Kolkata?", a: "Yes. We work with businesses elsewhere in India over phone, WhatsApp and video calls." },
  { q: "Will I own my website and software?", a: "Yes. Domains are registered in your name and, on full payment, the website, code and data belong to your business." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services for small businesses and growing organisations"
        text="Each service page explains the problem it solves, what's included and excluded, third-party costs, typical timelines and who it suits."
        crumbs={[{ label: "Services", href: "/services/" }]}
      >
        <nav aria-label="Service groups" className="mt-8 flex flex-col gap-3 sm:flex-row">
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="btn btn-glass">{g.eyebrow}</a>
          ))}
        </nav>
      </PageHero>

      {groups.map((g, gi) => (
        <section key={g.id} id={g.id} className={`scroll-mt-24 py-16 sm:py-20 ${gi % 2 ? "bg-peacock" : "bg-haldi"}`} aria-labelledby={`${g.id}-title`}>
          <div className="container-x">
            <SectionHead center={false} id={`${g.id}-title`} eyebrow={g.eyebrow} title={g.title} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.slugs.map(getService).map((s) => <ServiceCard key={s.slug} s={s} price={servicePrice(s)} />)}
            </div>
            <p className="mt-6">
              <Link href={g.id === "enterprise" ? "/enterprise/" : "/small-business/"} className="font-semibold text-brand-700 underline">
                More about {g.eyebrow.toLowerCase()}
              </Link>
            </p>
          </div>
        </section>
      ))}

      <section className="container-x py-16 sm:py-20" aria-labelledby="compare-title">
        <SectionHead id="compare-title" eyebrow="Similar-sounding services" title="How these differ" />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl ring-1 ring-slate-200">
          <table className="w-full text-left">
            <caption className="sr-only">Differences between software services</caption>
            <thead className="bg-slate-50 text-sm text-slate-600">
              <tr><th scope="col" className="p-4">Service</th><th scope="col" className="p-4">Choose it for</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {compare.map(([name, href, text]) => (
                <tr key={name}>
                  <th scope="row" className="p-4 align-top font-semibold"><Link href={href} className="text-brand-700 underline">{name}</Link></th>
                  <td className="p-4 text-slate-700">{text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ConsultButton label="Not sure? Ask us" />
          <WhatsAppButton text="Hi Siddhi Info, I need advice on which service is right for my business." />
        </div>
      </section>

      <Faq items={faqs} title="Questions about our services" />
      <CtaBanner />
    </>
  );
}
