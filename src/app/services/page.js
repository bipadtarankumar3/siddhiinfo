import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { services } from "@/lib/data";

export const metadata = pageMeta({
  title: "Services — Websites, E-commerce, Billing, WhatsApp & SEO",
  description: "Explore Siddhi Info services for Indian small businesses: website development, online stores, GST billing software, WhatsApp automation, local SEO, digital marketing and custom software.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Digital services that bring real customers"
        text="Everything a small or medium business in India needs to look professional, get found online and run smoothly — under one roof."
        crumbs={[{ label: "Services", href: "/services/" }]}
      />
      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.slug} className="card card-hover group relative flex flex-col p-7">
              <span className="icon-tile size-12">
                <Icon name={s.icon} className="size-6" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">
                <Link href={`/services/${s.slug}/`} className="after:absolute after:inset-0">{s.title}</Link>
              </h2>
              <p className="mt-2 text-slate-600">{s.short}</p>
              <ul className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                {s.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-brand-600">•</span>{f}</li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                View details <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
