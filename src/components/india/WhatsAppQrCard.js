import QRCode from "qrcode";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

/*
  Scannable QR code generated at build time from the verified WhatsApp link in
  src/lib/site.js. Renders nothing until a WhatsApp number is configured, so a
  decorative or wrong QR code can never be shown.
*/
export default async function WhatsAppQrCard({ className = "" }) {
  const href = whatsappLink("Hi Siddhi Info, I'd like to discuss a project for my business.");
  if (!href) return null;
  const svg = await QRCode.toString(href, { type: "svg", margin: 1, errorCorrectionLevel: "M", color: { dark: "#061430", light: "#ffffff" } });

  return (
    <div className={`card p-6 text-center ${className}`}>
      <h3 className="text-lg font-bold text-ink">Scan to chat on WhatsApp</h3>
      <p className="mt-1 text-sm text-slate-600">Point your phone camera at the code, or tap the button.</p>
      <div
        role="img"
        aria-label="QR code that opens a WhatsApp chat with Siddhi Info"
        className="mx-auto my-5 size-44 rounded-xl bg-white p-2 ring-1 ring-slate-200 [&_svg]:size-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
        <WhatsAppIcon className="size-5" /> Open WhatsApp
      </a>
    </div>
  );
}
