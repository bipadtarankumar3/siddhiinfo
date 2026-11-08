import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppQrCard from "@/components/india/WhatsAppQrCard";
import { site, whatsappLink, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact Us — Free Consultation for Your Business",
  description: "Talk to Siddhi Info for a free consultation on websites, online stores, billing software, WhatsApp automation and local SEO. Reply within a few working hours.",
  path: "/contact/",
});

export default function ContactPage() {
  const tel = site.phone.replace(/\s/g, "");
  const items = [
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with us", href: whatsappLink(), external: true },
    { icon: Phone, label: "Call", value: site.phone, href: `tel:${tel}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Location", value: `${site.address.city}, ${site.address.region} — serving all of India` },
    { icon: Clock, label: "Hours", value: site.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s grow your business together"
        text="Tell us a little about your business. We’ll reply with honest advice and a clear quote — no pressure, no jargon."
        crumbs={[{ label: "Contact", href: "/contact/" }]}
      />
      <section className="container-x grid gap-10 py-16 sm:py-20 lg:grid-cols-5">
        <div className="card p-6 sm:p-8 lg:col-span-3">
          <h2 className="text-2xl font-bold text-ink">Request a free consultation</h2>
          <p className="mt-1 mb-8 text-slate-600">Fill this in and send it to us on WhatsApp or email in one tap.</p>
          <ContactForm />
        </div>
        <div className="space-y-4 lg:col-span-2">
          <WhatsAppQrCard />
          {items.map(({ icon: I, label, value, href, external }) => {
            const inner = (
              <>
                <span className="icon-tile size-11 shrink-0">
                  <I className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-slate-500">{label}</span>
                  <span className="block font-semibold text-ink">{value}</span>
                </span>
              </>
            );
            return href ? (
              <a key={label} href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })} className="card card-hover flex items-center gap-4 p-5">
                {inner}
              </a>
            ) : (
              <div key={label} className="card flex items-center gap-4 p-5">{inner}</div>
            );
          })}
        </div>
      </section>
    </>
  );
}
