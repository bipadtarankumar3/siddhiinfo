import PageHero from "@/components/PageHero";
import { site, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Siddhi Info collects, uses and protects your information.",
  path: "/privacy-policy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Privacy Policy", href: "/privacy-policy/" }]} />
      <section className="container-x py-12 sm:py-16">
        <div className="prose-post mx-auto max-w-3xl text-slate-700">
          <p>Last updated: 8 November 2026</p>
          <p>
            This website is operated by {site.legalName} (“we”, “us”). We respect your privacy and handle personal data
            in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>Details you choose to share when you contact us — such as name, phone number, email, business name and city.</li>
            <li>Basic, anonymous usage data (pages visited, device type) if analytics are enabled.</li>
          </ul>
          <h2>How we use it</h2>
          <ul>
            <li>To reply to your enquiry and provide quotes or services you request.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p>We do not sell or rent your personal information to anyone.</p>
          <h2>Contact forms and WhatsApp</h2>
          <p>
            Our contact form does not store your data on our website. It prepares a message that you send to us through
            WhatsApp or your email app; those services&apos; own privacy policies apply to that message.
          </p>
          <h2>Your rights</h2>
          <p>
            You can ask us to access, correct or delete the personal information we hold about you by writing to{" "}
            <a href={`mailto:${site.email}`} className="text-brand-600 underline">{site.email}</a>.
          </p>
          <h2>Changes</h2>
          <p>We may update this policy from time to time. The latest version will always be on this page.</p>
        </div>
      </section>
    </>
  );
}
