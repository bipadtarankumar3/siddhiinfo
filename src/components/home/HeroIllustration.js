import Skyline from "@/components/india/Skyline";
import ColorIcon from "@/components/ColorIcon";

/*
  Homepage hero illustration: a daytime Indian skyline (Taj Mahal, India Gate,
  Qutub Minar, Howrah Bridge at sunrise, Victoria Memorial, Charminar, Lotus
  Temple) with service tags floating above, linked to the city by dotted lines.
  Coordinates are in the skyline's viewBox (1600 × 380). Decorative.
*/
const TOP = 80;
const W = 1600;
const H = 300 + TOP;

// [label, icon, chipX, chipY, anchorX, anchorY]
const tags = [
  ["Websites", "Globe", 205, 52, 205, 170],
  ["WhatsApp orders", "MessageCircle", 470, 104, 440, 218],
  ["UPI payments", "IndianRupee", 800, 44, 800, 196],
  ["GST billing", "ReceiptIndianRupee", 1150, 62, 1150, 168],
  ["CRM & automation", "LayoutDashboard", 1400, 110, 1490, 236],
];

const pct = (v, total) => `${(v / total) * 100}%`;

export default function HeroIllustration() {
  return (
    <div aria-hidden="true" className="relative mt-6 h-52 w-full select-none sm:h-64 md:mt-8 md:h-auto md:aspect-[1600/380] lg:mt-4">
      <Skyline variant="day" top={TOP} className="absolute inset-0 block h-full w-full" />

      {/* connector lines (same viewBox, so they line up with the drawing) */}
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax slice" className="absolute inset-0 hidden h-full w-full lg:block">
        {tags.map(([label, , cx, cy, ax, ay]) => (
          <g key={label}>
            <path d={`M${cx} ${cy + 14}L${ax} ${ay}`} stroke="#1d5ea6" strokeOpacity=".45" strokeWidth="2" strokeDasharray="3 6" strokeLinecap="round" />
            <circle cx={ax} cy={ay} r="5" fill="#fff" stroke="#1d5ea6" strokeWidth="2.5" />
          </g>
        ))}
      </svg>

      {/* service tags */}
      <ul className="hidden lg:block">
        {tags.map(([label, icon, cx, cy]) => (
          <li
            key={label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-ink shadow-[0_10px_25px_-12px_rgb(29_94_166/0.55)] ring-1 ring-brand-100"
            style={{ left: pct(cx, W), top: pct(cy, H) }}
          >
            <ColorIcon name={icon} className="size-8" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
