import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { portfolio, ownershipLabel } from "@/lib/data";

// Compact grid of live, verifiable products with links to the working sites.
export default function LiveProducts({ limit }) {
  const live = portfolio.filter((p) => !p.concept).slice(0, limit);
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {live.map((p) => (
        <li key={p.slug} className="card flex flex-col overflow-hidden">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100">
            <Image
              src={p.images.desktop}
              alt={`Screenshot of the ${p.name} homepage`}
              fill
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-mint-700">
              <BadgeCheck className="size-4" aria-hidden="true" /> Live product
              {p.ownership && <span className="text-slate-500">· {ownershipLabel[p.ownership]}</span>}
            </p>
            <h3 className="mt-1 text-lg font-bold text-ink">{p.name}</h3>
            <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-600">{p.category}</p>
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand-700 hover:underline">
              Visit {p.url} <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ConceptNote() {
  return (
    <p className="mt-6 text-center text-sm text-slate-600">
      We also show <Link href="/work/#concepts" className="font-semibold text-brand-700 underline">concept demos</Link> — clearly labelled designs with fictional brands and sample data.
    </p>
  );
}
