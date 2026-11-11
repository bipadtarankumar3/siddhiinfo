import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { posts, blogCategories, categorySlug } from "@/lib/blog";

export const metadata = pageMeta({
  title: "Resources — Guides on Websites, Software, AI & Cloud for Indian Businesses",
  description:
    "Practical guides for Indian business owners: website costs, e-commerce, inventory and CRM software, WhatsApp and AI automation, NGO digitisation and moving to AWS.",
  path: "/blog/",
});

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const used = blogCategories.filter((c) => posts.some((p) => p.category === c));
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical guides for business owners"
        text="Short, useful articles on websites, business software, automation and cloud — written for busy owners, not tech experts."
        crumbs={[{ label: "Resources", href: "/blog/" }]}
      >
        <nav aria-label="Categories" className="mt-8 flex flex-wrap gap-2">
          {used.map((c) => (
            <a key={c} href={`#${categorySlug(c)}`} className="inline-flex min-h-10 items-center rounded-full bg-white/10 px-3.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20">
              {c}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="container-x py-12 sm:py-16" aria-labelledby="latest-title">
        <h2 id="latest-title" className="section-title">Latest articles</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.slice(0, 3).map((p) => <PostCard key={p.slug} p={p} />)}
        </div>
      </section>

      {used.map((c) => (
        <section key={c} id={categorySlug(c)} className="container-x scroll-mt-24 border-t border-slate-200 py-12" aria-labelledby={`${categorySlug(c)}-title`}>
          <h2 id={`${categorySlug(c)}-title`} className="text-2xl font-extrabold text-ink">{c}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.filter((p) => p.category === c).map((p) => <PostCard key={p.slug} p={p} />)}
          </div>
        </section>
      ))}
      <CtaBanner />
    </>
  );
}

function PostCard({ p }) {
  return (
    <article className="card card-hover group relative flex flex-col p-7">
      <p className="text-xs font-bold uppercase tracking-wide text-saffron-700">{p.category}</p>
      <h3 className="mt-2 text-lg font-bold leading-snug text-ink">
        <Link href={`/blog/${p.slug}/`} className="after:absolute after:inset-0">{p.title}</Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <time dateTime={p.date}>{formatDate(p.date)} · {p.readMinutes} min read</time>
        <ArrowRight className="size-4 text-brand-600 transition group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </article>
  );
}
