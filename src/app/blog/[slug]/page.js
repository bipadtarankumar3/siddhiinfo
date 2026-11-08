import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { posts, getPost } from "@/lib/blog";
import { absoluteUrl, site, pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMeta({
    title: p.title,
    description: p.description,
    path: `/blog/${p.slug}/`,
    type: "article",
    publishedTime: p.date,
    tags: p.tags,
  });
}

const fmt = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function PostPage({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const more = posts.filter((o) => o.slug !== p.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          dateModified: p.date,
          mainEntityOfPage: absoluteUrl(`/blog/${p.slug}/`),
          image: absoluteUrl("/opengraph-image.png"),
          inLanguage: "en-IN",
          keywords: p.tags.join(", "),
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@id": absoluteUrl("/#organization") },
        }}
      />
      <PageHero
        eyebrow={p.tags.join(" · ")}
        title={p.title}
        crumbs={[
          { label: "Blog", href: "/blog/" },
          { label: p.title, href: `/blog/${p.slug}/` },
        ]}
      >
        <p className="mt-5 text-sm text-slate-500">
          <time dateTime={p.date}>{fmt(p.date)}</time> · {p.readMinutes} min read · By {site.name}
        </p>
      </PageHero>

      <article className="container-x py-12 sm:py-16">
        <div className="prose-post mx-auto max-w-3xl text-slate-700">
          <p className="!text-xl !leading-relaxed text-slate-600">{p.description}</p>
          {p.body.map((b, i) =>
            typeof b === "string" ? (
              <p key={i}>{b}</p>
            ) : b.h ? (
              <h2 key={i}>{b.h}</h2>
            ) : (
              <ul key={i}>{b.list.map((li) => <li key={li}>{li}</li>)}</ul>
            )
          )}
        </div>
      </article>

      <section className="container-x pb-4">
        <div className="mx-auto max-w-3xl border-t border-slate-200 pt-10">
          <h2 className="text-xl font-bold text-ink">Keep reading</h2>
          <ul className="mt-5 space-y-3">
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/blog/${m.slug}/`} className="font-semibold text-brand-600 hover:underline">{m.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title="Want us to do this for your business?" />
    </>
  );
}
