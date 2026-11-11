import Lotus from "./india/Lotus";

export default function SectionHead({ eyebrow, title, text, center = true, id, dark = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className={`eyebrow ${dark ? "eyebrow-dark" : "!text-saffron-700"}`}>{eyebrow}</p>}
      <h2 id={id} className={`section-title mt-3 ${dark ? "!text-white" : ""}`}>{title}</h2>
      <Lotus className={`mt-3 ${center ? "mx-auto" : ""}`} />
      {text && <p className={`mt-3 text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}
