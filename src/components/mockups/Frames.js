// Device frames. The screen element is a size container; the mock inside
// sizes itself in `em` relative to the screen width (see .mock-* utilities).

export function BrowserFrame({ url, children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-2xl shadow-brand-900/15 ${className}`}>
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto flex min-w-0 max-w-[70%] items-center gap-1.5 rounded-md bg-white px-3 py-0.5 text-[11px] text-slate-500 ring-1 ring-slate-200">
          <svg viewBox="0 0 16 16" className="size-2.5 shrink-0 text-mint-600" aria-hidden="true"><path fill="currentColor" d="M5 7V5a3 3 0 0 1 6 0v2h1v7H4V7h1Zm1.5 0h3V5a1.5 1.5 0 0 0-3 0v2Z" /></svg>
          <span className="truncate">{url}</span>
        </span>
        <span className="w-10" aria-hidden="true" />
      </div>
      <div className="mock-screen aspect-[16/10]">
        <div className="mock-desktop relative h-full">{children}</div>
      </div>
    </div>
  );
}

export function PhoneFrame({ children, className = "", ...rest }) {
  return (
    <div {...rest} className={`rounded-[18%/8.5%] bg-[#0b1035] p-[3.5%] shadow-2xl shadow-black/30 ring-1 ring-white/10 ${className}`}>
      <div className="mock-screen relative aspect-[9/19] rounded-[14%/6.6%] bg-white">
        <span aria-hidden="true" className="absolute left-1/2 top-[1.6%] z-10 h-[2.6%] w-[30%] -translate-x-1/2 rounded-full bg-[#0b1035]" />
        <div className="mock-mobile h-full pt-[2.2em]">{children}</div>
      </div>
    </div>
  );
}

export function LaptopFrame({ children, className = "" }) {
  return (
    <div className={className}>
      <div className="rounded-t-[2.2%/3.5%] bg-[#0b1035] p-[1.6%] pb-[2%] shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <div className="mock-screen aspect-[16/10] rounded-[0.6%] bg-white">
          <div className="mock-desktop h-full">{children}</div>
        </div>
      </div>
      <div className="relative mx-[-6%] h-[0.9em] rounded-b-[40%_100%] bg-gradient-to-b from-slate-300 to-slate-400 sm:h-4">
        <span className="absolute left-1/2 top-0 h-1/2 w-[14%] -translate-x-1/2 rounded-b-md bg-slate-400/70" />
      </div>
    </div>
  );
}
