import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Globe2, Rocket, Settings2, Sparkles } from "lucide-react";
import { pageMeta, whatsappLink } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHead from "@/components/SectionHead";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ServiceArt, { accents } from "@/components/art/ServiceArt";
import { BrowserFrame } from "@/components/mockups/Frames";
import { services, getService, portfolio } from "@/lib/data";

export const metadata = pageMeta({
  title: "Services — Website, App, Software & Digital Marketing Development",
  description:
    "Website development, e-commerce, web & mobile apps, CRM/ERP, GST billing software, WhatsApp automation, local SEO, digital marketing and AI automation for Indian businesses.",
  path: "/services/",
});

const groups = [
  {
    id: "get-online",
    icon: Globe2,
    eyebrow: "Step 1 • Get online",
    title: "Look professional and get found",
    text: "Your website, online store, domain and email — everything to build trust and start getting enquiries.",
    slugs: ["website-development", "ecommerce-store", "domain-hosting-email"],
  },
  {
    id: "run-business",
    icon: Settings2,
    eyebrow: "Step 2 • Run your business",
    title: "Software that saves time every day",
    text: "Web apps, mobile apps, CRM/ERP, billing and custom software built around how you work.",
    slugs: ["web-application-development", "mobile-app-development", "crm-erp-software", "billing-gst-software", "custom-software-crm"],
  },
  {
    id: "grow",
    icon: Rocket,
    eyebrow: "Step 3 • Grow & automate",
    title: "More customers, less manual work",
    text: "WhatsApp automation, Google Maps visibility, digital marketing and AI that keep your business growing.",
    slugs: ["whatsapp-business-automation", "local-seo-google-business", "digital-marketing", "ai-business-automation"],
  },
];

const faqs = [
  { q: "Which service should I start with?", a: "Most small businesses start with a mobile-friendly website and Google Business Profile. Once enquiries start coming in, WhatsApp automation and billing or CRM software help you handle them faster. We will suggest the right order for your budget." },
  { q: "Can I take more than one service together?", a: "Yes — and it usually costs less than doing them separately. Tell us what you need and we will prepare one combined quote." },
  { q: "Do you work with businesses outside Kolkata?", a: "Yes. We work with businesses across India over phone, WhatsApp and video calls." },
  { q: "Will I own my website and software?", a: "Yes. On full payment, the domain, website, code and data belong to your business." },
];

function ServiceCard({ s, i }) {
  const c = accents[s.accent] ?? accents.indigo;
  return (
    <Link
      href={`/services/${s.slug}/`}
      data-reveal
      style={{ "--reveal-delay": `${(i % 3) * 80}ms` }}
      className={`card card-hover group flex flex-col overflow-hidden ring-0 ring-transparent transition hover:ring-4 ${c.ring}`}
    >
      <div className={`relative bg-gradient-to-br ${c.card} px-6 pb-3 pt-7`}>
        <span className={`absolute left-5 top-5 grid size-10 place-items-center rounded-xl bg-white shadow-sm ${c.text}`}>
          <Icon name={s.icon} className="size-5" />
        </span>
        <ServiceArt name={s.art} accent={s.accent} className="mx-auto w-full max-w-[180px] transition duration-500 sm:max-w-[230px] group-hover:-translate-y-1 group-hover:scale-[1.05]" />
      </div>
      <div className="flex flex-1 flex-col p-6 pt-5">
        <h3 className="text-xl font-bold leading-snug text-ink">{s.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
        <ul className="mt-4 flex-1 space-y-2">
          {s.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
              <Check className={`mt-0.5 size-4 shrink-0 ${c.text}`} aria-hidden="true" /> {f}
            </li>
          ))}
        </ul>
        <span className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${c.text}`}>
          Explore service <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  const live = portfolio.filter((p) => !p.concept);
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Complete digital solutions for Indian businesses"
        text="From your first website to apps, business software, WhatsApp automation and marketing — one dependable team, simple language and honest pricing."
        crumbs={[{ label: "Services", href: "/services/" }]}
      >
        <p className="mt-4 text-xl font-bold text-mint-300">वेबसाइट से लेकर पूरे बिज़नेस सॉफ़्टवेयर तक।</p>
        <ul className="mt-8 flex max-w-3xl flex-wrap gap-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}/`} className="glass inline-flex min-h-10 items-center gap-2 rounded-full px-3.5 py-2 text-sm text-slate-200 transition hover:bg-white/15 hover:text-white">
                <Icon name={s.icon} className="size-4 text-mint-300" /> {s.title.replace(/ (Development|Software|Solutions)$/, "")}
              </Link>
            </li>
          ))}
        </ul>
        <div aria-hidden="true" className="pointer-events-none absolute right-6 top-1/2 hidden w-[26rem] -translate-y-1/2 xl:block">
          <div className="grid grid-cols-2 gap-4">
            {["web", "mobile", "crm", "whatsapp"].map((a, i) => (
              <div key={a} className={`animate-float rounded-3xl bg-white/95 p-4 shadow-2xl shadow-black/30 ${i % 2 ? "mt-10" : ""}`} style={{ animationDelay: `${i * 0.7}s` }}>
                <ServiceArt name={a} accent={["indigo", "violet", "blue", "green"][i]} />
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      {/* quick jump */}
      <nav aria-label="Service categories" className="sticky top-18 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <ul className="container-x flex gap-2 overflow-x-auto py-3 text-sm font-semibold">
          {groups.map((g) => (
            <li key={g.id} className="shrink-0">
              <a href={`#${g.id}`} className="inline-flex min-h-10 items-center gap-2 rounded-full px-4 py-2 text-slate-600 ring-1 ring-slate-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200">
                <g.icon className="size-4" aria-hidden="true" /> {g.eyebrow.split("• ")[1]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {groups.map((g, gi) => (
        <section key={g.id} id={g.id} className={`scroll-mt-32 py-16 sm:py-24 ${gi % 2 ? "bg-lavender-mesh" : ""}`} aria-labelledby={`${g.id}-title`}>
          <div className="container-x">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHead center={false} id={`${g.id}-title`} eyebrow={g.eyebrow} title={g.title} text={g.text} />
              <span aria-hidden="true" className="icon-tile hidden size-16 shrink-0 md:grid"><g.icon className="size-8" /></span>
            </div>
            <div className={`mt-12 grid gap-6 sm:grid-cols-2 ${g.slugs.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {g.slugs.map(getService).map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
            </div>
          </div>
        </section>
      ))}

      {/* proof: live projects */}
      <section className="bg-hero relative overflow-hidden py-16 text-white sm:py-24" aria-labelledby="proof-title">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <div className="container-x relative">
          <SectionHead
            dark
            id="proof-title"
            eyebrow="Built by Siddhi Info"
            title={<>Platforms we have <span className="text-gradient-light">already launched</span></>}
            text="Real products, live today — built with the same care we bring to your project."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {live.map((p, i) => (
              <a
                key={p.slug}
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` }}
                className="group rounded-2xl bg-white/[0.05] p-3 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <BrowserFrame url={p.url}>
                  <Image src={p.images.desktop} alt={`${p.name} website`} fill sizes="(min-width: 1024px) 290px, 50vw" className="object-cover object-top" />
                </BrowserFrame>
                <p className="mt-4 flex items-center justify-between px-1 font-bold">
                  {p.name} <ArrowUpRight className="size-4 text-slate-400 transition group-hover:text-white" aria-hidden="true" />
                </p>
                <p className="px-1 pb-1 text-xs text-slate-400">{p.category}</p>
              </a>
            ))}
          </div>
          <div data-reveal className="mt-10 text-center">
            <Link href="/work/" className="btn btn-light">See all our work <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* not sure */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] bg-white ring-1 ring-slate-200 lg:grid-cols-2">
          <Image src="/images/project-discussion.webp" alt="Developer discussing requirements with a business owner" width={720} height={540} sizes="(min-width: 1024px) 600px, 100vw" className="h-full w-full object-cover" />
          <div className="p-8 sm:p-12 lg:pl-0">
            <span className="icon-tile size-12"><Sparkles className="size-6" aria-hidden="true" /></span>
            <h2 className="section-title mt-5">Not sure what you need?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Tell us about your business in your own words — Hindi or English. We will suggest what will actually help,
              in what order, and within your budget.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn btn-primary">Get free consultation</Link>
              <a href={whatsappLink("Hi Siddhi Info, I need advice on which service is right for my business.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <WhatsAppIcon className="size-5 text-[#25D366]" /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} title="Questions about our services" />
      <CtaBanner />
    </>
  );
}
