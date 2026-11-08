import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Siddhi Info on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 transition hover:scale-105 focus-visible:outline-offset-4"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
