// Decorative "connected nodes" motif echoing the logo. Pure SVG, no JS.
export default function Network({ className = "", uid = "net" }) {
  const nodes = [
    [40, 60], [150, 30], [250, 95], [360, 50], [470, 120], [560, 70],
    [90, 180], [210, 210], [330, 170], [430, 240], [540, 200],
    [60, 300], [180, 330], [300, 290], [400, 350], [520, 320],
  ];
  const links = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [6, 7], [7, 8], [8, 9], [9, 10],
    [2, 8], [4, 9], [5, 10], [6, 11], [11, 12], [12, 13], [13, 14], [14, 15], [7, 12], [9, 14], [10, 15],
  ];
  return (
    <svg viewBox="0 0 600 380" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id={`${uid}-line`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.55" />
          <stop offset="1" stopColor="#5fe0a0" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      {links.map(([a, b], i) => (
        <path
          key={i}
          d={`M${nodes[a][0]} ${nodes[a][1]} Q ${(nodes[a][0] + nodes[b][0]) / 2} ${(nodes[a][1] + nodes[b][1]) / 2 - 18} ${nodes[b][0]} ${nodes[b][1]}`}
          stroke={`url(#${uid}-line)`}
          strokeWidth="1.4"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill={i % 2 ? "#22d3ee" : "#5fe0a0"} fillOpacity="0.8" />
      ))}
    </svg>
  );
}
