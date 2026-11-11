import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHead from "@/components/SectionHead";
import ProjectCard from "@/components/work/ProjectCard";
import JsonLd from "@/components/JsonLd";
import { portfolio } from "@/lib/data";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Our Work — Live Products and Concept Demos",
  description:
    "Live products in the Siddhi Info portfolio — AskReview, PrizeWheel, Vyapari Chat and Magic Scratch — and clearly labelled concept demos for e-commerce, restaurants, clinics, coaching, NGOs and business software.",
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
          name: "Live products in the Siddhi Info portfolio",
          itemListElement: live.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "WebApplication", name: p.name, url: p.liveUrl, applicationCategory: "BusinessApplication" },
          })),
        }}
      />
      <PageHero
        eyebrow="Our work"
        title="Live products and concept demos"
        text="Two separate lists: working products you can open today, and concept demos — illustrative designs with fictional brands and sample data that show what we can build."
        crumbs={[{ label: "Our Work", href: "/work/" }]}
      >
        <nav aria-label="Work sections" className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#live" className="btn btn-light">Live products ({live.length})</a>
          <a href="#concepts" className="btn btn-glass">Concept demos ({concepts.length})</a>
        </nav>
      </PageHero>

      <section id="live" className="scroll-mt-24 bg-haldi py-16 sm:py-20" aria-labelledby="live-title">
        <div className="container-x">
          <SectionHead
            id="live-title"
            eyebrow="Live products"
            title="Products running today"
            text="Open the live sites to see them working. Results and client details are published only with evidence and permission."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {live.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} dark={false} />)}
          </div>
        </div>
      </section>

      <section id="concepts" className="scroll-mt-24 py-16 sm:py-20" aria-labelledby="concept-title">
        <div className="container-x">
          <SectionHead
            id="concept-title"
            eyebrow="Concept demos"
            title="What we could build for your business"
            text="These are not client projects. Brand names, people, prices, orders and figures in these previews are fictional sample data, and each preview is stamped “Concept demo”."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {concepts.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} dark={false} />)}
          </div>
        </div>
      </section>

      <CtaBanner title="Have something similar in mind?" />
    </>
  );
}
