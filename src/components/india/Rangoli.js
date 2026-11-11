// Generated rangoli / mandala — concentric rings of petals and dots.
const rings = [
  { r: 0, n: 1, rx: 14, ry: 14, color: "#f59e0b" },
  { r: 30, n: 8, rx: 9, ry: 20, color: "#22d3ee" },
  { r: 58, n: 12, rx: 8, ry: 18, color: "#5fe0a0" },
  { r: 86, n: 16, rx: 8, ry: 18, color: "#f97316" },
  { r: 114, n: 20, rx: 7, ry: 17, color: "#1b86d0" },
  { r: 140, n: 24, rx: 6, ry: 14, color: "#f59e0b" },
];

export default function Rangoli({ className = "", opacity = 1 }) {
  return (
    <svg viewBox="-170 -170 340 340" className={className} aria-hidden="true" opacity={opacity}>
      {[44, 72, 100, 128, 156].map((r) => (
        <circle key={r} r={r} fill="none" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="2 5" />
      ))}
      {rings.map(({ r, n, rx, ry, color }) =>
        Array.from({ length: n }, (_, i) => {
          const a = (360 / n) * i;
          return (
            <g key={`${r}-${i}`} transform={`rotate(${a}) translate(0 ${-r})`}>
              <ellipse rx={rx} ry={ry} fill={color} fillOpacity="0.85" />
              <ellipse rx={rx * 0.45} ry={ry * 0.5} fill="#fff" fillOpacity="0.55" />
            </g>
          );
        })
      )}
      {Array.from({ length: 32 }, (_, i) => (
        <circle key={i} transform={`rotate(${(360 / 32) * i}) translate(0 -162)`} r="3" fill="#f97316" />
      ))}
    </svg>
  );
}
