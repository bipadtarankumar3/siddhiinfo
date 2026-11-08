import Link from "next/link";
import { ArrowRight, Check, Eye, Info, X } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import DialogButton from "@/components/DialogButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { BrowserFrame, PhoneFrame } from "@/components/mockups/Frames";
import { DesktopMock, MobileMock } from "@/components/mockups/SiteMocks";
import { portfolio } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export default function Portfolio() {
  return (
    <section id="work" className="bg-hero relative scroll-mt-16 overflow-hidden py-20 text-white sm:py-28" aria-labelledby="work-title">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <div aria-hidden="true" className="animate-blob absolute -right-40 top-40 size-[32rem] rounded-full bg-electric-500/20 blur-3xl" />
      <div className="container-x relative">
        <SectionHead
          dark
          id="work-title"
          eyebrow="Our work"
          title={<>Turning Business Ideas Into <span className="text-gradient-light">Digital Experiences</span></>}
          text="Explore the websites, applications and digital solutions we can build for your business."
        />
        <p data-reveal className="mx-auto mt-6 flex w-fit max-w-full items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-center text-xs font-medium text-slate-200 ring-1 ring-white/15 sm:text-sm">
          <Info className="size-4 shrink-0 text-saffron-300" aria-hidden="true" />
          Concept demos with fictional brand names — designed to show what we can build for you.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {portfolio.map((p, i) => (
            <article key={p.slug} data-reveal style={{ "--reveal-delay": `${(i % 2) * 90}ms` }} className="group flex flex-col rounded-[1.75rem] bg-white/[0.04] p-4 ring-1 ring-white/10 transition hover:bg-white/[0.07] hover:ring-white/20 sm:p-6">
              <div className="relative pb-6 pr-8 sm:pr-12">
                <div data-mock="desktop" className="transition duration-500 group-hover:-translate-y-1">
                  <BrowserFrame url={p.url}>
                    <DesktopMock variant={p.variant} />
                  </BrowserFrame>
                </div>
                <div className="absolute bottom-0 right-0 w-[22%] min-w-[76px] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-2">
                  <PhoneFrame data-mock="mobile">
                    <MobileMock variant={p.variant} />
                  </PhoneFrame>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-gradient-to-r from-brand-500 to-electric-500 px-3 py-1 text-xs font-semibold">{p.category}</span>
                {p.concept && <span className="rounded-full bg-saffron-500/15 px-3 py-1 text-xs font-semibold text-saffron-300 ring-1 ring-saffron-400/30">Concept demo</span>}
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">{p.name}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-slate-300">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-slate-200">{t}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <DialogButton target={`project-${p.slug}`} className="btn btn-light !py-2.5">
                  <Eye className="size-4" aria-hidden="true" /> View Project
                </DialogButton>
                <Link href={`/services/${p.service}/`} className="btn btn-glass !py-2.5">
                  View Details <ArrowRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> about {p.category}</span>
                </Link>
              </div>

              <ProjectDialog p={p} />
            </article>
          ))}
        </div>

        <div data-reveal className="mt-14 text-center">
          <p className="text-lg text-slate-300">Have a similar idea for your business?</p>
          <Link href="/contact/" className="btn btn-light mt-4">
            Let’s discuss your project <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectDialog({ p }) {
  const id = `project-${p.slug}`;
  return (
    <dialog
      id={id}
      aria-labelledby={`${id}-title`}
      className="m-auto w-[min(72rem,calc(100vw-1.5rem))] max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-3xl bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{p.category} {p.concept && "• Concept demo"}</p>
          <h3 id={`${id}-title`} className="text-xl font-extrabold tracking-tight">{p.name}</h3>
        </div>
        <form method="dialog">
          <button className="grid size-10 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200" aria-label="Close project preview">
            <X className="size-5" />
          </button>
        </form>
      </div>
      {/* Filled on open with a copy of the card's mockups (see DialogButton) to keep the page light */}
      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_15rem]">
        <div data-slot="desktop" />
        <div data-slot="mobile" className="mx-auto w-full max-w-[15rem]" />
      </div>
      <div className="grid gap-8 border-t border-slate-200 bg-lavender-50 p-5 sm:p-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h4 className="font-bold">About this concept</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
          {p.concept && (
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
          <h4 className="font-bold">Technologies</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {p.tech.map((t) => <li key={t} className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">{t}</li>)}
          </ul>
          <div className="mt-5 flex flex-col gap-2">
            <a href={whatsappLink(`Hi Siddhi Info, I'd like something similar to your ${p.category} demo.`)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="size-4" /> Build something similar
            </a>
            <Link href={`/services/${p.service}/`} className="btn btn-outline">View service details</Link>
          </div>
        </div>
      </div>
    </dialog>
  );
}
