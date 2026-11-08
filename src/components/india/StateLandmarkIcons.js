import React from "react";

// Handcrafted, flat vector landmark and monument icons representing Indian States
// in the iconic graphic style shown in the reference (warm sandstone, terracotta,
// gold, white marble, teal river and emerald touches).

export function WestBengalIcon({ className = "size-12" }) {
  // Howrah Bridge & Victoria Memorial Dome
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="West Bengal - Howrah Bridge">
      {/* Sky backdrop soft circle */}
      <circle cx="32" cy="32" r="28" fill="#F0F9FF" />
      {/* Hooghly River Water */}
      <path d="M4 48c7 0 10-2 15-2s8 2 15 2 9-2 15-2 7 2 11 2v10H4V48z" fill="#38BDF8" />
      <path d="M4 52c6 0 9-1.5 14-1.5s9 1.5 15 1.5 8-1.5 15-1.5 8 1.5 12 1.5v6H4v-6z" fill="#0284C7" opacity="0.6" />
      {/* Victoria Memorial Central Dome behind */}
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="32" cy="23" r="1.5" fill="#F59E0B" />
      {/* Howrah Bridge Cantilever Towers */}
      {/* Left Pylon */}
      <path d="M12 48L15 22h4l3 26" fill="#475569" stroke="#334155" strokeWidth="1" />
      <rect x="14" y="24" width="4" height="2" fill="#E2E8F0" />
      <line x1="13" y1="34" x2="21" y2="34" stroke="#94A3B8" strokeWidth="1" />
      <line x1="14" y1="42" x2="20" y2="42" stroke="#94A3B8" strokeWidth="1" />
      {/* Right Pylon */}
      <path d="M44 48L47 22h4l3 26" fill="#475569" stroke="#334155" strokeWidth="1" />
      <rect x="46" y="24" width="4" height="2" fill="#E2E8F0" />
      <line x1="45" y1="34" x2="53" y2="34" stroke="#94A3B8" strokeWidth="1" />
      <line x1="46" y1="42" x2="52" y2="42" stroke="#94A3B8" strokeWidth="1" />
      {/* Central Suspended Span and Cantilever Trusses */}
      <path d="M17 22L32 30L47 22" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 48c6-10 12-14 20-14s14 4 20 14" stroke="#0F172A" strokeWidth="1.5" strokeDasharray="2 1.5" />
      {/* Bridge Deck */}
      <rect x="8" y="46" width="48" height="3" rx="1.5" fill="#D97706" />
      <line x1="10" y1="47.5" x2="54" y2="47.5" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3 2" />
    </svg>
  );
}

export function MaharashtraIcon({ className = "size-12" }) {
  // Gateway of India, Mumbai
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Maharashtra - Gateway of India">
      <circle cx="32" cy="32" r="28" fill="#FFFBEB" />
      {/* Arabian Sea Waves */}
      <path d="M6 52c6 0 10-2 15-2s8 2 15 2 9-2 14-2 6 2 8 2v8H6v-8z" fill="#0284C7" />
      {/* Main Basalt Stone Gateway Structure */}
      {/* Plinth */}
      <rect x="12" y="46" width="40" height="6" rx="1" fill="#78350F" />
      <rect x="14" y="44" width="36" height="3" fill="#92400E" />
      {/* Side Pillars */}
      <rect x="14" y="22" width="9" height="23" fill="#D97706" stroke="#92400E" strokeWidth="1" />
      <rect x="41" y="22" width="9" height="23" fill="#D97706" stroke="#92400E" strokeWidth="1" />
      {/* Central Arch Mass */}
      <path d="M22 20h20v25H22V20z" fill="#F59E0B" />
      {/* Grand Horseshoe Arch Opening */}
      <path d="M26 45V31c0-3.3 2.7-6 6-6s6 2.7 6 6v14h-12z" fill="#78350F" />
      {/* Secondary Side Arches */}
      <path d="M16 42V36c0-1.7 1.3-3 3-3s3 1.3 3 3v6h-6z" fill="#78350F" />
      <path d="M42 42V36c0-1.7 1.3-3 3-3s3 1.3 3 3v6h-6z" fill="#78350F" />
      {/* Top Parapet and Turrets */}
      <rect x="12" y="18" width="40" height="4" fill="#B45309" rx="1" />
      <rect x="13" y="13" width="5" height="6" fill="#F59E0B" />
      <rect x="46" y="13" width="5" height="6" fill="#F59E0B" />
      {/* Little domes on turrets */}
      <circle cx="15.5" cy="12" r="3" fill="#FDE68A" />
      <circle cx="48.5" cy="12" r="3" fill="#FDE68A" />
      {/* Central Balcony Screen */}
      <rect x="25" y="14" width="14" height="4" fill="#FDE68A" stroke="#B45309" strokeWidth="0.8" />
    </svg>
  );
}

export function DelhiIcon({ className = "size-12" }) {
  // India Gate, New Delhi
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Delhi NCR - India Gate">
      <circle cx="32" cy="32" r="28" fill="#FEF3C7" />
      {/* Ground Base */}
      <rect x="8" y="52" width="48" height="4" rx="1" fill="#475569" />
      <rect x="12" y="49" width="40" height="3" fill="#B45309" />
      {/* Pylons */}
      <rect x="16" y="24" width="10" height="25" fill="#EA580C" stroke="#9A3412" strokeWidth="1" />
      <rect x="38" y="24" width="10" height="25" fill="#EA580C" stroke="#9A3412" strokeWidth="1" />
      {/* Central Main Arch Opening */}
      <path d="M25 49V33c0-3.9 3.1-7 7-7s7 3.1 7 7v16H25z" fill="#7C2D12" />
      {/* Pylon Details / Moldings */}
      <line x1="16" y1="36" x2="26" y2="36" stroke="#FED7AA" strokeWidth="1" />
      <line x1="38" y1="36" x2="48" y2="36" stroke="#FED7AA" strokeWidth="1" />
      {/* Cornice and Upper Tier */}
      <rect x="14" y="20" width="36" height="5" fill="#C2410C" rx="1" />
      <rect x="18" y="15" width="28" height="6" fill="#F97316" />
      {/* Inscription Band */}
      <rect x="22" y="17" width="20" height="2" fill="#FEF3C7" />
      {/* Top Domelet Plinth */}
      <rect x="24" y="12" width="16" height="3" rx="1" fill="#9A3412" />
      <ellipse cx="32" cy="11" rx="5" ry="2" fill="#FDE68A" />
      {/* Amar Jawan Jyoti Flame */}
      <circle cx="32" cy="46" r="2" fill="#F59E0B" />
      <path d="M32 43l1 2h-2z" fill="#EF4444" />
    </svg>
  );
}

export function GujaratIcon({ className = "size-12" }) {
  // Statue of Unity & Somnath Shikhara
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Gujarat - Statue of Unity">
      <circle cx="32" cy="32" r="28" fill="#F0FDF4" />
      {/* Narmada River Water */}
      <path d="M6 50c6 0 10-2 15-2s9 2 15 2 9-2 15-2 6 2 7 2v8H6v-8z" fill="#0EA5E9" />
      {/* Pedestal Base */}
      <path d="M22 50l3-8h14l3 8H22z" fill="#64748B" />
      {/* Towering Monument Figure - Statue of Unity */}
      {/* Legs & Draped Dhoti */}
      <rect x="28" y="32" width="3.5" height="10" fill="#9A3412" />
      <rect x="32.5" y="32" width="3.5" height="10" fill="#7C2D12" />
      {/* Torso & Shawl */}
      <path d="M26 20h12l-2 13H28L26 20z" fill="#C2410C" />
      <path d="M28 20l6 12" stroke="#FEF3C7" strokeWidth="1.2" />
      {/* Head & Face Silhouette */}
      <ellipse cx="32" cy="16" rx="3.5" ry="4" fill="#FDBA74" />
      {/* Shoulders */}
      <ellipse cx="32" cy="20" rx="6.5" ry="2.5" fill="#9A3412" />
      {/* Somnath Sun Ray Flag on side */}
      <path d="M48 24l4-2v6l-4-2z" fill="#EA580C" />
      <line x1="48" y1="22" x2="48" y2="44" stroke="#64748B" strokeWidth="1.5" />
      {/* Chhatri / Temple Spire on left */}
      <path d="M12 44l4-12 4 12H12z" fill="#F59E0B" />
      <circle cx="16" cy="31" r="1.5" fill="#EF4444" />
    </svg>
  );
}

export function UttarPradeshIcon({ className = "size-12" }) {
  // Varanasi Ganges Ghats & Temples
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Uttar Pradesh - Varanasi Ghats">
      <circle cx="32" cy="32" r="28" fill="#FFF7ED" />
      {/* Ganges River Water */}
      <path d="M6 46c7 0 10-2.5 15-2.5s8 2.5 15 2.5 9-2.5 15-2.5 6 2.5 7 2.5v12H6V46z" fill="#38BDF8" />
      <path d="M6 51c6 0 9-1.5 14-1.5s9 1.5 15 1.5 8-1.5 15-1.5 8 1.5 8 1.5v7H6v-7z" fill="#0284C7" opacity="0.5" />
      {/* Stone Ghat Steps */}
      <rect x="8" y="42" width="48" height="2" fill="#B45309" />
      <rect x="10" y="39" width="44" height="3" fill="#D97706" />
      <rect x="12" y="36" width="40" height="3" fill="#F59E0B" />
      {/* Temple Shikhara 1 (Main Kashi Vishwanath spire style) */}
      <path d="M26 36l6-22 6 22H26z" fill="#DC2626" />
      <path d="M32 14v-4" stroke="#DC2626" strokeWidth="1.5" />
      <circle cx="32" cy="9" r="1.5" fill="#F59E0B" />
      <path d="M32 9l3-2v4z" fill="#EA580C" />
      {/* Side Temple 2 */}
      <path d="M14 36l4-14 4 14H14z" fill="#EA580C" />
      <circle cx="18" cy="21" r="1" fill="#FDE68A" />
      {/* Side Temple 3 */}
      <path d="M42 36l4-16 4 16H42z" fill="#B45309" />
      <circle cx="46" cy="19" r="1" fill="#FDE68A" />
      {/* River Boat with Diya */}
      <path d="M12 49c2 2 8 2 12 0l-2 3h-8l-2-3z" fill="#78350F" />
      <circle cx="18" cy="49" r="1.5" fill="#FBBF24" />
    </svg>
  );
}

export function KarnatakaIcon({ className = "size-12" }) {
  // Mysore Palace & Hampi Chariot
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Karnataka - Mysore Palace">
      <circle cx="32" cy="32" r="28" fill="#F5F3FF" />
      {/* Plinth */}
      <rect x="10" y="48" width="44" height="5" rx="1" fill="#475569" />
      {/* Main Palace Wall */}
      <rect x="12" y="28" width="40" height="20" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      {/* Ornate Arch Openings */}
      <path d="M16 48v-8c0-1.7 1.3-3 3-3s3 1.3 3 3v8h-6z" fill="#9333EA" />
      <path d="M29 48v-11c0-2 1.5-3.5 3-3.5s3 1.5 3 3.5v11h-6z" fill="#9333EA" />
      <path d="M42 48v-8c0-1.7 1.3-3 3-3s3 1.3 3 3v8h-6z" fill="#9333EA" />
      {/* Central Tower */}
      <rect x="27" y="18" width="10" height="10" fill="#C084FC" />
      {/* Central Grand Pink Marble Dome */}
      <ellipse cx="32" cy="15" rx="7" ry="5.5" fill="#F43F5E" />
      <circle cx="32" cy="8.5" r="1.5" fill="#FBBF24" />
      <line x1="32" y1="8" x2="32" y2="10" stroke="#F59E0B" strokeWidth="1.5" />
      {/* Corner Towers and Chhatris */}
      <rect x="12" y="24" width="6" height="4" fill="#E2E8F0" />
      <ellipse cx="15" cy="22" rx="4" ry="3" fill="#FB7185" />
      <rect x="46" y="24" width="6" height="4" fill="#E2E8F0" />
      <ellipse cx="49" cy="22" rx="4" ry="3" fill="#FB7185" />
      {/* Decorative Golden Illumination Lights */}
      <circle cx="15" cy="28" r="1" fill="#FBBF24" />
      <circle cx="32" cy="22" r="1" fill="#FBBF24" />
      <circle cx="49" cy="28" r="1" fill="#FBBF24" />
    </svg>
  );
}

export function BiharIcon({ className = "size-12" }) {
  // Mahabodhi Temple, Bodh Gaya & Bodhi Tree
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Bihar - Mahabodhi Temple">
      <circle cx="32" cy="32" r="28" fill="#FEFCE8" />
      {/* Ground Terrace */}
      <rect x="10" y="50" width="44" height="4" rx="1" fill="#78350F" />
      <rect x="14" y="46" width="36" height="4" fill="#92400E" />
      {/* Main Pyramidal Shikhara */}
      <path d="M23 46l6-30h6l6 30H23z" fill="#D97706" />
      {/* Stepped horizontal tiers of temple niches */}
      <line x1="24.5" y1="41" x2="39.5" y2="41" stroke="#FEF08A" strokeWidth="1" />
      <line x1="26" y1="36" x2="38" y2="36" stroke="#FEF08A" strokeWidth="1" />
      <line x1="27.5" y1="31" x2="36.5" y2="31" stroke="#FEF08A" strokeWidth="1" />
      <line x1="29" y1="25" x2="35" y2="25" stroke="#FEF08A" strokeWidth="1" />
      {/* Golden Kalasa & Pinnacle */}
      <circle cx="32" cy="14" r="2.5" fill="#FBBF24" />
      <line x1="32" y1="11" x2="32" y2="13" stroke="#B45309" strokeWidth="1.5" />
      {/* Corner Stupas */}
      <path d="M16 46l2-10h2l2 10h-6z" fill="#B45309" />
      <circle cx="19" cy="35" r="1" fill="#FDE68A" />
      <path d="M42 46l2-10h2l2 10h-6z" fill="#B45309" />
      <circle cx="45" cy="35" r="1" fill="#FDE68A" />
      {/* Bodhi Tree sacred green leaves */}
      <circle cx="13" cy="26" r="4" fill="#16A34A" />
      <circle cx="16" cy="22" r="3" fill="#22C55E" />
      <path d="M14 30c0 4 2 8 4 10" stroke="#78350F" strokeWidth="1.5" />
    </svg>
  );
}

export function RajasthanIcon({ className = "size-12" }) {
  // Hawa Mahal & Amer Fort, Jaipur
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Rajasthan - Hawa Mahal">
      <circle cx="32" cy="32" r="28" fill="#FFF1F2" />
      {/* Base */}
      <rect x="10" y="50" width="44" height="4" fill="#9F1239" rx="1" />
      {/* Hawa Mahal Pyramidal tiers (5 tiers of pink sandstone jharokhas) */}
      {/* Tier 1 (Bottom) */}
      <rect x="12" y="43" width="40" height="7" fill="#E11D48" stroke="#9F1239" strokeWidth="1" />
      <circle cx="18" cy="46.5" r="2" fill="#FECDD3" />
      <circle cx="27" cy="46.5" r="2" fill="#FECDD3" />
      <circle cx="36" cy="46.5" r="2" fill="#FECDD3" />
      <circle cx="45" cy="46.5" r="2" fill="#FECDD3" />
      {/* Tier 2 */}
      <rect x="16" y="36" width="32" height="7" fill="#F43F5E" stroke="#9F1239" strokeWidth="1" />
      <circle cx="22" cy="39.5" r="1.8" fill="#FECDD3" />
      <circle cx="32" cy="39.5" r="1.8" fill="#FECDD3" />
      <circle cx="42" cy="39.5" r="1.8" fill="#FECDD3" />
      {/* Tier 3 */}
      <rect x="20" y="29" width="24" height="7" fill="#FB7185" stroke="#9F1239" strokeWidth="1" />
      <circle cx="26" cy="32.5" r="1.6" fill="#FECDD3" />
      <circle cx="38" cy="32.5" r="1.6" fill="#FECDD3" />
      {/* Tier 4 */}
      <rect x="24" y="22" width="16" height="7" fill="#FDA4AF" stroke="#9F1239" strokeWidth="1" />
      <circle cx="32" cy="25.5" r="1.5" fill="#9F1239" />
      {/* Topmost Tier and Dome */}
      <path d="M28 22l4-7 4 7H28z" fill="#E11D48" />
      <circle cx="32" cy="14" r="1.5" fill="#FBBF24" />
      {/* Jharokha arched crowns */}
      <path d="M30 15c1-1.5 3-1.5 4 0" stroke="#FBBF24" strokeWidth="1" />
    </svg>
  );
}

export function OdishaIcon({ className = "size-12" }) {
  // Konark Sun Temple Chariot Wheel
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Odisha - Konark Sun Temple Wheel">
      <circle cx="32" cy="32" r="28" fill="#ECFDF5" />
      {/* Sandstone Platform */}
      <rect x="10" y="52" width="44" height="4" rx="1" fill="#78350F" />
      {/* Famous 12-Spoke Stone Wheel */}
      <circle cx="32" cy="31" r="19" fill="#F59E0B" stroke="#B45309" strokeWidth="2.5" />
      {/* Outer Carved Rim */}
      <circle cx="32" cy="31" r="16" stroke="#92400E" strokeWidth="1" strokeDasharray="2 1.5" fill="#FDE68A" />
      {/* Inner Hub */}
      <circle cx="32" cy="31" r="5.5" fill="#78350F" stroke="#92400E" strokeWidth="1.5" />
      <circle cx="32" cy="31" r="2" fill="#FDE68A" />
      {/* 8 Major Spokes radiating out */}
      <line x1="32" y1="15" x2="32" y2="47" stroke="#78350F" strokeWidth="2" />
      <line x1="16" y1="31" x2="48" y2="31" stroke="#78350F" strokeWidth="2" />
      <line x1="20.7" y1="19.7" x2="43.3" y2="42.3" stroke="#78350F" strokeWidth="1.8" />
      <line x1="20.7" y1="42.3" x2="43.3" y2="19.7" stroke="#78350F" strokeWidth="1.8" />
      {/* Medallions on spokes */}
      <circle cx="32" cy="23" r="1.5" fill="#D97706" />
      <circle cx="32" cy="39" r="1.5" fill="#D97706" />
      <circle cx="24" cy="31" r="1.5" fill="#D97706" />
      <circle cx="40" cy="31" r="1.5" fill="#D97706" />
    </svg>
  );
}

export function TamilNaduIcon({ className = "size-12" }) {
  // Meenakshi Amman Dravidian Gopuram
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Tamil Nadu - Dravidian Gopuram">
      <circle cx="32" cy="32" r="28" fill="#F0FDFA" />
      {/* Stone Base */}
      <rect x="8" y="52" width="48" height="4" fill="#334155" rx="1" />
      {/* Tower Base Doorway */}
      <rect x="12" y="44" width="40" height="8" fill="#0D9488" stroke="#115E59" strokeWidth="1" />
      <path d="M27 52v-6c0-1.5 2-2.5 5-2.5s5 1 5 2.5v6H27z" fill="#134E4A" />
      {/* Multi-Tiered Stepped Gopuram Pyramid */}
      {/* Tier 1 */}
      <rect x="14" y="37" width="36" height="7" fill="#059669" />
      <circle cx="22" cy="40.5" r="1.5" fill="#FEF08A" />
      <circle cx="32" cy="40.5" r="1.5" fill="#FEF08A" />
      <circle cx="42" cy="40.5" r="1.5" fill="#FEF08A" />
      {/* Tier 2 */}
      <rect x="17" y="30" width="30" height="7" fill="#10B981" />
      <circle cx="24" cy="33.5" r="1.5" fill="#FEF08A" />
      <circle cx="32" cy="33.5" r="1.5" fill="#FEF08A" />
      <circle cx="40" cy="33.5" r="1.5" fill="#FEF08A" />
      {/* Tier 3 */}
      <rect x="20" y="23" width="24" height="7" fill="#34D399" />
      <circle cx="27" cy="26.5" r="1.5" fill="#FEF08A" />
      <circle cx="37" cy="26.5" r="1.5" fill="#FEF08A" />
      {/* Barrel Vault Roof (Sala Shikhara) */}
      <path d="M21 23c0-4 4-7 11-7s11 3 11 7H21z" fill="#059669" />
      {/* Golden Kalasams (Finials on top) */}
      <circle cx="26" cy="14" r="1.2" fill="#FBBF24" />
      <circle cx="29" cy="13.5" r="1.2" fill="#FBBF24" />
      <circle cx="32" cy="13" r="1.5" fill="#FBBF24" />
      <circle cx="35" cy="13.5" r="1.2" fill="#FBBF24" />
      <circle cx="38" cy="14" r="1.2" fill="#FBBF24" />
    </svg>
  );
}

export function TelanganaIcon({ className = "size-12" }) {
  // Charminar, Hyderabad
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Telangana - Charminar">
      <circle cx="32" cy="32" r="28" fill="#FDF4FF" />
      {/* Base */}
      <rect x="10" y="50" width="44" height="4" fill="#6B21A8" rx="1" />
      {/* 4 Grand Arches Structure */}
      <rect x="16" y="24" width="32" height="26" fill="#C084FC" stroke="#7E22CE" strokeWidth="1" />
      {/* Central Arch */}
      <path d="M24 50V34c0-4.4 3.6-8 8-8s8 3.6 8 8v16H24z" fill="#581C87" />
      {/* Upper Gallery & Balconies */}
      <rect x="15" y="20" width="34" height="4" fill="#A855F7" />
      <line x1="16" y1="22" x2="48" y2="22" stroke="#FAF5FF" strokeWidth="1" strokeDasharray="2 1.5" />
      {/* 4 Signature Tall Minarets */}
      {/* Left Outer Minaret */}
      <rect x="12" y="10" width="4.5" height="40" fill="#9333EA" />
      <circle cx="14.25" cy="9" r="2.5" fill="#FDE047" />
      <rect x="11" y="20" width="6.5" height="1.5" fill="#581C87" />
      <rect x="11" y="32" width="6.5" height="1.5" fill="#581C87" />
      {/* Right Outer Minaret */}
      <rect x="47.5" y="10" width="4.5" height="40" fill="#9333EA" />
      <circle cx="49.75" cy="9" r="2.5" fill="#FDE047" />
      <rect x="46.5" y="20" width="6.5" height="1.5" fill="#581C87" />
      <rect x="46.5" y="32" width="6.5" height="1.5" fill="#581C87" />
    </svg>
  );
}

export function PunjabIcon({ className = "size-12" }) {
  // Golden Temple (Harmandir Sahib), Amritsar
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-label="Punjab - Golden Temple">
      <circle cx="32" cy="32" r="28" fill="#EFF6FF" />
      {/* Amrit Sarovar (Holy Water Pool) */}
      <path d="M6 48c7 0 10-2 15-2s8 2 15 2 9-2 15-2 6 2 7 2v10H6V48z" fill="#38BDF8" />
      <path d="M6 52c6 0 9-1 14-1s9 1 15 1 8-1 15-1 8 1 8 1v6H6v-6z" fill="#0284C7" opacity="0.6" />
      {/* White Marble Causeway (Plinth) */}
      <rect x="14" y="44" width="36" height="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
      {/* Lower Marble Floor */}
      <rect x="18" y="34" width="28" height="10" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.8" />
      <path d="M30 44v-5c0-1 1-2 2-2s2 1 2 2v5h-4z" fill="#B45309" />
      {/* Golden Upper Floor */}
      <rect x="19" y="24" width="26" height="10" fill="#EAB308" stroke="#B45309" strokeWidth="1" />
      {/* Little Golden Chhatris (Domes) on Corners */}
      <ellipse cx="21" cy="22" rx="2.5" ry="2" fill="#FDE047" />
      <ellipse cx="43" cy="22" rx="2.5" ry="2" fill="#FDE047" />
      {/* Magnificent Central Golden Fluted Dome */}
      <ellipse cx="32" cy="18" rx="7.5" ry="5.5" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
      {/* Golden Lotus Finial (Kalasa) */}
      <circle cx="32" cy="11.5" r="1.8" fill="#FDE047" />
      <line x1="32" y1="10" x2="32" y2="12" stroke="#CA8A04" strokeWidth="1.2" />
    </svg>
  );
}

// Icon dictionary lookup helper
export const stateIconsMap = {
  "West Bengal": WestBengalIcon,
  "Maharashtra": MaharashtraIcon,
  "Delhi NCR": DelhiIcon,
  "Gujarat": GujaratIcon,
  "Uttar Pradesh": UttarPradeshIcon,
  "Karnataka": KarnatakaIcon,
  "Bihar": BiharIcon,
  "Rajasthan": RajasthanIcon,
  "Odisha": OdishaIcon,
  "Tamil Nadu": TamilNaduIcon,
  "Telangana & AP": TelanganaIcon,
  "Punjab & Haryana": PunjabIcon,
};

export function getStateIcon(stateName) {
  return stateIconsMap[stateName] || WestBengalIcon;
}
