import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

// Floating WhatsApp button — only rendered once a verified number is set in src/lib/site.js
export default function WhatsAppFloat() {
  const href = whatsappLink();
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Siddhi Info on WhatsApp (opens WhatsApp)"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-3 z-30 grid size-13 place-items-center rounded-full bg-[#0b7a4b] text-white shadow-lg transition hover:bg-[#096640] sm:bottom-5 sm:right-5 sm:size-14"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
