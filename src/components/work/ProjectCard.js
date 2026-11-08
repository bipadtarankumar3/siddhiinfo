import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, Eye, X } from "lucide-react";
import DialogButton from "@/components/DialogButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { BrowserFrame, PhoneFrame } from "@/components/mockups/Frames";
import { DesktopMock, MobileMock } from "@/components/mockups/SiteMocks";
import { whatsappLink } from "@/lib/site";

// One portfolio item: a live project (real screenshots) or a concept demo (illustrative mock).
export default function ProjectCard({ p, i = 0, dark = true }) {
  const live = !p.concept;
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${(i % 2) * 90}ms` }}
      className={`group flex flex-col rounded-[1.75rem] p-4 transition sm:p-6 ${
        dark ? "bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.07] hover:ring-white/20" : "bg-white ring-1 ring-slate-200 hover:shadow-2xl hover:shadow-brand-900/10"
      }`}
    >
      <div className="relative pb-6 pr-8 sm:pr-12">
        <div data-mock="desktop" className="transition duration-500 group-hover:-translate-y-1">
          <BrowserFrame url={p.url}>
            {live ? (
              <Image
                src={p.images.desktop}
                alt={`Homepage of ${p.name} (${p.url}) on desktop`}
                fill
                sizes="(min-width: 1024px) 560px, 92vw"
                className="object-cover object-top"
              />
            ) : (
              <DesktopMock variant={p.variant} />
            )}
          </BrowserFrame>
        </div>
        <div className="absolute bottom-0 right-0 w-[22%] min-w-[76px] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-2">
          <PhoneFrame data-mock="mobile">
            {live ? (
              <Image
                src={p.images.mobile}
                alt={`${p.name} on a mobile phone`}
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            ) : (
              <MobileMock variant={p.variant} />
            )}
          </PhoneFrame>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-gradient-to-r from-brand-500 to-electric-500 px-3 py-1 text-xs font-semibold text-white">{p.category}</span>
        {live ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-mint-400/15 px-3 py-1 text-xs font-semibold text-mint-500 ring-1 ring-mint-400/30">
            <BadgeCheck className="size-3.5" aria-hidden="true" /> Live project
          </span>
        ) : (
          <span className="rounded-full bg-saffron-500/15 px-3 py-1 text-xs font-semibold text-saffron-500 ring-1 ring-saffron-400/30">Concept demo</span>
        )}
      </div>
      <h3 className={`mt-3 text-2xl font-bold tracking-tight ${dark ? "text-white" : "text-ink"}`}>{p.name}</h3>
      <p className={`mt-2 flex-1 leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{p.description}</p>
      {p.tech.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tech.map((t) => (
            <li key={t} className={`rounded-md px-2 py-1 text-xs font-medium ${dark ? "bg-white/10 text-slate-200" : "bg-slate-100 text-slate-700"}`}>{t}</li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex flex-wrap gap-3">
        <DialogButton target={`project-${p.slug}`} className={`btn !py-2.5 ${dark ? "btn-light" : "btn-primary"}`}>
          <Eye className="size-4" aria-hidden="true" /> View Project
        </DialogButton>
        {live ? (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={`btn !py-2.5 ${dark ? "btn-glass" : "btn-outline"}`}>
            Visit live site <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        ) : (
          <Link href={`/services/${p.service}/`} className={`btn !py-2.5 ${dark ? "btn-glass" : "btn-outline"}`}>
            View Details <ArrowRight className="size-4" aria-hidden="true" />
            <span className="sr-only"> about {p.category}</span>
          </Link>
        )}
      </div>

      <ProjectDialog p={p} />
    </article>
  );
}

function ProjectDialog({ p }) {
  const id = `project-${p.slug}`;
  const live = !p.concept;
  return (
    <dialog
      id={id}
      aria-labelledby={`${id}-title`}
      className="m-auto w-[min(72rem,calc(100vw-1.5rem))] max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-3xl bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {p.category} • {live ? "Live project" : "Concept demo"}
          </p>
          <h3 id={`${id}-title`} className="text-xl font-extrabold tracking-tight">{p.name}</h3>
        </div>
        <form method="dialog">
          <button className="grid size-10 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200" aria-label="Close project preview">
            <X className="size-5" />
          </button>
        </form>
      </div>
      {/* Filled on open with a copy of the card's previews (see DialogButton) to keep the page light */}
      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_15rem]">
        <div data-slot="desktop" />
        <div data-slot="mobile" className="mx-auto w-full max-w-[11rem] sm:max-w-[15rem]" />
      </div>
      <div className="grid gap-8 border-t border-slate-200 bg-lavender-50 p-5 sm:p-8 md:grid-cols-3">
        <div>
          <h4 className="font-bold">{live ? "About this project" : "About this concept"}</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
          {!live && (
            <p className="mt-3 rounded-xl bg-saffron-50 p-3 text-xs text-saffron-600 ring-1 ring-saffron-100">
              This is an illustrative demo design with a fictional brand — not a client project.
            </p>
          )}
        </div>
        <div>
          <h4 className="font-bold">Key features</h4>
          <ul className="mt-2 space-y-1.5">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-slate-700"><Check className="mt-0.5 size-4 shrink-0 text-mint-600" aria-hidden="true" />{f}</li>
            ))}
          </ul>
        </div>
        <div>
          {p.tech.length > 0 && (
            <>
              <h4 className="font-bold">Technologies</h4>
              <ul className="mb-5 mt-2 flex flex-wrap gap-2">
                {p.tech.map((t) => <li key={t} className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">{t}</li>)}
              </ul>
            </>
          )}
          <div className="flex flex-col gap-2">
            {live && (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit {p.url} <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
            <a href={whatsappLink(`Hi Siddhi Info, I'd like something similar to ${p.name}.`)} target="_blank" rel="noopener noreferrer" className={`btn ${live ? "btn-outline" : "btn-primary"}`}>
              <WhatsAppIcon className="size-4" /> Build something similar
            </a>
            <Link href={`/services/${p.service}/`} className="btn btn-outline">View service details</Link>
          </div>
        </div>
      </div>
    </dialog>
  );
}
