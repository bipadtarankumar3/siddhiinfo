import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { steps } from "@/lib/data";

// Horizontal timeline on desktop, vertical on mobile.
export default function Process() {
  return (
    <section className="container-x py-20 sm:py-28" aria-labelledby="process-title">
      <SectionHead
        id="process-title"
        eyebrow="Our development process"
        title={<>From your idea to a <span className="text-gradient">finished digital product</span></>}
        text="A simple, transparent journey — you always know what is happening and what comes next."
      />
      <ol className="relative mt-16 grid gap-0 lg:grid-cols-6 lg:gap-5">
        {/* desktop connector */}
        <div aria-hidden="true" className="animate-gradient absolute left-[8%] right-[8%] top-8 hidden h-1 rounded-full bg-[linear-gradient(90deg,var(--color-brand-500),var(--color-electric-500),var(--color-saffron-500),var(--color-brand-500))] lg:block" />
        {steps.map((s, i) => (
          <li key={s.title} data-reveal style={{ "--reveal-delay": `${i * 90}ms` }} className="relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center">
            {/* mobile connector */}
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="absolute left-8 top-16 h-[calc(100%-4rem)] w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-300 to-electric-300 lg:hidden" />
            )}
            <span className="relative z-10 grid size-16 shrink-0 place-items-center rounded-2xl bg-white shadow-xl shadow-brand-900/10 ring-1 ring-brand-100">
              <span className="icon-tile size-12"><Icon name={s.icon} className="size-6" /></span>
              <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-saffron-500 text-xs font-bold text-white ring-2 ring-white">{i + 1}</span>
            </span>
            <div className="pt-1 lg:mt-5 lg:pt-0">
              <p className="text-xs font-semibold text-saffron-600">{s.hi}</p>
              <h3 className="mt-0.5 font-bold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
