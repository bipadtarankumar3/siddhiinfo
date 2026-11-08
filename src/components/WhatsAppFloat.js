import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Siddhi Info on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-3 z-40 grid size-12 place-items-center sm:bottom-5 sm:right-5 sm:size-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 transition hover:scale-105 focus-visible:outline-offset-4"
    >
      <WhatsAppIcon className="size-6 sm:size-7" />
    </a>
  );
}
