import Image from "next/image";
import Link from "next/link";
import { pageMeta, site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHead from "@/components/SectionHead";
import WorkingTerms from "@/components/WorkingTerms";
import ProcessSteps from "@/components/ProcessSteps";
import ColorIcon from "@/components/ColorIcon";
import BrandIcon from "@/components/BrandIcon";
import { techStack } from "@/lib/data";

export const metadata = pageMeta({
  title: "About Siddhi Info — Your Complete Digital & Technology Partner",
  description:
    "Siddhi Info is a Kolkata-based technology partner building websites and digital tools for small businesses, and custom software and automation for growing organisations. How we work, communicate, get paid and hand over ownership.",
  path: "/about/",
});

// ⚠️ OWNER TO VERIFY: keep only the practices you actually follow on every project.
const practices = [
  { icon: "Code2", title: "Version control & code review", text: "All code lives in Git, with changes reviewed before they reach production." },
  { icon: "AppWindow", title: "Staging before launch", text: "You review new work on a preview link before it goes live." },
  { icon: "KeyRound", title: "Secure by default", text: "HTTPS everywhere, input validation, hashed passwords, least-privilege access and no secrets in browser code." },
  { icon: "Server", title: "Backups & recovery", text: "Automated backups for databases and files, with restores tested on handover." },
  { icon: "ClipboardCheck", title: "Documentation & handover", text: "Logins, deployment notes and source code are handed over in your name." },
  { icon: "LifeBuoy", title: "Support after launch", text: "A support period with every package, and optional maintenance agreements." },
];

const principles = [
  { title: "Honest advice", text: "We recommend what will help — including a ready-made tool or a smaller scope when that's the better choice." },
  { title: "Plain language", text: "No jargon. We explain in English, Hindi or Bengali, whichever you prefer." },
  { title: "Written scope", text: "What's included, what isn't, the price and the milestones are agreed in writing before work starts." },
  { title: "Long-term support", text: "Most useful improvements happen after launch, so we stay available for fixes and updates." },
];

export default function AboutPage() {
  const details = [
    ["Based in", `${site.address.city}, ${site.address.region}, India`],
    ["Works with", "Businesses across India, remotely by phone, WhatsApp and video call"],
    ["Languages", "English, Hindi, Bengali"],
    site.hours && ["Business hours", site.hours],
    site.legal.gstin && ["GSTIN", site.legal.gstin],
    site.legal.registration && ["Registration", site.legal.registration],
  ].filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Building technology that helps businesses succeed"
        text="Siddhi Info builds websites and practical digital tools for small businesses, and custom software, integrations and automation for growing organisations. ‘Siddhi’ means accomplishment — getting the job done."
        crumbs={[{ label: "About", href: "/about/" }]}
      />

      <section className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-slate-700">
          <h2 className="section-title">What we do</h2>
          <p>
            Many Indian businesses still run on registers, spreadsheets and WhatsApp groups, or have a website that
            doesn&apos;t bring in enquiries. We help in two ways:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/small-business/" className="font-semibold text-brand-700 underline">Small businesses</Link>{" "}
              — websites, online ordering, GST billing, WhatsApp tools and Google visibility at clear starting prices.
            </li>
            <li>
              <Link href="/enterprise/" className="font-semibold text-brand-700 underline">Growing organisations</Link>{" "}
              — custom web applications, CRM/ERP, integrations, automation and ongoing technical support, scoped and quoted in writing.
            </li>
          </ul>
          <p>
            You can see products in our portfolio running live on the <Link href="/work/" className="font-semibold text-brand-700 underline">Our Work</Link> page.
          </p>
        </div>
        <dl className="card self-start divide-y divide-slate-200">
          {details.map(([k, v]) => (
            <div key={k} className="p-5">
              <dt className="text-sm font-semibold text-slate-500">{k}</dt>
              <dd className="mt-0.5 font-semibold text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {site.team.length > 0 && (
        <section className="bg-haldi py-16 sm:py-20" aria-labelledby="team-title">
          <div className="container-x">
            <SectionHead id="team-title" eyebrow="People" title="Who you'll work with" />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {site.team.map((m) => (
                <li key={m.name} className="card p-6">
                  {m.photo && <Image src={m.photo} alt={`Photo of ${m.name}`} width={160} height={160} className="size-20 rounded-full object-cover" />}
                  <h3 className="mt-4 text-lg font-bold text-ink">{m.name}</h3>
                  <p className="text-sm font-semibold text-brand-700">{m.role}</p>
                  {m.bio && <p className="mt-2 text-slate-600">{m.bio}</p>}
                  {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-brand-700 underline">LinkedIn</a>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="container-x py-16 sm:py-20" aria-labelledby="principles-title">
        <SectionHead id="principles-title" eyebrow="Principles" title="How we approach every project" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <li key={p.title} className="card p-6">
              <span className="grid size-9 place-items-center rounded-full bg-brand-700 font-bold text-white">{i + 1}</span>
              <h3 className="mt-3 font-bold text-ink">{p.title}</h3>
              <p className="mt-1.5 text-slate-600">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-haldi py-16 sm:py-20" aria-labelledby="cap-title">
        <div className="container-x">
          <SectionHead id="cap-title" eyebrow="Capabilities" title="Technical capabilities" text="Websites, web applications, mobile apps, CRM/ERP, integrations, AI automation and cloud deployment — built with:" />
          <ul className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <li key={t.name} className="flex min-h-12 items-center gap-2.5 rounded-2xl bg-white px-4 py-2 font-semibold text-ink shadow-sm ring-1 ring-slate-200">
                {t.icon ? <BrandIcon name={t.icon} className="size-6" /> : <ColorIcon name={t.name === "AWS" ? "Cloud" : t.name.startsWith("AI") ? "Bot" : "Puzzle"} className="size-6" />}
                {t.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20" aria-labelledby="practice-title">
        <SectionHead id="practice-title" eyebrow="Quality & security" title="How we build" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((p) => (
            <li key={p.title} className="card p-6">
              <ColorIcon name={p.icon} className="size-11" />
              <h3 className="mt-3 font-bold text-ink">{p.title}</h3>
              <p className="mt-1.5 text-slate-600">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <WorkingTerms title="Communication, ownership, support and payments" />
      <ProcessSteps />
      <CtaBanner />
    </>
  );
}
