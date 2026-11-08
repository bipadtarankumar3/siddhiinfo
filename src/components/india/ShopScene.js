// Hero illustration: a neighbourhood kirana store going digital.
// Original artwork, pure SVG — no image downloads.

const shelfItems = [
  // [x, w, h, color] per shelf, x relative to shelf start
  [[0, 18, 26, "#ef4444"], [22, 14, 20, "#facc15"], [40, 20, 30, "#22c55e"], [64, 14, 22, "#f97316"], [82, 18, 28, "#3b82f6"], [104, 14, 18, "#a855f7"], [122, 20, 26, "#14b8a6"], [146, 14, 22, "#ef4444"], [164, 18, 30, "#facc15"], [186, 16, 20, "#22c55e"], [206, 20, 26, "#f97316"], [230, 14, 22, "#3b82f6"], [248, 18, 28, "#ec4899"]],
  [[0, 24, 22, "#fde68a"], [28, 24, 22, "#fde68a"], [56, 16, 28, "#3b82f6"], [76, 16, 28, "#ef4444"], [96, 22, 20, "#22c55e"], [122, 14, 26, "#f97316"], [140, 22, 22, "#a855f7"], [166, 16, 28, "#14b8a6"], [186, 24, 20, "#facc15"], [214, 16, 26, "#ef4444"], [234, 30, 22, "#fde68a"]],
  [[0, 30, 26, "#d6d3d1"], [34, 30, 26, "#e7e5e4"], [68, 18, 22, "#f97316"], [90, 18, 22, "#22c55e"], [112, 30, 26, "#d6d3d1"], [146, 16, 24, "#3b82f6"], [166, 16, 24, "#ef4444"], [186, 30, 26, "#e7e5e4"], [220, 18, 22, "#facc15"], [242, 22, 24, "#14b8a6"]],
];

function qrBits() {
  const bits = [];
  let s = 7;
  for (let y = 0; y < 9; y++)
    for (let x = 0; x < 9; x++) {
      s = (s * 9301 + 49297) % 233280;
      const finder = (x < 3 && y < 3) || (x > 5 && y < 3) || (x < 3 && y > 5);
      if (!finder && s / 233280 > 0.5) bits.push([x, y]);
    }
  return bits;
}

function Finder({ x, y }) {
  return (
    <g>
      <rect x={x} y={y} width="13" height="13" fill="#0b1530" />
      <rect x={x + 2.2} y={y + 2.2} width="8.6" height="8.6" fill="#fff" />
      <rect x={x + 4.2} y={y + 4.2} width="4.6" height="4.6" fill="#0b1530" />
    </g>
  );
}

export default function ShopScene({ className = "" }) {
  const awning = Array.from({ length: 8 }, (_, i) => i);
  return (
    <svg viewBox="0 0 560 500" className={className} role="img" aria-labelledby="shop-title">
      <title id="shop-title">Illustration of an Indian kirana store with UPI payments and its own website on a phone</title>
      <defs>
        <radialGradient id="ss-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fbbf24" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fbbf24" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ss-sign" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#133f78" />
          <stop offset="1" stopColor="#1668b5" />
        </linearGradient>
        <linearGradient id="ss-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1668b5" />
          <stop offset="0.6" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#5fe0a0" />
        </linearGradient>
        <linearGradient id="ss-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b45309" />
          <stop offset="1" stopColor="#92400e" />
        </linearGradient>
      </defs>

      {/* sun glow + ground */}
      <circle cx="250" cy="200" r="210" fill="url(#ss-sun)" />
      <ellipse cx="290" cy="462" rx="260" ry="20" fill="#000" fillOpacity="0.28" />

      {/* ---------- shop ---------- */}
      <rect x="44" y="166" width="332" height="286" fill="#fff7e6" />
      <rect x="44" y="166" width="332" height="286" fill="none" stroke="#fde68a" strokeWidth="2" />

      {/* sign board */}
      <rect x="30" y="104" width="360" height="64" rx="10" fill="url(#ss-sign)" />
      <rect x="38" y="112" width="344" height="48" rx="6" fill="none" stroke="#5fe0a0" strokeOpacity="0.5" strokeDasharray="3 4" />
      <text x="210" y="136" textAnchor="middle" fontSize="21" fontWeight="800" fill="#fff" letterSpacing="1.5">GUPTA GENERAL STORE</text>
      <text x="210" y="154" textAnchor="middle" fontSize="13" fontWeight="600" fill="#86efbf">गुप्ता किराना • Since 1998</text>

      {/* awning */}
      {awning.map((i) => {
        const x = 44 + i * 41.5;
        const c = i % 2 ? "#fff7ed" : "#f97316";
        return (
          <g key={i}>
            <rect x={x} y="168" width="41.5" height="34" fill={c} />
            <path d={`M${x} 202 a20.75 20.75 0 0 0 41.5 0 Z`} fill={c} />
          </g>
        );
      })}
      <rect x="44" y="168" width="332" height="5" fill="#000" fillOpacity="0.12" />

      {/* toran under the sign */}
      <path d="M44 170 Q210 186 376 170" stroke="#a16207" strokeWidth="1.5" fill="none" />
      {Array.from({ length: 15 }, (_, i) => {
        const x = 56 + i * 22;
        const t = (x - 44) / 332;
        const y = 170 + 32 * t * (1 - t); // follows the Q-curve string
        return i % 2 ? (
          <path key={i} d={`M${x} ${y} c5 6 5 16 0 22 c-5 -6 -5 -16 0 -22 Z`} fill="#16a34a" />
        ) : (
          <g key={i}>
            <circle cx={x} cy={y + 6} r="4.6" fill="#f97316" />
            <circle cx={x} cy={y + 14} r="4.2" fill="#f59e0b" />
            <circle cx={x} cy={y + 21.5} r="3.6" fill="#f97316" />
          </g>
        );
      })}

      {/* interior & shelves */}
      <rect x="66" y="232" width="288" height="150" rx="4" fill="#4a2a12" />
      {shelfItems.map((row, r) => {
        const base = 270 + r * 40;
        return (
          <g key={r}>
            {row.map(([x, w, h, c], i) => (
              <g key={i}>
                <rect x={76 + x} y={base - h} width={w} height={h} rx="2" fill={c} />
                <rect x={76 + x + 2} y={base - h + 4} width={w - 4} height="4" rx="1" fill="#fff" fillOpacity="0.55" />
              </g>
            ))}
            <rect x="66" y={base} width="288" height="5" fill="#a16207" />
          </g>
        );
      })}

      {/* counter */}
      <rect x="54" y="378" width="312" height="10" rx="3" fill="#d97706" />
      <rect x="60" y="388" width="300" height="64" fill="url(#ss-wood)" />
      {/* small rangoli on counter */}
      <g transform="translate(130 420)">
        {Array.from({ length: 8 }, (_, i) => (
          <ellipse key={i} transform={`rotate(${i * 45}) translate(0 -12)`} rx="4" ry="8" fill={i % 2 ? "#fde68a" : "#f97316"} />
        ))}
        <circle r="6" fill="#22d3ee" />
        <circle r="2.5" fill="#fff" />
      </g>
      {/* rice sacks */}
      <path d="M200 452 q-6 -34 8 -46 h32 q14 12 8 46 Z" fill="#e7e5e4" />
      <path d="M206 410 h36" stroke="#a8a29e" strokeWidth="3" />
      <text x="224" y="438" textAnchor="middle" fontSize="10" fontWeight="700" fill="#b45309">चावल</text>

      {/* UPI QR stand on counter */}
      <g transform="translate(262 312)">
        <rect width="62" height="68" rx="7" fill="#fff" stroke="#e2e8f0" />
        <rect x="0" y="0" width="62" height="12" rx="7" fill="#12936a" />
        <rect x="0" y="6" width="62" height="6" fill="#12936a" />
        <text x="31" y="9.5" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#fff">UPI • Scan &amp; Pay</text>
        <g transform="translate(9 16)">
          {qrBits().map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x * 4.9} y={y * 4.9} width="4.4" height="4.4" fill="#0b1530" />
          ))}
          <Finder x={0} y={0} />
          <Finder x={31} y={0} />
          <Finder x={0} y={31} />
        </g>
        <rect x="27" y="68" width="8" height="10" fill="#94a3b8" />
      </g>

      {/* hanging bulb */}
      <path d="M210 232 v18" stroke="#78350f" strokeWidth="1.5" />
      <circle cx="210" cy="256" r="7" fill="#fde047" />
      <circle cx="210" cy="256" r="16" fill="#fde047" fillOpacity="0.25" />

      {/* ---------- phone with the shop's website ---------- */}
      <g transform="rotate(7 455 260)">
        <rect x="372" y="86" width="170" height="336" rx="28" fill="#0b1530" />
        <rect x="380" y="94" width="154" height="320" rx="22" fill="#fff" />
        <rect x="436" y="100" width="42" height="8" rx="4" fill="#0b1530" />
        {/* site header */}
        <rect x="380" y="94" width="154" height="44" rx="22" fill="url(#ss-sign)" />
        <rect x="380" y="116" width="154" height="22" fill="url(#ss-sign)" />
        <circle cx="398" cy="124" r="7" fill="#5fe0a0" />
        <text x="410" y="128" fontSize="10" fontWeight="700" fill="#fff">guptastore.in</text>
        {/* hero image */}
        <rect x="390" y="146" width="134" height="76" rx="10" fill="url(#ss-screen)" />
        <path d="M410 206 h46 v-20 l-8 -8 h-30 l-8 8 Z" fill="#fff" fillOpacity="0.9" />
        <rect x="414" y="188" width="38" height="18" fill="#f97316" fillOpacity="0.85" />
        <circle cx="500" cy="168" r="10" fill="#fde047" fillOpacity="0.9" />
        {/* text lines */}
        <rect x="390" y="232" width="100" height="8" rx="4" fill="#0f2a6b" />
        <rect x="390" y="246" width="128" height="6" rx="3" fill="#cbd5e1" />
        <rect x="390" y="258" width="110" height="6" rx="3" fill="#cbd5e1" />
        {/* stars */}
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} transform={`translate(${396 + i * 14} 280)`} d="M0 -5 L1.5 -1.5 L5 -1.5 L2.2 0.8 L3.2 4.5 L0 2.3 L-3.2 4.5 L-2.2 0.8 L-5 -1.5 L-1.5 -1.5 Z" fill="#f59e0b" />
        ))}
        <text x="466" y="284" fontSize="9" fontWeight="600" fill="#64748b">4.9 (212)</text>
        {/* product row */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${390 + i * 46} 296)`}>
            <rect width="40" height="44" rx="8" fill={["#fff7ed", "#ecfdf5", "#eef7ff"][i]} />
            <rect x="12" y="8" width="16" height="20" rx="3" fill={["#f97316", "#22c55e", "#1b86d0"][i]} />
            <text x="20" y="39" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0f2a6b">₹{[49, 99, 149][i]}</text>
          </g>
        ))}
        {/* whatsapp button */}
        <rect x="390" y="352" width="134" height="30" rx="15" fill="#25D366" />
        <text x="457" y="371" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#fff">Order on WhatsApp</text>
        <rect x="390" y="390" width="134" height="14" rx="7" fill="#eef7ff" />
        <text x="457" y="400" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#1668b5">Free home delivery • 2 km</text>
      </g>

      {/* ---------- floating bits ---------- */}
      <g transform="translate(58 58)">
        <circle r="26" fill="#f59e0b" />
        <circle r="20" fill="#fbbf24" />
        <text y="8" textAnchor="middle" fontSize="24" fontWeight="800" fill="#92400e">₹</text>
      </g>
      <g transform="translate(118 20)">
        <rect width="132" height="38" rx="19" fill="#fff" />
        <path d="M18 36 l-6 10 l14 -8 Z" fill="#fff" />
        <text x="66" y="24" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f2a6b">नमस्ते! Order ready?</text>
      </g>
    </svg>
  );
}
