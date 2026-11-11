import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, IndianRupee, Clock, Info, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import ColorIcon from "@/components/ColorIcon";
import ProjectCard from "@/components/work/ProjectCard";
import { WhatsAppButton } from "@/components/ContactButtons";
import { services, getService, getProject, steps, servicePrice, quoteLink } from "@/lib/data";
import { absoluteUrl, pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}/` });
}

function List({ items, icon: I, tone }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((x) => (
        <li key={x} className="flex gap-2.5 text-slate-700">
          <I className={`mt-0.5 size-5 shrink-0 ${tone}`} aria-hidden="true" /> {x}
        </li>
      ))}
    </ul>
  );
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const price = servicePrice(s);
  const example = s.example ? getProject(s.example) : null;
  const related = services.filter((o) => o.slug !== s.slug && o.audience === s.audience).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.metaDescription,
          url: absoluteUrl(`/services/${s.slug}/`),
          areaServed: { "@type": "Country", name: "India" },
          provider: { "@id": absoluteUrl("/#organization") },
          serviceType: s.title,
        }}
      />
      <PageHero
        eyebrow={s.audience === "enterprise" ? "Enterprise & custom service" : s.audience === "both" ? "Service · small business & enterprise" : "Small business service"}
        title={s.title}
        text={s.short}
        crumbs={[
          { label: "Services", href: "/services/" },
          { label: s.title, href: `/services/${s.slug}/` },
        ]}
      >
        <div aria-hidden="true" className="absolute right-10 top-1/2 hidden -translate-y-1/2 rounded-[2rem] bg-white/95 p-6 shadow-2xl shadow-black/30 xl:block">
          <ColorIcon name={s.icon} className="size-40" />
        </div>
        {s.hi && <p className="mt-3 text-lg font-semibold text-marigold-400" lang="hi">{s.hi}{s.bn && <span lang="bn" className="text-slate-300"> · {s.bn}</span>}</p>}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={quoteLink(s)} className="btn btn-cta">Get a quote</Link>
          <WhatsAppButton onDark text={`Hi Siddhi Info, I'm interested in ${s.title}.`} label="Ask on WhatsApp" />
        </div>
      </PageHero>

      {/* Problem + who it's for */}
      <section className="container-x grid gap-10 py-16 sm:py-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="section-title">The problem this solves</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">{s.problem}</p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">{s.intro}</p>
          {s.distinction && (
            <p className="mt-6 flex gap-3 rounded-2xl bg-brand-50 p-4 text-slate-700 ring-1 ring-brand-100">
              <Info className="mt-0.5 size-5 shrink-0 text-brand-700" aria-hidden="true" />
              <span><strong className="text-ink">Which service is right?</strong> {s.distinction}</span>
            </p>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="flex items-center gap-3 text-lg font-bold text-ink"><ColorIcon name="Users" className="size-10" /> Suitable for</h3>
              <List items={s.suitableFor} icon={Check} tone="text-mint-600" />
            </div>
            {s.notFor.length > 0 && (
              <div className="card p-6">
                <h3 className="flex items-center gap-3 text-lg font-bold text-ink"><ColorIcon name="Puzzle" className="size-10" /> Probably not the right fit if…</h3>
                <List items={s.notFor} icon={ArrowRight} tone="text-slate-400" />
              </div>
            )}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start" aria-labelledby="price-title">
          <div className="card p-6">
            <p id="price-title" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              <IndianRupee className="size-4" aria-hidden="true" /> Pricing
            </p>
            <p className="mt-1 text-2xl font-extrabold text-ink">{price ? `From ${price}` : "Custom quote"}</p>
            <p className="mt-1 text-sm text-slate-600">
              {price ? "Starting price for the standard scope, + GST if applicable. " : "Quoted after a free discovery call. "}
              Third-party fees are separate.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              <Clock className="size-4" aria-hidden="true" /> Typical timeline
            </p>
            <p className="mt-1 text-slate-700">{s.timeline}</p>
            <div className="mt-6 flex flex-col gap-2">
              <Link href={quoteLink(s)} className="btn btn-cta">Get a quote</Link>
              {price && <Link href="/pricing/" className="btn btn-outline">See pricing terms</Link>}
            </div>
          </div>
        </aside>
      </section>

      {/* Business benefits */}
      <section className="container-x pb-16 sm:pb-20" aria-labelledby="benefits-title">
        <h2 id="benefits-title" className="section-title">Business benefits</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {s.outcomes.map((o, idx) => (
            <li key={o} className="card flex items-start gap-3 p-5">
              <ColorIcon name={["TrendingUp", "Zap", "KeyRound"][idx % 3]} className="size-10" />
              <span className="pt-1.5 font-semibold text-ink">{o}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Included / excluded */}
      <section className="bg-haldi py-16 sm:py-20" aria-labelledby="scope-title">
        <div className="container-x">
          <SectionHead id="scope-title" eyebrow="Scope" title="What's included — and what isn't" text="The exact scope for your project is written in your quote." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card p-6 sm:p-8">
              <h3 className="flex items-center gap-3 text-lg font-bold text-ink"><ColorIcon name="ClipboardCheck" className="size-10" /> Included</h3>
              <List items={s.features} icon={Check} tone="text-mint-600" />
            </div>
            <div className="card p-6 sm:p-8">
              <h3 className="flex items-center gap-3 text-lg font-bold text-ink"><ColorIcon name="LifeBuoy" className="size-10" /> Not included</h3>
              <List items={s.excluded} icon={X} tone="text-rose-500" />
              <h3 className="mt-8 flex items-center gap-3 text-lg font-bold text-ink"><ColorIcon name="IndianRupee" className="size-10" /> Third-party costs (paid to the provider)</h3>
              <List items={s.thirdParty} icon={IndianRupee} tone="text-slate-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Process + timeline factors */}
      <section className="container-x py-16 sm:py-20" aria-labelledby="deliver-title">
        <SectionHead id="deliver-title" eyebrow="Delivery" title="How it's delivered" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <ol className="grid gap-3 sm:grid-cols-2">
            {steps.map((st, i) => (
              <li key={st.title} className="card p-5">
                <p className="text-sm font-bold text-brand-700">Step {i + 1}</p>
                <h3 className="font-bold text-ink">{st.title}</h3>
                <p className="mt-1 text-[0.95rem] text-slate-600">{st.text}</p>
              </li>
            ))}
          </ol>
          <div className="card self-start p-6">
            <h3 className="flex items-center gap-3 text-lg font-bold text-ink"><ColorIcon name="Clock" className="size-10" /> What affects the timeline</h3>
            <List items={s.timelineFactors} icon={Clock} tone="text-brand-700" />
            <p className="mt-5 text-sm text-slate-600">{s.timeline}</p>
          </div>
        </div>
      </section>

      {/* Example */}
      {example && (
        <section className="bg-peacock py-16 sm:py-20" aria-labelledby="example-title">
          <div className="container-x">
            <SectionHead
              id="example-title"
              eyebrow={example.concept ? "Concept demo" : "Live product"}
              title={example.concept ? "An example of what this can look like" : "A related product you can try"}
              text={example.concept ? "This is an illustrative design with a fictional brand and sample data — not a client project." : undefined}
            />
            <div className="mx-auto mt-10 max-w-2xl">
              <ProjectCard p={example} dark={false} />
            </div>
          </div>
        </section>
      )}

      <Faq items={s.faqs} title={`${s.title}: questions`} />

      {related.length > 0 && (
        <section className="container-x pb-4" aria-labelledby="other-title">
          <SectionHead center={false} id="other-title" eyebrow="Related" title="Related services" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((o) => <ServiceCard key={o.slug} s={o} price={servicePrice(o)} />)}
          </div>
        </section>
      )}

      <CtaBanner title={`Talk to us about ${s.title.toLowerCase()}`} whatsappText={`Hi Siddhi Info, I'm interested in ${s.title}.`} />
    </>
  );
}
