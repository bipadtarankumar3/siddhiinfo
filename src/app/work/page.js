import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHead from "@/components/SectionHead";
import ProjectCard from "@/components/work/ProjectCard";
import WorkFilter from "@/components/work/WorkFilter";
import JsonLd from "@/components/JsonLd";
import { portfolio, workFilters } from "@/lib/data";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Our Work — Live Products and Industry Demonstrations",
  description:
    "Live products in the Siddhi Info portfolio — AskReview, PrizeWheel, Vyapari Chat and Magic Scratch — and clearly labelled industry demonstrations for e-commerce, restaurants, clinics, coaching, NGOs and business software.",
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
        title="Real projects. Practical solutions."
        text={`${live.length} live products you can open today, and ${concepts.length} industry demonstrations — illustrative designs with fictional brands and sample data, each stamped “Concept demo”.`}
        crumbs={[{ label: "Our Work", href: "/work/" }]}
      />

      <section className="bg-slate-50 py-14 sm:py-20" aria-labelledby="work-title">
        <div className="container-x">
          <SectionHead
            id="work-title"
            eyebrow="Portfolio"
            title="Browse by type"
            text="Live products are working platforms. Concept demos are not client projects — names, prices and figures in them are made up. Enterprise case studies will be published here only with client permission."
          />
          <div className="mt-10">
            <WorkFilter filters={workFilters}>
              {[...live, ...concepts].map((p, i) => (
                <div key={p.slug} data-tags={(p.tags || []).join(" ")}>
                  <ProjectCard p={p} i={i} dark={false} />
                </div>
              ))}
            </WorkFilter>
          </div>
        </div>
      </section>

      <CtaBanner title="Have something similar in mind?" />
    </>
  );
}
