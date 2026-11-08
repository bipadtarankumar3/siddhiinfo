import Image from "next/image";

export default function Logo({ light = false, priority = false, size = 40 }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/logo.webp" alt="" width={size} height={size} priority={priority} className="shrink-0" />
      <span className="leading-none">
        <span className={`block text-[1.2rem] font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
          Siddhi <span className={light ? "text-gradient-light" : "text-gradient"}>Info</span>
        </span>
        <span className={`mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${light ? "text-slate-300" : "text-slate-500"}`}>
          Digital Solutions
        </span>
      </span>
    </span>
  );
}
