import Link from "next/link";
import { ArrowRight, BadgeCheck, Info } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import ProjectCard from "@/components/work/ProjectCard";
import { homePortfolio, portfolio } from "@/lib/data";

export default function Portfolio() {
  const liveCount = portfolio.filter((p) => !p.concept).length;
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
          text="Live platforms we have built and launched — plus concept demos of what we can build for your business."
        />
        <div data-reveal className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2 text-xs font-medium sm:text-sm">
          <span className="flex items-center gap-2 rounded-full bg-mint-400/10 px-4 py-2 text-mint-300 ring-1 ring-mint-400/25">
            <BadgeCheck className="size-4 shrink-0" aria-hidden="true" /> {liveCount} live projects you can visit today
          </span>
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-slate-200 ring-1 ring-white/15">
            <Info className="size-4 shrink-0 text-saffron-300" aria-hidden="true" /> Concept demos use fictional brand names
          </span>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {homePortfolio.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
        </div>

        <div data-reveal className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <Link href="/work/" className="btn btn-light">
            See all our work <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/contact/" className="btn btn-glass">Discuss your project</Link>
        </div>
      </div>
    </section>
  );
}
