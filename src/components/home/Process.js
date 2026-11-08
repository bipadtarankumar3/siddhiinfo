import SectionHead from "@/components/SectionHead";
import {
  IconChat,
  IconPencilRuler,
  IconCode,
  IconClipboard,
  IconRocket,
  IconTrending,
} from "@/components/india/ColoredIcons";

const steps = [
  {
    id: "understand",
    Icon: IconChat,
    title: "Understand your business",
    hi: "समझना",
    text: "A free call or WhatsApp chat to understand your goals, customers and budget — no jargon.",
  },
  {
    id: "plan",
    Icon: IconPencilRuler,
    title: "Plan & design",
    hi: "योजना",
    text: "Clear scope, fixed quote and timeline in writing, then designs you can review on your phone.",
  },
  {
    id: "build",
    Icon: IconCode,
    title: "Development & integration",
    hi: "निर्माण",
    text: "Our developers build your solution and connect payments, WhatsApp, Google and other tools.",
  },
  {
    id: "test",
    Icon: IconClipboard,
    title: "Testing & your review",
    hi: "जाँच",
    text: "We test on real phones and browsers. You review everything and request changes.",
  },
  {
    id: "launch",
    Icon: IconRocket,
    title: "Launch & deployment",
    hi: "लॉन्च",
    text: "We go live on your domain, set up analytics and train your team.",
  },
  {
    id: "support",
    Icon: IconTrending,
    title: "Support & growth",
    hi: "सपोर्ट",
    text: "Updates, fixes and new features as your business grows — a real person on WhatsApp.",
  },
];

const stepColors = [
  "from-green-500/10 to-green-500/5 ring-green-200",
  "from-purple-500/10 to-pink-500/5 ring-purple-200",
  "from-blue-500/10 to-indigo-500/5 ring-blue-200",
  "from-teal-500/10 to-emerald-500/5 ring-teal-200",
  "from-orange-500/10 to-amber-500/5 ring-orange-200",
  "from-lime-500/10 to-green-500/5 ring-lime-200",
];

const badgeColors = [
  "bg-green-500",
  "bg-purple-500",
  "bg-blue-600",
  "bg-teal-500",
  "bg-orange-500",
  "bg-lime-500",
];

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
      <ol className="relative mt-16 grid gap-0 md:grid-cols-2 md:gap-x-10 xl:grid-cols-6 xl:gap-5">
        {/* desktop connector */}
        <div aria-hidden="true" className="animate-gradient absolute left-[8%] right-[8%] top-9 hidden h-1 rounded-full bg-[linear-gradient(90deg,var(--color-brand-500),var(--color-electric-500),var(--color-saffron-500),var(--color-brand-500))] xl:block" />
        {steps.map((s, i) => (
          <li
            key={s.id}
            data-reveal
            style={{ "--reveal-delay": `${i * 90}ms` }}
            className="relative flex gap-5 pb-10 last:pb-0 md:pb-8 xl:flex-col xl:items-center xl:gap-0 xl:pb-0 xl:text-center"
          >
            {/* mobile connector */}
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="absolute left-9 top-20 h-[calc(100%-4rem)] w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-300 to-electric-300 md:hidden" />
            )}
            {/* icon bubble */}
            <span
              className={`relative z-10 grid size-18 shrink-0 place-items-center rounded-2xl bg-gradient-to-br shadow-xl shadow-brand-900/10 ring-1 ${stepColors[i]}`}
            >
              <s.Icon className="size-14 drop-shadow" />
              <span className={`absolute -right-2 -top-2 grid size-6 place-items-center rounded-full text-xs font-bold text-white ring-2 ring-white ${badgeColors[i]}`}>
                {i + 1}
              </span>
            </span>
            <div className="pt-1 xl:mt-5 xl:pt-0">
              <p className="text-xs font-semibold text-mint-700">{s.hi}</p>
              <h3 className="mt-0.5 font-bold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
