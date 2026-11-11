import { CheckCheck } from "lucide-react";
import ColorIcon from "@/components/ColorIcon";

/*
  Compact product cards floated over the hero photo: a WhatsApp order with UPI
  payment, a sales summary and an invoice notification. Figures are SAMPLE DATA
  (badged). Positioned around the edges so the people in the photo stay visible.
  Decorative — hidden from screen readers.
*/
export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative ml-auto h-[34rem] w-full max-w-[34rem] select-none">
      {/* Sales summary card — top right */}
      <div className="absolute right-0 top-2 w-60 rounded-2xl bg-white/95 p-4 text-slate-700 shadow-[0_20px_40px_-18px_rgb(7_22_54/0.55)] ring-1 ring-white backdrop-blur">
        <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <ColorIcon name="IndianRupee" className="size-7" /> UPI received today
        </span>
        <p className="mt-2 text-2xl font-extrabold tracking-tight text-ink">₹18,450</p>
        <svg viewBox="0 0 200 50" className="mt-1 h-10 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hv2-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1b86d0" stopOpacity=".25" />
              <stop offset="1" stopColor="#1b86d0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 40 C20 38 30 30 45 32 S75 22 90 25 S120 34 135 26 S165 10 180 14 L200 8 L200 50 L0 50Z" fill="url(#hv2-area)" />
          <path d="M0 40 C20 38 30 30 45 32 S75 22 90 25 S120 34 135 26 S165 10 180 14 L200 8" fill="none" stroke="#1668b5" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div className="mt-2 flex items-center justify-between text-[11px]">
          <span className="text-slate-500">24 orders · 21 GST invoices</span>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 font-bold text-amber-800">Sample</span>
        </div>
      </div>

      {/* Phone: WhatsApp order — bottom left */}
      <div className="absolute bottom-0 left-0 w-52 rounded-[1.9rem] bg-[#0b1020] p-1.5 shadow-[0_30px_50px_-20px_rgb(7_22_54/0.7)]">
        <div className="overflow-hidden rounded-[1.5rem] bg-[#efeae2]">
          <div className="flex items-center gap-2 bg-[#075e54] px-3 py-2.5 text-white">
            <ColorIcon name="Store" className="size-7" />
            <div className="leading-tight">
              <p className="text-xs font-bold">Your Store</p>
              <p className="text-[10px] text-white/70">Business account</p>
            </div>
          </div>
          <div className="space-y-2 p-2.5 text-[11px] leading-snug text-slate-800">
            <p className="ml-auto w-[88%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 shadow-sm">2 kg atta + 1 L oil. Deliver today?</p>
            <div className="w-[92%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 shadow-sm">
              Order #1042 confirmed ✅
              <span className="mt-1.5 flex items-center justify-center rounded-md bg-[#075e54] py-1.5 text-[11px] font-bold text-white">Pay ₹1,180 via UPI</span>
            </div>
            <p className="ml-auto flex w-fit items-center gap-1 rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 shadow-sm">
              Paid <CheckCheck className="size-3.5 text-sky-500" />
            </p>
          </div>
        </div>
      </div>

      {/* Invoice notification — bottom right */}
      <div className="absolute bottom-16 right-0 flex w-64 items-center gap-3 rounded-2xl bg-white/95 p-3 text-slate-700 shadow-[0_20px_40px_-18px_rgb(7_22_54/0.55)] ring-1 ring-white backdrop-blur">
        <ColorIcon name="ReceiptIndianRupee" className="size-10" />
        <div className="leading-tight">
          <p className="text-sm font-bold text-ink">GST invoice sent</p>
          <p className="text-xs text-slate-500">#1042 on WhatsApp · synced to Tally</p>
        </div>
      </div>
    </div>
  );
}
