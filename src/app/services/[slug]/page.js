import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { services, industries, getService } from "@/lib/data";
import { absoluteUrl, whatsappLink, pageMeta } from "@/lib/site";

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

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = industries.filter((i) => i.services.includes(s.slug));
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);

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
        eyebrow="Service"
        title={s.title}
        text={s.intro}
        crumbs={[
          { label: "Services", href: "/services/" },
          { label: s.title, href: `/services/${s.slug}/` },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact/" className="btn btn-primary">
            Get a free quote <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <a href={whatsappLink(`Hi, I'm interested in ${s.title}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <WhatsAppIcon className="size-5 text-[#25D366]" /> Ask on WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="section-title">What’s included</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {s.features.map((f) => (
              <li key={f} className="card flex items-start gap-3 p-4">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-green-50 text-green-600">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="text-ink">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card bg-gradient-to-br from-brand-600 to-brand-700 p-7 text-white">
            <Sparkles className="size-6 text-saffron-400" aria-hidden="true" />
            <h2 className="mt-3 text-xl font-bold">What you get</h2>
            <ul className="mt-4 space-y-3">
              {s.outcomes.map((o) => (
                <li key={o} className="flex gap-2 text-brand-50">
                  <Check className="mt-0.5 size-5 shrink-0 text-saffron-400" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
            <Link href="/pricing/" className="btn mt-6 w-full bg-white text-brand-700 hover:bg-brand-50">
              See pricing
            </Link>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="container-x">
            <h2 className="section-title">Popular with</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((i) => (
                <Link key={i.slug} href={`/industries/${i.slug}/`} className="card card-hover flex items-center gap-4 p-5">
                  <span className="grid size-11 place-items-center rounded-xl bg-saffron-50 text-saffron-600">
                    <Icon name={i.icon} className="size-5" />
                  </span>
                  <span className="font-semibold text-ink">{i.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Faq items={s.faqs} />

      <section className="container-x pb-4">
        <h2 className="section-title">Other services</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} href={`/services/${o.slug}/`} className="card card-hover p-6">
              <Icon name={o.icon} className="size-6 text-brand-600" />
              <h3 className="mt-4 font-bold text-ink">{o.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{o.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner title={`Let’s talk about ${s.title.toLowerCase()}`} />
    </>
  );
}
