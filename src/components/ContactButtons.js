import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/*
  WhatsApp button that degrades safely: while no verified WhatsApp number is
  configured, it becomes a "request a call back" link to the contact form
  instead of pointing at a placeholder number.
*/
export function WhatsAppButton({ text, label = "Chat on WhatsApp", fallbackLabel = "Request a call back", className = "", onDark = false }) {
  const href = whatsappLink(text);
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`btn btn-whatsapp ${className}`}>
        <WhatsAppIcon className="size-5" /> {label}
        <span className="sr-only"> (opens WhatsApp)</span>
      </a>
    );
  }
  return (
    <Link href="/contact/#enquiry" className={`btn ${onDark ? "btn-glass" : "btn-outline"} ${className}`}>
      <PhoneCall className="size-4" aria-hidden="true" /> {fallbackLabel}
    </Link>
  );
}

export function ConsultButton({ label = "Book a free consultation", className = "btn-primary", service }) {
  const href = service ? `/contact/?service=${encodeURIComponent(service)}#enquiry` : "/contact/#enquiry";
  return (
    <Link href={href} className={`btn ${className}`}>
      {label} <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}
