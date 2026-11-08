// Illustrations for the "Digital India stack" every small business needs.
const art = {
  upi: (
    <>
      <rect width="120" height="96" rx="20" fill="#ecfdf5" />
      <rect x="38" y="10" width="44" height="78" rx="9" fill="#0b1530" />
      <rect x="42" y="16" width="36" height="66" rx="6" fill="#fff" />
      <rect x="48" y="24" width="24" height="24" fill="#0b1530" />
      <rect x="51" y="27" width="7" height="7" fill="#fff" />
      <rect x="62" y="27" width="7" height="7" fill="#fff" />
      <rect x="51" y="38" width="7" height="7" fill="#fff" />
      <rect x="63" y="39" width="3" height="3" fill="#fff" />
      <text x="60" y="61" textAnchor="middle" fontSize="9" fontWeight="800" fill="#12936a">UPI</text>
      <rect x="47" y="66" width="26" height="10" rx="5" fill="#12936a" />
      <text x="60" y="73.5" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fff">PAY ₹</text>
      <circle cx="88" cy="26" r="12" fill="#22c55e" />
      <path d="M82 26 l4 4 l8 -8" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="20" y="80" fontSize="14" fontWeight="800" fill="#f59e0b">₹</text>
    </>
  ),
  gst: (
    <>
      <rect width="120" height="96" rx="20" fill="#fff7ed" />
      <path d="M34 10 h44 l10 10 v66 l-6 -4 l-6 4 l-6 -4 l-6 4 l-6 -4 l-6 4 l-6 -4 l-6 4 l-6 -4 Z" fill="#fff" stroke="#fed7aa" />
      <rect x="40" y="18" width="28" height="6" rx="3" fill="#0f2a6b" />
      <rect x="40" y="30" width="40" height="3" rx="1.5" fill="#cbd5e1" />
      <rect x="40" y="38" width="34" height="3" rx="1.5" fill="#cbd5e1" />
      <rect x="40" y="46" width="40" height="3" rx="1.5" fill="#cbd5e1" />
      <rect x="40" y="58" width="12" height="5" rx="2.5" fill="#f97316" />
      <text x="84" y="63" textAnchor="end" fontSize="8" fontWeight="800" fill="#0f2a6b">₹2,360</text>
      <rect x="74" y="4" width="34" height="18" rx="9" fill="#1668b5" transform="rotate(12 91 13)" />
      <text x="91" y="17" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" transform="rotate(12 91 13)">GST ✓</text>
    </>
  ),
  whatsapp: (
    <>
      <rect width="120" height="96" rx="20" fill="#eef7ff" />
      <rect x="12" y="14" width="72" height="28" rx="12" fill="#fff" stroke="#e2e8f0" />
      <path d="M20 40 l-6 10 l14 -8 Z" fill="#fff" />
      <text x="48" y="32" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f2a6b">नमस्ते! दाम?</text>
      <rect x="36" y="52" width="74" height="28" rx="12" fill="#25D366" />
      <path d="M102 78 l6 10 l-14 -8 Z" fill="#25D366" />
      <text x="73" y="70" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">₹499 • Order ✓</text>
    </>
  ),
  maps: (
    <>
      <rect width="120" height="96" rx="20" fill="#f0f9ff" />
      <path d="M14 26 l28 -10 l36 10 l28 -10 v54 l-28 10 l-36 -10 l-28 10 Z" fill="#dbeafe" />
      <path d="M42 16 v54 M78 26 v54" stroke="#bfdbfe" strokeWidth="2" />
      <path d="M14 52 q30 -14 92 6" stroke="#fde68a" strokeWidth="5" fill="none" />
      <path d="M60 14 c-12 0 -20 9 -20 19 c0 14 20 34 20 34 s20 -20 20 -34 c0 -10 -8 -19 -20 -19 Z" fill="#ef4444" />
      <circle cx="60" cy="33" r="7" fill="#fff" />
      <rect x="70" y="66" width="44" height="18" rx="9" fill="#fff" stroke="#e2e8f0" />
      <text x="92" y="78" textAnchor="middle" fontSize="8" fontWeight="700" fill="#f59e0b">★ 4.9</text>
    </>
  ),
};

export default function StackArt({ name, className = "w-full" }) {
  return (
    <svg viewBox="0 0 120 96" className={className} aria-hidden="true">
      {art[name]}
    </svg>
  );
}
