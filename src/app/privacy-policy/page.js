import PageHero from "@/components/PageHero";
import { site, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "What information the Siddhi Info website collects, how enquiries are handled, analytics, and your rights.",
  path: "/privacy-policy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Privacy Policy", href: "/privacy-policy/" }]} />
      <section className="container-x py-12 sm:py-16">
        <div className="prose-post mx-auto max-w-3xl text-slate-700">
          <p>Last updated: 11 November 2026</p>
          <p>
            This website is operated by {site.legalName} (“we”, “us”), based in {site.address.city}, India. We handle
            personal data in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023.
          </p>

          <h2>Enquiry form</h2>
          <p>When you send the contact form, we receive:</p>
          <ul>
            <li>your name, mobile number, city, the service you chose and your project description;</li>
            <li>your business name, if you give it.</li>
          </ul>
          <p>
            The form sends these details as an email to our inbox ({site.email}) using Google&apos;s Gmail service. They are
            not saved in a database on this website. We use them only to reply to your enquiry and, if you go ahead, to
            prepare a quote. We keep enquiry emails for as long as needed to respond and for our ordinary business records,
            and delete them on request unless we must keep them by law.
          </p>
          <p>
            If you choose to contact us by WhatsApp, phone or your own email app instead, those services&apos; own privacy
            policies also apply.
          </p>

          <h2>Analytics</h2>
          {site.gtmId ? (
            <p>
              This site loads Google Tag Manager, which may run Google Analytics to measure visits (for example pages viewed,
              device type and approximate location). These tools can set cookies or similar identifiers in your browser. We use
              this information in aggregate to improve the website. You can block or clear these cookies in your browser
              settings, or use a browser extension that blocks analytics.
            </p>
          ) : (
            <p>This site does not currently use analytics tools.</p>
          )}

          <h2>Language preference</h2>
          <p>
            If you choose English, Hindi or Bengali, that choice is saved in your own browser (local storage) so the site
            remembers it. It is not sent to us.
          </p>

          <h2>Sharing</h2>
          <p>We do not sell or rent your personal information. We do not share enquiry details with third parties except the email and analytics providers named above.</p>

          <h2>Your rights</h2>
          <p>
            You can ask us to access, correct or delete the personal information we hold about you by writing to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Changes</h2>
          <p>We may update this policy. The latest version will always be on this page.</p>
        </div>
      </section>
    </>
  );
}
