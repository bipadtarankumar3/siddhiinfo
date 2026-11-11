import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import WorkingTerms from "@/components/WorkingTerms";
import LiveProducts from "@/components/LiveProducts";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import ColorIcon from "@/components/ColorIcon";
import { ConsultButton, WhatsAppButton } from "@/components/ContactButtons";
import { enterpriseServices, servicePrice, customQuote } from "@/lib/data";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Enterprise & Custom Software Development — Integrations & Automation",
  description:
    "Custom web applications, CRM/ERP, integrations with Tally, Zoho and other APIs, mobile apps, process automation and ongoing technical support for growing Indian organisations. Written scope and milestone pricing.",
  path: "/enterprise/",
});

const capabilities = [
  { icon: "AppWindow", title: "Custom applications", text: "Customer, dealer and staff portals, booking systems, admin panels and SaaS products." },
  { icon: "Puzzle", title: "Integrations", text: "Connect your website, CRM, accounting (e.g. Tally, Zoho), payment gateways and messaging through their APIs." },
  { icon: "Zap", title: "Automation", text: "Remove repeated data entry, reports and reminders, with a human check where it matters." },
  { icon: "LifeBuoy", title: "Ongoing support", text: "Maintenance, monitoring and improvements under a written support agreement." },
];

const engagement = [
  { title: "Fixed-scope project", text: "A defined scope, price and milestone plan. Best when requirements are clear." },
  { title: "Phased build", text: "Start with a discovery phase or a first module, then scope the next phase with what you've learned." },
  { title: "Support & maintenance", text: "A monthly or yearly agreement covering fixes, updates and small improvements, with agreed response times." },
];

const faqs = [
  { q: "Can you work with our existing systems?", a: "Usually yes, if they offer an API, export or database access. We check this during discovery before quoting." },
  { q: "Who owns the code?", a: "On full payment, the code and data belong to your organisation. Accounts and hosting are set up in your name." },
  { q: "How do you estimate timelines?", a: "After discovery we break the work into milestones with estimated durations. Timelines depend on scope, integrations, data migration and how quickly feedback is given — we don't promise dates before that." },
];

export default function EnterprisePage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise & Custom Projects"
        title="Custom software, integrations and automation"
        text="For growing companies, institutions and NGOs that have outgrown spreadsheets and disconnected tools. Every project starts with discovery and a written scope."
        crumbs={[{ label: "Enterprise", href: "/enterprise/" }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ConsultButton label="Discuss your project" className="btn-light" service="Custom project / Enterprise" />
          <WhatsAppButton onDark text="Hi Siddhi Info, I'd like to discuss a custom software project." />
        </div>
      </PageHero>

      <section className="container-x py-16 sm:py-20" aria-labelledby="cap-title">
        <SectionHead id="cap-title" eyebrow="What we do" title="Where we can help" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <li key={c.title} className="card card-hover p-6">
              <ColorIcon name={c.icon} className="size-14" />
              <h3 className="mt-4 text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-600">{c.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-haldi py-16 sm:py-20" aria-labelledby="ent-services-title">
        <div className="container-x">
          <SectionHead id="ent-services-title" eyebrow="Services" title="Services for growing organisations" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {enterpriseServices.map((s) => <ServiceCard key={s.slug} s={s} price={servicePrice(s)} />)}
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20" aria-labelledby="engage-title">
        <SectionHead id="engage-title" eyebrow="Engagement" title="Ways to work together" text={customQuote.description} />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {engagement.map((e) => (
            <li key={e.title} className="card p-6">
              <h3 className="text-lg font-bold text-ink">{e.title}</h3>
              <p className="mt-1.5 text-slate-600">{e.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <ProcessSteps className="border-t border-slate-200" text="Discovery comes first, so the quote reflects your real requirements — not a guess." />

      <section className="bg-peacock py-16 sm:py-20" aria-labelledby="ent-proof-title">
        <div className="container-x">
          <SectionHead id="ent-proof-title" eyebrow="Live products" title="Platforms you can try" text="SaaS products in the Siddhi Info portfolio, running today." />
          <div className="mt-10"><LiveProducts /></div>
        </div>
      </section>

      <WorkingTerms className="bg-white" />
      <Faq items={faqs} title="Questions from project teams" />
      <CtaBanner title="Request a custom quotation" text="Share what you want to build or improve. We'll set up a discovery call and follow up with a written scope and quote." whatsappText="Hi Siddhi Info, I'd like a custom quotation for a software project." />
    </>
  );
}
