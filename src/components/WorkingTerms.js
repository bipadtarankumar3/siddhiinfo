import ColorIcon from "./ColorIcon";
import SectionHead from "./SectionHead";
import { workingTerms } from "@/lib/data";

export default function WorkingTerms({ title = "Working with us", className = "bg-peacock" }) {
  return (
    <section className={`py-16 sm:py-20 ${className}`} aria-labelledby="working-title">
      <div className="container-x">
        <SectionHead id="working-title" eyebrow="Clear terms" title={title} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workingTerms.map((w) => (
            <div key={w.title} className="card p-6">
              <ColorIcon name={w.icon} className="size-12" />
              <h3 className="mt-3 font-bold text-ink">{w.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-600">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
