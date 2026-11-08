// Stylised Indian skyline: homes, India Gate, Taj, temple shikhara, Charminar,
// Lotus temple, Gateway of India and a modern business district. Original silhouettes.
export default function Skyline({ className = "", fit = "xMidYMax meet" }) {
  return (
    <svg viewBox="0 0 1440 170" preserveAspectRatio={fit} className={className} aria-hidden="true" fill="currentColor">
      {/* kites */}
      <g opacity="0.9">
        <path d="M250 22 l10 12 l-10 12 l-10 -12 Z" fill="#f97316" />
        <path d="M250 46 q-6 14 4 26" stroke="#f97316" strokeWidth="1.2" fill="none" />
        <path d="M1180 36 l8 10 l-8 10 l-8 -10 Z" fill="#22d3ee" />
        <path d="M1180 56 q6 12 -4 22" stroke="#22d3ee" strokeWidth="1.2" fill="none" />
      </g>
      {/* birds */}
      <path d="M520 40 q6 -6 12 0 q6 -6 12 0 M560 28 q5 -5 10 0 q5 -5 10 0" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />

      {/* homes left */}
      <path d="M0 170 V128 h40 v-12 l20 -14 l20 14 v12 h30 V170 Z" />
      <rect x="12" y="140" width="10" height="10" fill="#fbbf24" opacity="0.8" />
      <rect x="86" y="140" width="10" height="10" fill="#fbbf24" opacity="0.6" />

      {/* India Gate */}
      <path fillRule="evenodd" d="M130 170 V72 h80 V170 h-24 V118 a16 16 0 0 0 -32 0 V170 Z" />
      <rect x="124" y="62" width="92" height="12" />
      <rect x="140" y="50" width="60" height="12" />
      <path d="M156 50 q14 -18 28 0 Z" />

      {/* palm */}
      <path d="M244 170 q4 -40 -2 -70" stroke="currentColor" strokeWidth="5" fill="none" />
      <path d="M242 100 q-22 -6 -32 8 q16 -12 32 -8 q-6 -20 -26 -24 q20 2 26 24 q10 -20 30 -18 q-22 4 -26 18 q22 -2 30 14 q-14 -12 -32 -14 Z" />

      {/* Taj */}
      <rect x="290" y="128" width="190" height="42" />
      <path fillRule="evenodd" d="M335 128 V86 h100 V128 Z M372 128 V108 a13 13 0 0 1 26 0 V128 Z" />
      <path d="M345 86 C345 52 385 44 385 22 C385 44 425 52 425 86 Z" />
      <rect x="383" y="10" width="4" height="14" />
      <path d="M338 86 q8 -14 16 0 Z M416 86 q8 -14 16 0 Z" />
      <rect x="296" y="66" width="8" height="62" />
      <path d="M294 66 q6 -12 12 0 Z" />
      <rect x="466" y="66" width="8" height="62" />
      <path d="M464 66 q6 -12 12 0 Z" />

      {/* temple shikhara */}
      <path d="M520 170 V122 h10 C534 92 548 62 562 40 C576 62 590 92 594 122 h10 V170 Z" />
      <path d="M548 170 v-24 a14 14 0 0 1 28 0 v24 Z" fill="#0b1530" opacity="0.35" />
      <rect x="560" y="22" width="3" height="20" />
      <path d="M563 22 l16 6 l-16 6 Z" fill="#f97316" />

      {/* Charminar */}
      <path fillRule="evenodd" d="M650 170 V96 h112 V170 Z M684 170 V132 a22 22 0 0 1 44 0 V170 Z" />
      <rect x="644" y="88" width="124" height="10" />
      {[640, 760].map((x) => (
        <g key={x}>
          <rect x={x} y="44" width="12" height="126" />
          <rect x={x - 3} y="70" width="18" height="5" />
          <rect x={x - 3} y="96" width="18" height="5" />
          <path d={`M${x - 2} 44 q8 -18 16 0 Z`} />
          <rect x={x + 5} y="20" width="2" height="10" />
        </g>
      ))}
      <path d="M690 88 q16 -20 32 0 Z" />

      {/* city block */}
      <rect x="800" y="110" width="40" height="60" />
      <rect x="846" y="90" width="30" height="80" />
      {[0, 1, 2, 3].map((r) => [0, 1].map((c) => (
        <rect key={`${r}-${c}`} x={852 + c * 12} y={98 + r * 16} width="6" height="8" fill="#fbbf24" opacity={(r + c) % 2 ? 0.25 : 0.7} />
      )))}

      {/* Lotus temple */}
      <path d="M890 170 C900 130 930 110 950 104 C970 110 1000 130 1010 170 Z" />
      <path d="M920 170 C924 138 940 116 950 96 C960 116 976 138 980 170 Z" opacity="0.85" />
      <path d="M940 170 C942 140 946 120 950 104 C954 120 958 140 960 170 Z" opacity="0.7" />

      {/* Gateway of India */}
      <path fillRule="evenodd" d="M1040 170 V100 h120 V170 Z M1084 170 V128 a16 16 0 0 1 32 0 V170 Z" />
      {[1034, 1144].map((x) => (
        <g key={x}>
          <rect x={x} y="76" width="22" height="94" />
          <path d={`M${x} 76 q11 -18 22 0 Z`} />
        </g>
      ))}
      <rect x="1056" y="90" width="88" height="12" />
      <path d="M1088 90 q12 -18 24 0 Z" />

      {/* modern towers */}
      <rect x="1200" y="60" width="44" height="110" />
      <rect x="1250" y="88" width="36" height="82" />
      <path d="M1292 170 V40 l30 -14 V170 Z" />
      <rect x="1330" y="100" width="40" height="70" />
      <rect x="1376" y="120" width="64" height="50" />
      {Array.from({ length: 6 }, (_, r) => [0, 1, 2].map((c) => (
        <rect key={`t${r}-${c}`} x={1206 + c * 13} y={70 + r * 15} width="7" height="8" fill="#22d3ee" opacity={(r * 3 + c) % 4 ? 0.2 : 0.75} />
      )))}
      {Array.from({ length: 7 }, (_, r) => (
        <rect key={`g${r}`} x="1300" y={48 + r * 16} width="14" height="6" fill="#5fe0a0" opacity={r % 3 ? 0.25 : 0.7} />
      ))}
      <rect x="1306" y="8" width="2" height="22" />
    </svg>
  );
}
