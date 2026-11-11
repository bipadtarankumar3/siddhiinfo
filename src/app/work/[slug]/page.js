import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, AlertTriangle } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import ColorIcon from "@/components/ColorIcon";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import { BrowserFrame, PhoneFrame } from "@/components/mockups/Frames";
import { DesktopMock, MobileMock } from "@/components/mockups/SiteMocks";
import { portfolio, getProject, getService, servicePrice, ownershipLabel } from "@/lib/data";
import { pageMeta, absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMeta({
    title: p.concept ? `${p.name} — ${p.category} concept demo` : `${p.name} — ${p.category}`,
    description: p.concept
      ? `Concept demo (fictional brand, sample data): ${p.description.replace(/^Concept: /, "")}`
      : `${p.name} (${p.url}): ${p.description}`,
    path: `/work/${p.slug}/`,
  });
}

function Stamp() {
  return (
    <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-md bg-amber-300 px-2 py-1 text-xs font-bold uppercase tracking-wide text-amber-950 shadow">
      Concept demo · sample data
    </span>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const live = !p.concept;
  const service = getService(p.service);

  return (
    <>
      {live && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: p.name,
            url: p.liveUrl,
            applicationCategory: "BusinessApplication",
            description: p.description,
            mainEntityOfPage: absoluteUrl(`/work/${p.slug}/`),
          }}
        />
      )}
      <PageHero
        eyebrow={live ? `Live product · ${p.category}` : `Concept demo · ${p.category}`}
        title={p.name}
        text={p.description}
        crumbs={[{ label: "Our Work", href: "/work/" }, { label: p.name, href: `/work/${p.slug}/` }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {live && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" data-track="demo_click" className="btn btn-light">
              Visit {p.url} <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          )}
          <Link href={`/get-a-quote/?service=${p.service?.includes("whatsapp") ? "whatsapp-automation" : "custom-software"}`} className="btn btn-cta">
            Build something similar
          </Link>
        </div>
      </PageHero>

      {!live && (
        <div className="container-x mt-8">
          <p className="flex items-start gap-3 rounded-2xl bg-amber-50 p-4 text-amber-950 ring-1 ring-amber-200">
            <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <span>
              <strong>This is a concept demonstration, not a client project.</strong> {p.name} is a fictional brand; the
              domain, names, prices and figures shown are sample data created to illustrate what we can build.
            </span>
          </p>
        </div>
      )}

      {/* Screenshots */}
      <section className="container-x py-12 sm:py-16" aria-labelledby="screens-title">
        <h2 id="screens-title" className="sr-only">Screenshots</h2>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_16rem]">
          <div className="relative">
            {!live && <Stamp />}
            <BrowserFrame url={p.url}>
              {live ? (
                <Image src={p.images.desktop} alt={`${p.name} on desktop`} fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover object-top" priority />
              ) : (
                <DesktopMock variant={p.variant} />
              )}
            </BrowserFrame>
          </div>
          <div className="relative mx-auto w-full max-w-[14rem]">
            {!live && <Stamp />}
            <PhoneFrame>
              {live ? (
                <Image src={p.images.mobile} alt={`${p.name} on a mobile phone`} fill sizes="240px" className="object-cover object-top" />
              ) : (
                <MobileMock variant={p.variant} />
              )}
            </PhoneFrame>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-slate-50 py-14 sm:py-20" aria-labelledby="overview-title">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 id="overview-title" className="flex items-center gap-3 text-2xl font-extrabold text-ink"><ColorIcon name="LifeBuoy" className="size-10" /> The problem</h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-700">{p.problem}</p>
            </div>
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-extrabold text-ink"><ColorIcon name="Puzzle" className="size-10" /> The solution</h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-700">{p.solution}</p>
            </div>
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-extrabold text-ink"><ColorIcon name="ClipboardCheck" className="size-10" /> Features</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 rounded-xl bg-white p-3 text-slate-700 ring-1 ring-slate-200">
                    <Check className="mt-0.5 size-5 shrink-0 text-green-700" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="space-y-5">
            <dl className="card divide-y divide-slate-200">
              <div className="p-5">
                <dt className="text-sm font-semibold text-slate-500">Type</dt>
                <dd className="font-semibold text-ink">{live ? "Live product" : "Concept demo (fictional brand)"}</dd>
              </div>
              {live && p.ownership && (
                <div className="p-5">
                  <dt className="text-sm font-semibold text-slate-500">Ownership</dt>
                  <dd className="font-semibold text-ink">{ownershipLabel[p.ownership]}</dd>
                </div>
              )}
              <div className="p-5">
                <dt className="text-sm font-semibold text-slate-500">Category</dt>
                <dd className="font-semibold text-ink">{p.category}</dd>
              </div>
              {p.tech.length > 0 && (
                <div className="p-5">
                  <dt className="text-sm font-semibold text-slate-500">Technology {live ? "" : "(proposed)"}</dt>
                  <dd className="mt-1 flex flex-wrap gap-2">
                    {p.tech.map((t) => <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">{t}</span>)}
                  </dd>
                </div>
              )}
              <div className="p-5">
                <dt className="text-sm font-semibold text-slate-500">Results</dt>
                <dd className="text-slate-700">{live ? "Results are published only with verified evidence." : "Not applicable — demonstration only."}</dd>
              </div>
            </dl>
            {service && <ServiceCard s={service} price={servicePrice(service)} />}
          </aside>
        </div>
      </section>

      <CtaBanner title={`Want something like ${p.name}?`} text="Tell us about your business and we'll suggest what to build, what it costs and how long it takes." />
    </>
  );
}
