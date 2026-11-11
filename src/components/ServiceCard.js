import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ColorIcon from "./ColorIcon";

// Top border colour per service accent (Indian palette)
export const accentBorder = {
  indigo: "border-t-indigo-500", saffron: "border-t-orange-500", blue: "border-t-blue-500", violet: "border-t-violet-500",
  emerald: "border-t-emerald-500", green: "border-t-green-500", rose: "border-t-pink-500", sky: "border-t-sky-500", slate: "border-t-teal-500",
};

export default function ServiceCard({ s, price }) {
  return (
    <Link
      href={`/services/${s.slug}/`}
      className={`card card-hover accent-top group flex h-full flex-col p-6 ${accentBorder[s.accent] ?? "border-t-orange-500"}`}
    >
      <ColorIcon name={s.icon} className="size-14 transition group-hover:scale-105" />
      {s.hi && <p className="mt-4 text-sm font-semibold text-saffron-700" lang="hi">{s.hi}</p>}
      <h3 className={`${s.hi ? "mt-0.5" : "mt-4"} text-lg font-bold leading-snug text-ink`}>{s.title}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-slate-600">{s.short}</p>
      <span className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-amber-200 pt-4 text-sm">
        <span className="rounded-full bg-amber-50 px-2.5 py-1 font-bold text-amber-900 ring-1 ring-amber-200">{price ? `From ${price}` : "Custom quote"}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-brand-700">
          Details <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}
