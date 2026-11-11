import Skyline, { SkylineBackdrop } from "@/components/india/Skyline";
import ColorIcon from "@/components/ColorIcon";

/*
  Homepage hero illustration: a daytime Indian skyline (Taj Mahal, India Gate,
  Qutub Minar, Howrah Bridge at sunrise, Victoria Memorial, Charminar, Lotus
  Temple) with service tags linked to the city by dotted lines.

  Desktop (lg+): fills the space left in the hero. The drawing, lines and tags
  live in ONE svg with preserveAspectRatio "meet", so the whole scene always
  fits (never pushed below the fold) and tags stay aligned at any size.
  A stretched backdrop continues the sky and river to both screen edges.
  Below lg: a fixed-height strip cropped around the Howrah Bridge.
  Decorative.
*/
const TOP = 80;
const W = 1600;
const H = 300 + TOP;
const FONT = 21;
const CHIP_H = 46;

// [label, icon, chipCenterX, chipCenterY, anchorX, anchorY]
const tags = [
  ["Websites", "Globe", 205, 52, 205, 170],
  ["WhatsApp orders", "MessageCircle", 470, 104, 440, 218],
  ["UPI payments", "IndianRupee", 800, 44, 800, 196],
  ["GST billing", "ReceiptIndianRupee", 1150, 62, 1150, 168],
  ["CRM & automation", "LayoutDashboard", 1400, 110, 1490, 236],
];

function Tag({ label, icon, cx, cy }) {
  const w = 62 + label.length * FONT * 0.56;
  const x = cx - w / 2;
  const y = cy - CHIP_H / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={CHIP_H} rx={CHIP_H / 2} fill="#fff" stroke="#d8eefc" strokeWidth="1.5" filter="url(#tag-shadow)" />
      <ColorIcon name={icon} x={x + 6} y={y + 6} width={CHIP_H - 12} height={CHIP_H - 12} className="" />
      <text x={x + CHIP_H + 4} y={cy + FONT * 0.36} fontSize={FONT} fontWeight="600" fill="#061430">{label}</text>
    </g>
  );
}

export default function HeroIllustration() {
  return (
    <div aria-hidden="true" className="relative mt-6 w-full select-none md:mt-8 lg:mt-4 lg:min-h-52 lg:flex-1">
      {/* phones & tablets: cropped strip */}
      <Skyline variant="day" top={TOP} uid="m" className="block h-52 w-full sm:h-60 lg:hidden" />

      {/* desktop: whole scene fitted to the remaining hero height */}
      <div className="absolute inset-0 hidden lg:block">
        <SkylineBackdrop variant="day" top={TOP} className="absolute inset-0 h-full w-full" />
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax meet" className="absolute inset-0 h-full w-full">
          <defs>
            <filter id="tag-shadow" x="-20%" y="-40%" width="140%" height="200%">
              <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#1d5ea6" floodOpacity=".22" />
            </filter>
          </defs>
          <Skyline variant="day" top={TOP} uid="d" x="0" y="0" width={W} height={H} />
          {tags.map(([label, , cx, cy, ax, ay]) => (
            <g key={label}>
              <path d={`M${cx} ${cy + CHIP_H / 2}L${ax} ${ay}`} stroke="#1d5ea6" strokeOpacity=".45" strokeWidth="2" strokeDasharray="3 6" strokeLinecap="round" />
              <circle cx={ax} cy={ay} r="5" fill="#fff" stroke="#1d5ea6" strokeWidth="2.5" />
            </g>
          ))}
          {tags.map(([label, icon, cx, cy]) => <Tag key={label} label={label} icon={icon} cx={cx} cy={cy} />)}
        </svg>
      </div>
    </div>
  );
}
