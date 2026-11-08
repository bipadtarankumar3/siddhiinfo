// Custom service illustrations (viewBox 160×100). Colours come from the
// service accent so every card has its own identity.
export const accents = {
  indigo: { a: "#1668b5", b: "#38a6e3", l: "#f0efff", card: "from-brand-50 to-white", text: "text-brand-600", ring: "group-hover:ring-brand-200", chip: "bg-brand-50 text-brand-700" },
  blue: { a: "#14b8d6", b: "#22d3ee", l: "#eaf2ff", card: "from-blue-50 to-white", text: "text-electric-600", ring: "group-hover:ring-blue-200", chip: "bg-blue-50 text-blue-700" },
  saffron: { a: "#f97316", b: "#fdba74", l: "#fff7ed", card: "from-saffron-50 to-white", text: "text-saffron-600", ring: "group-hover:ring-saffron-200", chip: "bg-saffron-50 text-saffron-600" },
  emerald: { a: "#12936a", b: "#5fe0a0", l: "#ecfdf5", card: "from-mint-50 to-white", text: "text-mint-600", ring: "group-hover:ring-mint-200", chip: "bg-mint-50 text-mint-700" },
  green: { a: "#1faa59", b: "#25D366", l: "#ecfdf3", card: "from-green-50 to-white", text: "text-green-700", ring: "group-hover:ring-green-200", chip: "bg-green-50 text-green-700" },
  rose: { a: "#e11d48", b: "#fb7185", l: "#fff1f2", card: "from-rose-50 to-white", text: "text-rose-600", ring: "group-hover:ring-rose-200", chip: "bg-rose-50 text-rose-700" },
  violet: { a: "#7c3aed", b: "#a78bfa", l: "#f5f3ff", card: "from-violet-50 to-white", text: "text-violet-600", ring: "group-hover:ring-violet-200", chip: "bg-violet-50 text-violet-700" },
  slate: { a: "#334155", b: "#64748b", l: "#f1f5f9", card: "from-slate-100 to-white", text: "text-slate-700", ring: "group-hover:ring-slate-300", chip: "bg-slate-100 text-slate-700" },
  sky: { a: "#0284c7", b: "#38bdf8", l: "#f0f9ff", card: "from-sky-50 to-white", text: "text-sky-700", ring: "group-hover:ring-sky-200", chip: "bg-sky-50 text-sky-700" },
};

const W = "#ffffff";
const line = "#e2e8f0";
const ink = "#1e1b4b";

const art = {
  web: ({ a, b }) => (
    <>
      <rect x="20" y="12" width="120" height="78" rx="10" fill={W} stroke={line} />
      <rect x="20" y="12" width="120" height="14" rx="10" fill={a} />
      <rect x="20" y="20" width="120" height="6" fill={a} />
      {[30, 37, 44].map((x) => <circle key={x} cx={x} cy="19" r="2" fill={W} opacity="0.8" />)}
      <rect x="30" y="34" width="50" height="7" rx="3.5" fill={ink} />
      <rect x="30" y="46" width="42" height="4" rx="2" fill={line} />
      <rect x="30" y="54" width="36" height="4" rx="2" fill={line} />
      <rect x="30" y="64" width="26" height="9" rx="4.5" fill={a} />
      <rect x="88" y="34" width="42" height="40" rx="6" fill={b} opacity="0.35" />
      <circle cx="100" cy="47" r="6" fill={a} opacity="0.7" />
      <path d="M90 72 l12 -14 l9 9 l7 -6 l12 11 Z" fill={a} />
    </>
  ),
  ecommerce: ({ a, b }) => (
    <>
      <rect x="18" y="20" width="62" height="70" rx="10" fill={W} stroke={line} />
      <rect x="26" y="28" width="46" height="32" rx="6" fill={b} opacity="0.35" />
      <circle cx="49" cy="44" r="10" fill={a} opacity="0.85" />
      <rect x="26" y="66" width="30" height="5" rx="2.5" fill={ink} />
      <text x="26" y="83" fontSize="9" fontWeight="800" fill={a}>₹499</text>
      <rect x="58" y="76" width="16" height="8" rx="4" fill={a} />
      <path d="M96 38 h40 l-4 50 h-32 Z" fill={a} />
      <path d="M106 38 v-6 a10 10 0 0 1 20 0 v6" stroke={a} strokeWidth="4" fill="none" />
      <circle cx="116" cy="60" r="10" fill={W} opacity="0.95" />
      <text x="116" y="64.5" textAnchor="middle" fontSize="12" fontWeight="800" fill={a}>₹</text>
      <rect x="120" y="14" width="30" height="14" rx="7" fill="#22c55e" />
      <text x="135" y="24" textAnchor="middle" fontSize="8" fontWeight="800" fill={W}>UPI ✓</text>
    </>
  ),
  webapp: ({ a, b }) => (
    <>
      <rect x="14" y="12" width="132" height="78" rx="10" fill={W} stroke={line} />
      <rect x="14" y="12" width="34" height="78" rx="10" fill={a} />
      <rect x="38" y="12" width="10" height="78" fill={a} />
      {[26, 38, 50, 62].map((y, i) => <rect key={y} x="22" y={y} width={i === 0 ? 18 : 14} height="4" rx="2" fill={W} opacity={i === 0 ? 1 : 0.6} />)}
      <rect x="56" y="20" width="44" height="6" rx="3" fill={ink} />
      <rect x="112" y="18" width="26" height="10" rx="5" fill={b} opacity="0.45" />
      {[36, 50, 64, 78].map((y, i) => (
        <g key={y}>
          <rect x="56" y={y} width="82" height="10" rx="3" fill={i % 2 ? W : "#f8fafc"} stroke={line} />
          <circle cx="62" cy={y + 5} r="2.5" fill={a} opacity="0.6" />
          <rect x="68" y={y + 3.5} width="30" height="3" rx="1.5" fill="#94a3b8" />
          <rect x="118" y={y + 2.5} width="16" height="5" rx="2.5" fill={i === 1 ? "#f59e0b" : "#22c55e"} opacity="0.8" />
        </g>
      ))}
    </>
  ),
  mobile: ({ a, b }) => (
    <>
      <rect x="40" y="16" width="44" height="80" rx="9" fill={ink} />
      <rect x="43" y="22" width="38" height="68" rx="6" fill={W} />
      <rect x="47" y="27" width="30" height="16" rx="4" fill={a} />
      {[48, 58, 68].map((y) => (
        <g key={y}>
          <rect x="47" y={y} width="8" height="7" rx="2" fill={b} opacity="0.5" />
          <rect x="58" y={y + 1} width="18" height="2.5" rx="1.25" fill="#94a3b8" />
          <rect x="58" y={y + 4.5} width="12" height="2" rx="1" fill={line} />
        </g>
      ))}
      <rect x="47" y="79" width="30" height="7" rx="3.5" fill={a} />
      <rect x="82" y="8" width="40" height="72" rx="9" fill={a} />
      <rect x="85" y="14" width="34" height="60" rx="6" fill={W} />
      <circle cx="102" cy="34" r="10" fill={b} opacity="0.45" />
      <path d="M97 34 l4 4 l7 -8" stroke={a} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="90" y="50" width="24" height="3" rx="1.5" fill={ink} />
      <rect x="93" y="57" width="18" height="2.5" rx="1.25" fill={line} />
      <rect x="118" y="6" width="22" height="12" rx="6" fill="#f97316" />
      <text x="129" y="14.5" textAnchor="middle" fontSize="7" fontWeight="800" fill={W}>NEW</text>
    </>
  ),
  crm: ({ a, b }) => (
    <>
      <rect x="12" y="12" width="136" height="80" rx="10" fill={W} stroke={line} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={20 + i * 30} y="20" width="26" height="18" rx="4" fill={i === 0 ? a : "#f8fafc"} stroke={i ? line : "none"} />
          <rect x={24 + i * 30} y="25" width="12" height="3" rx="1.5" fill={i === 0 ? W : "#94a3b8"} opacity="0.9" />
          <rect x={24 + i * 30} y="30" width="16" height="4" rx="2" fill={i === 0 ? W : ink} />
        </g>
      ))}
      {[30, 44, 36, 56, 48, 62, 70].map((h, i) => (
        <rect key={i} x={22 + i * 11} y={84 - h * 0.55} width="7" height={h * 0.55} rx="2" fill={i === 6 ? a : b} opacity={i === 6 ? 1 : 0.55} />
      ))}
      <circle cx="122" cy="62" r="18" fill="none" stroke={line} strokeWidth="8" />
      <circle cx="122" cy="62" r="18" fill="none" stroke={a} strokeWidth="8" strokeDasharray="70 113" transform="rotate(-90 122 62)" />
      <circle cx="122" cy="62" r="18" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="22 113" strokeDashoffset="-70" transform="rotate(-90 122 62)" />
      <rect x="112" y="20" width="28" height="18" rx="4" fill="#f8fafc" stroke={line} />
      <path d="M116 33 l6 -6 l5 3 l8 -7" stroke="#22c55e" strokeWidth="2" fill="none" />
    </>
  ),
  billing: ({ a }) => (
    <>
      <path d="M40 8 h66 l12 12 v78 l-7 -5 l-7 5 l-7 -5 l-7 5 l-7 -5 l-7 5 l-7 -5 l-7 5 l-7 -5 l-7 5 l-7 -5 Z" fill={W} stroke={line} />
      <rect x="48" y="18" width="36" height="7" rx="3.5" fill={ink} />
      {[32, 40, 48].map((y, i) => (
        <g key={y}>
          <rect x="48" y={y} width={[36, 30, 40][i]} height="3.5" rx="1.75" fill="#cbd5e1" />
          <rect x="96" y={y} width="14" height="3.5" rx="1.75" fill="#94a3b8" />
        </g>
      ))}
      <path d="M48 58 h62" stroke={line} />
      <rect x="48" y="64" width="22" height="5" rx="2.5" fill={a} opacity="0.3" />
      <text x="110" y="69" textAnchor="end" fontSize="9" fontWeight="800" fill={ink}>₹2,360</text>
      {[0, 2, 3, 5, 7, 8, 10, 12, 13, 15].map((x) => <rect key={x} x={52 + x * 3.5} y="76" width={x % 3 ? 1.5 : 2.5} height="9" fill={ink} />)}
      <g transform="rotate(-14 128 32)">
        <circle cx="128" cy="32" r="17" fill={a} />
        <circle cx="128" cy="32" r="13" fill="none" stroke={W} strokeDasharray="2 2" />
        <text x="128" y="35.5" textAnchor="middle" fontSize="10" fontWeight="900" fill={W}>GST</text>
      </g>
    </>
  ),
  whatsapp: ({ a, b }) => (
    <>
      <rect x="14" y="14" width="86" height="28" rx="12" fill={W} stroke={line} />
      <path d="M24 40 l-6 9 l14 -7 Z" fill={W} />
      <text x="57" y="32" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={ink}>नमस्ते! Price?</text>
      <rect x="54" y="52" width="92" height="30" rx="12" fill={b} />
      <path d="M138 80 l7 9 l-15 -7 Z" fill={b} />
      <text x="96" y="71" textAnchor="middle" fontSize="10" fontWeight="700" fill={W}>₹499 • Order now</text>
      <path d="M128 76 l2 2 l4 -4 M132 76 l2 2 l4 -4" stroke={W} strokeWidth="1.4" fill="none" />
      <circle cx="130" cy="24" r="13" fill={a} />
      <path d="M124 24 a6 6 0 1 1 3 5 l-4 1 l1 -3.5 a6 6 0 0 1 0 -2.5" fill="none" stroke={W} strokeWidth="1.8" />
    </>
  ),
  marketing: ({ a, b }) => (
    <>
      <rect x="14" y="16" width="80" height="70" rx="10" fill={W} stroke={line} />
      <path d="M24 72 L40 56 L54 62 L74 38 L84 44" stroke={a} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M78 36 l8 0 l0 8" stroke={a} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="24" width="34" height="5" rx="2.5" fill={ink} />
      <path d="M104 46 l26 -16 v44 l-26 -16 Z" fill={a} />
      <rect x="96" y="44" width="10" height="16" rx="3" fill={b} />
      <path d="M102 60 l4 14 h6 l-3 -14" fill={a} opacity="0.8" />
      <path d="M136 40 q8 12 0 24" stroke={b} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M142 34 q12 18 0 36" stroke={b} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
      <g transform="translate(120 12)">
        <rect width="30" height="16" rx="8" fill="#f97316" />
        <path d="M9 8.5 l2.5 2.5 l2.5 -2.5 a1.8 1.8 0 0 0 -2.5 -2.5 a1.8 1.8 0 0 0 -2.5 2.5" fill={W} />
        <text x="21" y="11.5" textAnchor="middle" fontSize="7.5" fontWeight="800" fill={W}>2k</text>
      </g>
    </>
  ),
  maps: ({ a }) => (
    <>
      <path d="M14 26 l40 -12 l52 12 l40 -12 v62 l-40 12 l-52 -12 l-40 12 Z" fill="#eef2ff" />
      <path d="M54 14 v62 M106 26 v62" stroke="#dbe2fb" strokeWidth="2" />
      <path d="M14 62 q46 -22 132 6" stroke="#fde68a" strokeWidth="6" fill="none" />
      <path d="M80 10 c-14 0 -24 10 -24 22 c0 17 24 40 24 40 s24 -23 24 -40 c0 -12 -10 -22 -24 -22 Z" fill={a} />
      <circle cx="80" cy="32" r="8" fill={W} />
      <rect x="98" y="72" width="50" height="18" rx="9" fill={W} stroke={line} />
      <text x="123" y="84.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="#f59e0b">★★★★★</text>
    </>
  ),
  cloud: ({ a, b }) => (
    <>
      <path d="M44 56 a18 18 0 0 1 4 -35 a26 26 0 0 1 50 -2 a20 20 0 0 1 16 37 Z" fill={b} opacity="0.35" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="48" y={40 + i * 17} width="64" height="14" rx="4" fill={i === 0 ? a : W} stroke={i ? line : "none"} />
          <circle cx="56" cy={47 + i * 17} r="2.2" fill={i === 0 ? "#86efac" : "#22c55e"} />
          <rect x="62" y={45.5 + i * 17} width="26" height="3" rx="1.5" fill={i === 0 ? W : "#94a3b8"} opacity="0.85" />
          <rect x="100" y={45 + i * 17} width="6" height="4" rx="1" fill={i === 0 ? W : line} />
        </g>
      ))}
      <g transform="translate(118 50)">
        <rect width="26" height="22" rx="5" fill={ink} />
        <path d="M7 0 v-5 a6 6 0 0 1 12 0 v5" stroke={ink} strokeWidth="3.5" fill="none" />
        <circle cx="13" cy="10" r="3" fill="#fbbf24" />
        <rect x="12" y="11" width="2" height="6" fill="#fbbf24" />
      </g>
      <text x="22" y="30" fontSize="9" fontWeight="800" fill={a}>.in</text>
    </>
  ),
  ai: ({ a, b }) => (
    <>
      <rect x="56" y="26" width="48" height="48" rx="10" fill={a} />
      <rect x="64" y="34" width="32" height="32" rx="6" fill={W} opacity="0.15" stroke={W} strokeOpacity="0.6" />
      <text x="80" y="55" textAnchor="middle" fontSize="15" fontWeight="900" fill={W}>AI</text>
      {[34, 46, 58].map((y) => (
        <g key={y}>
          <rect x="44" y={y + 2} width="12" height="3" fill={a} />
          <rect x="104" y={y + 2} width="12" height="3" fill={a} />
        </g>
      ))}
      {[[24, 20], [24, 50], [24, 80], [136, 20], [136, 50], [136, 80]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x < 80 ? 44 : 116} ${y < 40 ? 36 : y > 60 ? 60 : 48} L${x} ${y}`} stroke={b} strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx={x} cy={y} r="8" fill={W} stroke={i % 2 ? "#1668b5" : b} strokeWidth="2" />
          <circle cx={x} cy={y} r="3" fill={i % 2 ? "#1668b5" : a} />
        </g>
      ))}
      <path d="M118 8 l2.5 5 l5 2.5 l-5 2.5 l-2.5 5 l-2.5 -5 l-5 -2.5 l5 -2.5 Z" fill="#fbbf24" />
    </>
  ),
  custom: ({ a, b }) => (
    <>
      <rect x="14" y="14" width="104" height="72" rx="10" fill="#1e1b4b" />
      {[30, 30, 30].map((_, i) => <circle key={i} cx={24 + i * 7} cy="22" r="2" fill={["#f87171", "#fbbf24", "#4ade80"][i]} />)}
      <text x="24" y="44" fontSize="10" fontFamily="monospace" fill={b}>&lt;/&gt;</text>
      <rect x="44" y="37" width="40" height="4" rx="2" fill="#a78bfa" />
      <rect x="30" y="49" width="56" height="4" rx="2" fill="#22d3ee" />
      <rect x="30" y="59" width="36" height="4" rx="2" fill="#fdba74" />
      <rect x="24" y="69" width="48" height="4" rx="2" fill="#64748b" />
      <g transform="translate(122 62)">
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x="-3.5" y="-22" width="7" height="9" rx="1.5" fill={a} transform={`rotate(${i * 45})`} />
        ))}
        <circle r="16" fill={a} />
        <circle r="6" fill={W} />
      </g>
    </>
  ),
};

export default function ServiceArt({ name, accent = "indigo", className = "w-full" }) {
  const Art = art[name] ?? art.web;
  const c = accents[accent] ?? accents.indigo;
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden="true">
      <Art a={c.a} b={c.b} />
    </svg>
  );
}
