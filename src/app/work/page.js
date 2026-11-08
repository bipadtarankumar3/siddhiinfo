import { BadgeCheck, Lightbulb } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHead from "@/components/SectionHead";
import ProjectCard from "@/components/work/ProjectCard";
import JsonLd from "@/components/JsonLd";
import { portfolio } from "@/lib/data";
import { absoluteUrl, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Our Work — Live Projects & Website Demos",
  description:
    "See platforms built by Siddhi Info — AskReview, PrizeWheel, Vyapari Chat and Magic Scratch — plus concept demos for e-commerce, restaurants, clinics, coaching centres, NGOs and CRM dashboards.",
  path: "/work/",
});

export default function WorkPage() {
  const live = portfolio.filter((p) => !p.concept);
  const concepts = portfolio.filter((p) => p.concept);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Projects developed by Siddhi Info",
          itemListElement: live.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "WebApplication", name: p.name, url: p.liveUrl, applicationCategory: "BusinessApplication", creator: { "@id": absoluteUrl("/#organization") } },
          })),
        }}
      />
      <PageHero
        eyebrow="Our work"
        title="Turning business ideas into digital experiences"
        text="Live platforms we have designed, developed and launched — and concept demos showing what we can build for your business."
        crumbs={[{ label: "Our Work", href: "/work/" }]}
      >
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-mint-300">
            <BadgeCheck className="size-4" aria-hidden="true" /> {live.length} live projects
          </span>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-slate-200">
            <Lightbulb className="size-4 text-mint-300" aria-hidden="true" /> {concepts.length} concept demos
          </span>
        </div>
      </PageHero>

      <section className="bg-lavender-mesh py-16 sm:py-24" aria-labelledby="live-title">
        <div className="container-x">
          <SectionHead
            id="live-title"
            eyebrow="Live projects"
            title={<>Platforms we have <span className="text-gradient">built &amp; launched</span></>}
            text="Real products running today. Click “View Project” for a closer look, or visit the live site."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {live.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} dark={false} />)}
          </div>
        </div>
      </section>

      <section className="bg-hero relative overflow-hidden py-16 text-white sm:py-24" aria-labelledby="concept-title">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <div className="container-x relative">
          <SectionHead
            dark
            id="concept-title"
            eyebrow="Concept demos"
            title={<>What we can build <span className="text-gradient-light">for your business</span></>}
            text="Illustrative designs with fictional brand names — e-commerce, restaurants, coaching, healthcare, NGOs and business software."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {concepts.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
          </div>
        </div>
      </section>

      <CtaBanner title="Have an idea like these? Let’s build it." />
    </>
  );
}
