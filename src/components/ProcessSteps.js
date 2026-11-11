import ColorIcon from "./ColorIcon";
import SectionHead from "./SectionHead";
import { steps } from "@/lib/data";

const stepColors = ["#0E7490", "#B45309", "#4338CA", "#C2410C", "#BE185D"];

export default function ProcessSteps({ title = "How a project works", text, className = "" }) {
  return (
    <section className={`container-x py-16 sm:py-20 ${className}`} aria-labelledby="process-title">
      <SectionHead
        id="process-title"
        eyebrow="Process"
        title={title}
        text={text ?? "Five clear stages. You always know what's happening, what it costs and what you need to provide."}
      />
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((st, i) => (
          <li key={st.title} className="card accent-top relative p-5" style={{ borderTopColor: stepColors[i % stepColors.length] }}>
            <div className="flex items-center justify-between gap-3">
              <ColorIcon name={st.icon} className="size-12" />
              <span className="grid size-9 place-items-center rounded-full text-sm font-extrabold text-white" style={{ background: stepColors[i % stepColors.length] }}>{i + 1}</span>
            </div>
            <h3 className="mt-3 text-lg font-bold text-ink">{st.title}</h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-600">{st.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
