import React from "react";

// Authentic, traditional and retro Indian business icons ("old images icons")
// symbolizing the heritage of Indian commerce from bahi-khata to digital India.

export function BahiKhataIcon({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* Red bahi-khata ledger book */}
      <rect x="8" y="6" width="32" height="36" rx="3" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="2" />
      {/* Spine & golden tie thread */}
      <rect x="8" y="6" width="6" height="36" rx="1" fill="#7F1D1D" />
      <line x1="14" y1="6" x2="14" y2="42" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="2 2" />
      {/* Traditional gold foil border */}
      <rect x="18" y="10" width="18" height="28" rx="1.5" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3 1.5" fill="#991B1B" />
      {/* Shubh Labh / Devanagari auspicious mark representation */}
      <circle cx="27" cy="18" r="3.5" fill="#FEF3C7" />
      <path d="M25 18h4M27 16v4" stroke="#B91C1C" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="21" y1="26" x2="33" y2="26" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="21" y1="31" x2="29" y2="31" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Yellow hanging bookmark tassel */}
      <path d="M22 42v4l3-2 3 2v-4" fill="#F59E0B" />
    </svg>
  );
}

export function TarazuIcon({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* Central brass pillar and fulcrum */}
      <path d="M24 6v28" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="6" r="3" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
      {/* Pedestal base */}
      <path d="M16 38c0-2 3.58-4 8-4s8 2 8 4v2H16v-2z" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
      {/* Main beam balance */}
      <path d="M10 14h28" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="14" r="2.5" fill="#FDE68A" stroke="#B45309" strokeWidth="1" />
      {/* Left pan strings & pan */}
      <path d="M10 14l-4 11M10 14l4 11" stroke="#92400E" strokeWidth="1" />
      <path d="M4 25c0 3.3 2.7 6 6 6s6-2.7 6-6H4z" fill="#FBBF24" stroke="#B45309" strokeWidth="1.5" />
      {/* Right pan strings & pan */}
      <path d="M38 14l-4 11M38 14l4 11" stroke="#92400E" strokeWidth="1" />
      <path d="M32 25c0 3.3 2.7 6 6 6s6-2.7 6-6H32z" fill="#FBBF24" stroke="#B45309" strokeWidth="1.5" />
    </svg>
  );
}

export function SoundboxAlertIcon({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* Indian UPI Audio Soundbox body */}
      <rect x="10" y="8" width="28" height="34" rx="5" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
      {/* Brand accent stripe */}
      <path d="M10 18h28v4H10z" fill="#0EA5E9" />
      {/* Speaker grill */}
      <circle cx="24" cy="30" r="7" fill="#0C4A6E" />
      <circle cx="24" cy="30" r="4.5" fill="#0284C7" />
      <circle cx="24" cy="30" r="2" fill="#E0F2FE" />
      {/* Sound waves emitting */}
      <path d="M37 24a9 9 0 0 1 0 12" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 21a13 13 0 0 1 0 18" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      {/* Screen with Indian Rupee symbol */}
      <rect x="15" y="11" width="18" height="5" rx="1.5" fill="#0C4A6E" />
      <text x="24" y="15.5" fill="#4ADE80" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">₹ 500 ✓</text>
    </svg>
  );
}

export function DesiMoharIcon({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* Circular traditional official stamp */}
      <circle cx="24" cy="24" r="20" stroke="#059669" strokeWidth="2" strokeDasharray="3 1.5" />
      <circle cx="24" cy="24" r="16.5" stroke="#059669" strokeWidth="1.2" fill="#ECFDF5" />
      {/* Ashok Chakra / 24 spoke inspiration or star */}
      <circle cx="24" cy="24" r="4" fill="#10B981" />
      <circle cx="24" cy="24" r="1.5" fill="#ECFDF5" />
      {/* Text representation */}
      <path d="M14 18a11 11 0 0 1 20 0" stroke="#047857" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M14 30a11 11 0 0 0 20 0" stroke="#047857" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="12" cy="24" r="1" fill="#059669" />
      <circle cx="36" cy="24" r="1" fill="#059669" />
    </svg>
  );
}

export function ChaiKulhadIcon({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* Clay Kulhad / Cutting glass */}
      <path d="M15 16l3 22c0 2 2.7 3 6 3s6-1 6-3l3-22H15z" fill="#C2410C" stroke="#9A3412" strokeWidth="1.5" />
      {/* Clay rim */}
      <ellipse cx="24" cy="16" rx="9" ry="2.5" fill="#EA580C" stroke="#9A3412" strokeWidth="1.5" />
      {/* Steaming hot tea aroma curves */}
      <path d="M21 11c-1-2 1-3 0-5" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M25 10c-1-2 1-3 0-5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 12c-1-2 1-3 0-5" stroke="#FDBA74" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DeliveryScooterIcon({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* Scooter wheels */}
      <circle cx="13" cy="35" r="5" fill="#334155" stroke="#1E293B" strokeWidth="1.5" />
      <circle cx="13" cy="35" r="2" fill="#CBD5E1" />
      <circle cx="35" cy="35" r="5" fill="#334155" stroke="#1E293B" strokeWidth="1.5" />
      <circle cx="35" cy="35" r="2" fill="#CBD5E1" />
      {/* Scooter frame */}
      <path d="M13 35h10l6-13h7" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 35v-8h-6" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
      {/* Handlebar & headlight */}
      <path d="M35 18l2-4h-4" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      <circle cx="38" cy="18" r="2" fill="#FACC15" />
      {/* Home delivery parcel box on back carrier */}
      <rect x="10" y="16" width="11" height="11" rx="1.5" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
      <line x1="10" y1="21.5" x2="21" y2="21.5" stroke="#D97706" strokeWidth="1" />
      <line x1="15.5" y1="16" x2="15.5" y2="27" stroke="#D97706" strokeWidth="1" />
      {/* Motion lines */}
      <path d="M4 27h3M3 31h5" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

