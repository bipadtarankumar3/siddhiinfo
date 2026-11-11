import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ColorIcon from "@/components/ColorIcon";
import Faq from "@/components/Faq";
import Toran from "@/components/india/Toran";
import WhatsAppQrCard from "@/components/india/WhatsAppQrCard";
import { site, whatsappLink, telHref, mailHref, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact — Free Consultation and Project Enquiries",
  description: `Send Siddhi Info an enquiry about a website, online store, billing, WhatsApp automation or custom software project. We reply ${site.responseTime}, in English, Hindi or Bengali.`,
  path: "/contact/",
});

const paths = [
  {
    icon: "Store",
    title: "I run a small business",
    text: "Website, WhatsApp orders, online store, billing or Google visibility.",
    service: "Not sure — need advice",
    tone: "from-orange-500 to-amber-400",
    ring: "hover:ring-orange-300",
  },
  {
    icon: "Building2",
    title: "I need custom software",
    text: "Web or mobile app, CRM/ERP, integrations, automation or support.",
    service: "Custom project / Enterprise",
    tone: "from-teal-500 to-indigo-500",
    ring: "hover:ring-teal-300",
  },
  {
    icon: "IndianRupee",
    title: "I want a price first",
    text: "See starting prices, package limits and how custom quotes work.",
    href: "/pricing/",
    tone: "from-pink-500 to-rose-500",
    ring: "hover:ring-pink-300",
  },
];

const nextSteps = [
  { icon: "Mail", title: "We read your enquiry", text: `It reaches our team inbox instantly. We reply ${site.responseTime}.` },
  { icon: "MessagesSquare", title: "A short free call", text: "We understand your business and suggest the simplest option that works." },
  { icon: "ClipboardCheck", title: "Written scope & quote", text: "If it's a fit: what's included, price, milestones — before any payment." },
];

const faqs = [
  { q: "Is the consultation really free?", a: "Yes. The first conversation is free and there's no obligation to go ahead." },
  { q: "Which languages can we talk in?", a: "English, Hindi or Bengali — whichever is easiest for you." },
  { q: "I'm outside Kolkata. Can you still help?", a: "Yes. We work with businesses elsewhere in India by phone, WhatsApp and video call." },
  { q: "What should I write in the form?", a: "Just a sentence or two about your business and what you'd like to fix or build. We'll ask the rest on the call." },
];

export default function ContactPage() {
  const wa = whatsappLink();
  const items = [
    { icon: "Mail", label: "Email", value: site.email, href: mailHref, tint: "bg-rose-50 ring-rose-200" },
    wa && { icon: "MessageCircle", label: "WhatsApp", value: "Chat with us", href: wa, external: true, tint: "bg-green-50 ring-green-200" },
    telHref && { icon: "Phone", label: "Phone", value: site.phone, href: telHref, tint: "bg-blue-50 ring-blue-200" },
    { icon: "MapPin", label: "Location", value: `${site.address.city}, ${site.address.region} · clients across India`, tint: "bg-pink-50 ring-pink-200" },
    { icon: "Clock", label: site.hours ? "Hours" : "Reply time", value: site.hours || `We reply ${site.responseTime}`, tint: "bg-sky-50 ring-sky-200" },
    { icon: "Languages", label: "Languages", value: "English · हिन्दी · বাংলা", tint: "bg-amber-50 ring-amber-200" },
  ].filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Contact · संपर्क · যোগাযোগ"
        title="Let's talk about your project"
        text="Small business or larger organisation — share a few details and we'll reply with honest advice and, if it's a fit, a written quote. The first conversation is free."
        crumbs={[{ label: "Contact", href: "/contact/" }]}
      >
        <ul className="mt-6 flex flex-wrap gap-2 text-sm">
          {["Free first consultation", "No obligation", `Reply ${site.responseTime}`].map((t) => (
            <li key={t} className="rounded-full bg-white/10 px-3.5 py-1.5 font-semibold text-white ring-1 ring-white/20">✓ {t}</li>
          ))}
        </ul>
      </PageHero>

      {/* Choose a path */}
      <section className="bg-haldi py-12 sm:py-14" aria-labelledby="path-title">
        <div className="container-x">
          <h2 id="path-title" className="text-center text-2xl font-extrabold text-ink sm:text-3xl">What brings you here?</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {paths.map((p) => {
              const href = p.href ?? `/contact/?service=${encodeURIComponent(p.service)}#enquiry`;
              const Tag = p.href ? Link : "a";
              return (
                <li key={p.title}>
                  {/* Plain <a> for same-page links so the form re-reads ?service= on load */}
                  <Tag href={href} className={`card group flex h-full flex-col overflow-hidden ring-2 ring-transparent transition ${p.ring}`}>
                    <span aria-hidden="true" className={`h-2 bg-gradient-to-r ${p.tone}`} />
                    <span className="flex flex-1 items-start gap-4 p-5">
                      <ColorIcon name={p.icon} className="size-14" />
                      <span className="flex-1">
                        <span className="block text-lg font-bold text-ink">{p.title}</span>
                        <span className="mt-1 block text-[0.95rem] text-slate-600">{p.text}</span>
                      </span>
                      <ArrowRight className="mt-1 size-5 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-brand-700" aria-hidden="true" />
                    </span>
                  </Tag>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container-x grid gap-8 py-14 sm:py-20 lg:grid-cols-5">
        {/* Form card */}
        <div id="enquiry" className="scroll-mt-24 overflow-hidden rounded-3xl bg-white shadow-xl shadow-brand-900/10 ring-1 ring-slate-200 lg:col-span-3">
          <div className="relative bg-gradient-to-r from-saffron-600 via-pink-600 to-indigo-700 px-5 pb-6 pt-10 text-white sm:px-8">
            <Toran uid="form-toran" className="absolute inset-x-0 top-0" />
            <div className="flex items-center gap-4">
              <span className="grid place-items-center rounded-2xl bg-white p-1.5 shadow-lg"><ColorIcon name="MessagesSquare" className="size-12" /></span>
              <div>
                <h2 className="text-2xl font-extrabold">Send an enquiry</h2>
                <p className="text-white/90">Takes about a minute · नमस्ते! · নমস্কার!</p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-8">
            <ContactForm />
          </div>
        </div>

        {/* Side panel */}
        <div className="space-y-6 lg:col-span-2">
          <div>
            <h2 className="text-xl font-extrabold text-ink">Other ways to reach us</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {items.map(({ icon, label, value, href, external, tint }) => {
                const inner = (
                  <>
                    <ColorIcon name={icon} className="size-12" />
                    <span className="min-w-0">
                      <span className="block text-sm text-slate-600">{label}</span>
                      <span className="block break-words font-semibold text-ink">{value}</span>
                    </span>
                  </>
                );
                const cls = `flex items-center gap-4 rounded-2xl p-3 pr-4 ring-1 ${tint}`;
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })} className={`${cls} transition hover:-translate-y-0.5 hover:shadow-md`}>{inner}</a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-3xl bg-hero p-6 text-white">
            <h2 className="text-lg font-extrabold">What happens next</h2>
            <ol className="mt-4 space-y-4">
              {nextSteps.map((s, i) => (
                <li key={s.title} className="flex gap-3">
                  <span className="relative">
                    <span className="grid place-items-center rounded-2xl bg-white p-1"><ColorIcon name={s.icon} className="size-10" /></span>
                    <span className="absolute -right-1.5 -top-1.5 grid size-6 place-items-center rounded-full bg-saffron-600 text-xs font-bold ring-2 ring-brand-950">{i + 1}</span>
                  </span>
                  <span>
                    <span className="block font-bold">{s.title}</span>
                    <span className="block text-sm text-slate-300">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <WhatsAppQrCard />
        </div>
      </section>

      <Faq items={faqs} title="Before you get in touch" />
    </>
  );
}
