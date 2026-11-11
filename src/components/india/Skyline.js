/*
  Illustrated Indian skyline — Taj Mahal, India Gate, Qutub Minar, Howrah
  Bridge over the Hooghly, Victoria Memorial, Charminar, Lotus Temple.
  Two palettes:
    variant="night" → sunset version used in the footer
    variant="day"   → bright sunrise version in logo blues for the homepage hero
  `top` adds extra sky above the landmarks (in viewBox units).
  Pure SVG, decorative.
*/
const palettes = {
  night: {
    sky: [["0", "#071636", 0], [".25", "#0d1a4a", 0.6], [".5", "#2a2470", 1], [".72", "#9d2a73", 1], [".88", "#f0603a", 1], ["1", "#fbbf24", 1]],
    ink: "#0a1a40", ink2: "#13295e", glow: "#fbbf24", far: "#3a2a6e", farOpacity: 0.55,
    river: ["#1b2d66", "#040d22"], ripple: "#f472b6", bird: "#1e1b4b", ground: "#0a1a40",
  },
  day: {
    sky: [["0", "#f4f9ff", 0], [".3", "#f4f9ff", 1], [".55", "#e4f1fc", 1], [".85", "#fdf0d8", 1], ["1", "#fde3b8", 1]],
    ink: "#1d5ea6", ink2: "#dcecfa", glow: "#fbbf24", far: "#a9cbea", farOpacity: 0.6,
    river: ["#9fd3f1", "#d8eefb"], ripple: "#ffffff", bird: "#64748b", ground: "#174c8a",
  },
};

// Howrah Bridge top chord: (x, y) points of the cantilever truss
const chord = [[612, 236], [700, 118], [800, 176], [900, 118], [988, 236]];
const DECK = 236;
function chordY(x) {
  for (let i = 0; i < chord.length - 1; i++) {
    const [x1, y1] = chord[i];
    const [x2, y2] = chord[i + 1];
    if (x >= x1 && x <= x2) return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
  }
  return DECK;
}
const lacing = [];
for (let x = 624; x <= 976; x += 22) {
  const y = chordY(x);
  lacing.push(`M${x} ${y}V${DECK}`);
  const nx = Math.min(x + 22, 988);
  lacing.push(`M${x} ${y}L${nx} ${DECK}`);
}

// Low background city between landmarks (deterministic)
const far = Array.from({ length: 64 }, (_, i) => {
  const x = i * 25;
  const h = 18 + ((i * 37) % 7) * 7 + ((i * 13) % 3) * 5;
  return { x, h, w: 18 + ((i * 11) % 3) * 4 };
});

const birds = [[740, 70, 1], [770, 58, 0.8], [795, 76, 0.9], [1060, 90, 0.7], [1085, 82, 0.6], [330, 96, 0.7]];
const trees = [[362, 262, 13], [515, 262, 11], [1012, 262, 12], [1282, 262, 11], [1432, 262, 10], [58, 262, 9]];
const clouds = [[180, 40, 1], [620, 28, 0.8], [1240, 46, 1.1], [1500, 22, 0.7]];

export default function Skyline({ className = "", variant = "night", top = 0 }) {
  const p = palettes[variant];
  const day = variant === "day";
  const id = (n) => `${n}-${variant}`;
  const H = 300 + top;

  return (
    <svg viewBox={`0 0 1600 ${H}`} preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id("sky")} x1="0" y1="0" x2="0" y2="1">
          {p.sky.map(([o, c, op]) => <stop key={o} offset={o} stopColor={c} stopOpacity={op} />)}
        </linearGradient>
        <radialGradient id={id("sun")} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#fff7d6" />
          <stop offset=".55" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f97316" />
        </radialGradient>
        <radialGradient id={id("halo")} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#fbbf24" stopOpacity={day ? 0.4 : 0.55} />
          <stop offset="1" stopColor="#fbbf24" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id("river")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.river[0]} />
          <stop offset="1" stopColor={p.river[1]} />
        </linearGradient>
      </defs>

      <rect width="1600" height={262 + top} fill={`url(#${id("sky")})`} />

      <g transform={`translate(0 ${top})`}>
        {/* sun, clouds, birds */}
        <circle cx="800" cy="215" r="150" fill={`url(#${id("halo")})`} />
        <circle cx="800" cy="210" r="62" fill={`url(#${id("sun")})`} opacity={day ? 0.95 : 1} />
        {day &&
          clouds.map(([x, y, s]) => (
            <g key={x} fill="#fff" opacity=".9" transform={`translate(${x} ${y - top * 0.4}) scale(${s})`}>
              <ellipse cx="0" cy="10" rx="46" ry="12" />
              <ellipse cx="-14" cy="2" rx="20" ry="14" />
              <ellipse cx="12" cy="-2" rx="24" ry="17" />
            </g>
          ))}
        {birds.map(([x, y, s]) => (
          <path key={`${x}-${y}`} d={`M${x} ${y}q${6 * s} ${-6 * s} ${12 * s} 0q${6 * s} ${-6 * s} ${12 * s} 0`} fill="none" stroke={p.bird} strokeWidth="2" strokeLinecap="round" />
        ))}

        {/* distant city */}
        <g fill={p.far} opacity={p.farOpacity}>
          {far.map((b) => <rect key={b.x} x={b.x} y={262 - b.h} width={b.w} height={b.h} />)}
        </g>

        <g fill={p.ink}>
          {/* ── Taj Mahal ── */}
          <rect x="70" y="250" width="270" height="12" />
          <rect x="150" y="186" width="110" height="64" />
          <path d="M158 186c0-34 22-52 47-70 25 18 47 36 47 70z" />
          <path d="M205 116v-20" stroke={p.ink} strokeWidth="3" />
          <circle cx="205" cy="94" r="3" />
          <path d="M150 186c0-12 6-18 12-22 6 4 12 10 12 22zM236 186c0-12 6-18 12-22 6 4 12 10 12 22z" />
          {[92, 306].map((x) => (
            <g key={x}>
              <path d={`M${x} 250l3-96h8l3 96z`} />
              <path d={`M${x - 2} 156c0-8 4-12 9-14 5 2 9 6 9 14z`} />
              <path d={`M${x + 7} 142v-6`} stroke={p.ink} strokeWidth="2" />
            </g>
          ))}
          {/* palm */}
          <path d="M30 262c2-30 2-50 0-74" stroke={day ? "#166534" : p.ink} strokeWidth="4" fill="none" />
          <path fill={day ? "#16a34a" : p.ink} d="M30 188c-14-8-26-6-34 2 12-2 22 0 34-2zM30 188c12-10 26-10 34-2-12-2-22 0-34 2zM30 188c-6-14-16-20-28-20 10 4 18 10 28 20zM30 188c4-14 14-22 26-22-10 4-18 12-26 22z" />

          {/* ── India Gate ── */}
          <path fillRule="evenodd" d="M392 262V170h96v92zM422 262v-44a18 18 0 0 1 36 0v44z" />
          <rect x="386" y="162" width="108" height="10" />
          <rect x="408" y="150" width="64" height="12" />
          <rect x="428" y="142" width="24" height="8" />

          {/* ── Qutub Minar ── */}
          <path d="M540 262l8-148h14l8 148z" />
          <rect x="546" y="106" width="18" height="8" />
          <path d="M555 106v-12" stroke={p.ink} strokeWidth="3" />

          {/* ── Howrah Bridge ── */}
          <rect x="596" y={DECK - 2} width="408" height="9" />
          <path d={`M${chord.map((c) => c.join(" ")).join("L")}`} fill="none" stroke={p.ink} strokeWidth="6" strokeLinejoin="round" />
          <path d={lacing.join("")} fill="none" stroke={p.ink} strokeWidth="2.2" />
          {[700, 900].map((x) => (
            <g key={x}>
              <path d={`M${x - 9} 262V114h18v148z`} />
              <rect x={x - 13} y="108" width="26" height="7" />
            </g>
          ))}

          {/* ── Victoria Memorial ── */}
          <rect x="1036" y="236" width="228" height="26" />
          <rect x="1066" y="206" width="168" height="30" />
          <rect x="1124" y="178" width="52" height="28" />
          <path d="M1118 180c0-34 14-52 32-62 18 10 32 28 32 62z" />
          <path d="M1150 118v-12" stroke={p.ink} strokeWidth="3" />
          <path d="M1150 104l-7-4 7-8 7 8z" fill={p.glow} />
          <path d="M1068 206a14 14 0 0 1 28 0zM1204 206a14 14 0 0 1 28 0z" />

          {/* ── Charminar ── */}
          <path fillRule="evenodd" d="M1312 262v-64h96v64zM1342 262v-30a18 18 0 0 1 36 0v30z" />
          <rect x="1308" y="190" width="104" height="9" />
          {[1300, 1410].map((x) => (
            <g key={x}>
              <rect x={x} y="138" width="10" height="124" />
              <path d={`M${x - 3} 140c0-10 4-14 8-16 4 2 8 6 8 16z`} />
              <rect x={x - 2} y="178" width="14" height="4" />
            </g>
          ))}

          {/* ── Lotus Temple ── */}
          <rect x="1440" y="252" width="160" height="10" />
          <path d="M1520 252c-14-30-14-58 0-86 14 28 14 56 0 86z" />
          <path d="M1520 252c-26-16-40-40-42-70 22 14 36 38 42 70zM1520 252c26-16 40-40 42-70-22 14-36 38-42 70z" />
          <path d="M1520 254c-34-4-56-20-66-44 26 4 50 20 66 44zM1520 254c34-4 56-20 66-44-26 4-50 20-66 44z" />
        </g>

        {/* trees (day) */}
        {day &&
          trees.map(([x, y, r]) => (
            <g key={x}>
              <rect x={x - 1.5} y={y - r - 4} width="3" height={r + 4} fill="#7c4a1e" />
              <circle cx={x} cy={y - r - 6} r={r} fill="#22a34a" />
              <circle cx={x - r * 0.45} cy={y - r - 3} r={r * 0.6} fill="#16843c" />
            </g>
          ))}

        {/* lit details */}
        <g fill={day ? "#ffffff" : p.glow} opacity={day ? 0.9 : 1}>
          {[168, 188, 222, 242].map((x) => <rect key={x} x={x} y="214" width="5" height="9" rx="2" opacity=".8" />)}
          {[1080, 1100, 1196, 1216].map((x) => <rect key={x} x={x} y="244" width="5" height="8" rx="2" opacity=".7" />)}
          {[1320, 1396].map((x) => <rect key={x} x={x} y="214" width="4" height="8" rx="2" opacity=".7" />)}
        </g>
        <circle cx="440" cy="232" r="3" fill="#f97316" opacity=".9" />
        <path d="M200 228a5 5 0 0 1 10 0v22h-10z" fill={p.ink2} />
        <path d="M1145 236a5 5 0 0 1 10 0v26h-10z" fill={p.ink2} />

        {/* ground + river with sun reflection */}
        <rect y="260" width="1600" height="6" fill={p.ground} />
        <rect y="266" width="1600" height="34" fill={`url(#${id("river")})`} />
        <g stroke={p.glow} strokeLinecap="round" opacity=".75">
          <path d="M748 272h104" strokeWidth="3" />
          <path d="M762 279h76" strokeWidth="2.5" opacity=".8" />
          <path d="M776 286h48" strokeWidth="2" opacity=".6" />
          <path d="M788 293h24" strokeWidth="1.5" opacity=".5" />
        </g>
        <g stroke={p.ripple} strokeLinecap="round" opacity={day ? 0.7 : 0.25} strokeWidth="1.5">
          <path d="M120 276h60M420 282h40M1120 276h70M1480 284h50M980 290h40M300 292h30" />
        </g>
        {/* boat (day) */}
        {day && (
          <g transform="translate(1060 270)">
            <path d="M0 6h44l-6 8H6z" fill="#c2410c" />
            <path d="M14 6V-14l14 20z" fill="#fff" stroke="#e2e8f0" />
            <path d="M14 -14v20" stroke="#7c4a1e" strokeWidth="1.5" />
          </g>
        )}
      </g>
    </svg>
  );
}
