"use client";

import { usePathname } from "next/navigation";

// Renders the public site's header/footer everywhere except the admin area.
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return children;
}
