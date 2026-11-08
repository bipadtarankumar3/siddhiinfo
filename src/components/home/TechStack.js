import { Cloud } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20" aria-labelledby="tech-title">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p data-reveal className="eyebrow eyebrow-dark">Technology stack</p>
          <h2 data-reveal id="tech-title" className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Built with modern, <span className="text-gradient-light">proven technology</span>
          </h2>
          <p data-reveal className="mt-4 text-slate-300">We pick the right tools for your budget and goals — secure, fast and easy to maintain.</p>
        </div>
        <ul className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {techStack.map((t, i) => (
            <li
              key={t.name}
              data-reveal
              style={{ "--reveal-delay": `${(i % 7) * 50}ms` }}
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white/[0.04] px-3 py-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.08] hover:ring-white/25"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-white p-2.5 shadow-lg transition group-hover:scale-110">
                {t.icon ? (
                  <BrandIcon name={t.icon} className="size-full" />
                ) : (
                  <Cloud className="size-full text-[#ff9900]" aria-hidden="true" />
                )}
              </span>
              <span className="text-center text-xs font-semibold text-slate-200 sm:text-sm">{t.name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-slate-500">Brand names and logos belong to their respective owners.</p>
      </div>
    </section>
  );
}
