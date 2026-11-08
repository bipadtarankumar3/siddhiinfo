export default function SectionHead({ eyebrow, title, text, center = true, id, dark = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && <p data-reveal className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</p>}
      <h2 data-reveal id={id} className={`section-title mt-4 ${dark ? "!text-white" : ""}`}>{title}</h2>
      {text && <p data-reveal className={`mt-4 text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}
