import PageHero from "@/components/PageHero";
import { site, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms of Service",
  description: "Terms that apply to using the Siddhi Info website and services.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" crumbs={[{ label: "Terms", href: "/terms/" }]} />
      <section className="container-x py-12 sm:py-16">
        <div className="prose-post mx-auto max-w-3xl text-slate-700">
          <p>Last updated: 8 November 2026</p>
          <h2>Use of this website</h2>
          <p>
            The content on {site.url.replace("https://", "")} is for general information about our services. Prices shown
            are starting prices and may change; the final scope and price for any project is confirmed in a written quote.
          </p>
          <h2>Projects and payments</h2>
          <ul>
            <li>Work begins after the quote is approved and the agreed advance is received.</li>
            <li>Third-party charges (domains, hosting renewals, payment gateways, ads, WhatsApp API) are billed as per the provider.</li>
            <li>Applicable GST is charged in addition to quoted prices.</li>
          </ul>
          <h2>Ownership</h2>
          <p>
            On full payment, the website, content and code created specifically for your project belong to you. Domains are
            registered in your business name.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            We work hard to deliver reliable solutions, but we are not liable for indirect losses, or for outages caused by
            third-party providers outside our control.
          </p>
          <h2>Governing law</h2>
          <p>These terms are governed by the laws of India.</p>
          <h2>Contact</h2>
          <p>Questions? Email <a href={`mailto:${site.email}`} className="text-brand-600 underline">{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
