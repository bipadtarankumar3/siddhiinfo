import ColorIcon from "./ColorIcon";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { steps } from "@/lib/data";

const colors = ["#0E7490", "#B45309", "#4338CA", "#16865B"];

// Four-step process: horizontal timeline on desktop, vertical on mobile.
export default function ProcessSteps({ title = "From idea to launch", text, className = "" }) {
  return (
    <section className={`container-x py-16 sm:py-20 ${className}`} aria-labelledby="process-title">
      <SectionHead
        id="process-title"
        eyebrow="How we work"
        title={title}
        text={text ?? "Four clear stages. You always know what's happening, what it costs and what you need to provide."}
      />
      <ol className="relative mt-12 grid gap-6 lg:grid-cols-4 lg:gap-5">
        {/* timeline line */}
        <span aria-hidden="true" className="absolute left-6 top-6 h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-teal-500 via-indigo-500 to-green-600 lg:left-0 lg:top-6 lg:h-0.5 lg:w-full lg:bg-gradient-to-r" />
        {steps.map((st, i) => (
          <Reveal as="li" key={st.title} delay={i * 0.08} className="relative flex gap-4 lg:block">
            <span
              className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full text-lg font-extrabold text-white shadow-lg ring-4 ring-white"
              style={{ background: colors[i] }}
            >
              {i + 1}
            </span>
            <div className="card flex-1 p-5 lg:mt-5">
              <ColorIcon name={st.icon} className="size-11" />
              <h3 className="mt-3 text-lg font-bold text-ink">{st.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-600">{st.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
