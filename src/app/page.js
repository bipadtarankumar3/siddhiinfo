import Hero from "@/components/home/Hero";
import Collaboration from "@/components/home/Collaboration";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import Portfolio from "@/components/home/Portfolio";
import Industries from "@/components/home/Industries";
import WhyChoose from "@/components/home/WhyChoose";
import Process from "@/components/home/Process";
import TechStack from "@/components/home/TechStack";
import Testimonials from "@/components/home/Testimonials";
import SectionHead from "@/components/SectionHead";
import PricingCards from "@/components/PricingCards";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import { homeFaqs } from "@/lib/data";
import { site, pageMeta } from "@/lib/site";

const homeTitle = "Website Development Company in India | Siddhi Info – Your Digital Growth Partner";
const homeDescription =
  "Siddhi Info is a Kolkata-based website and software development company for Indian businesses — affordable websites from ₹7,999, e-commerce, mobile apps, CRM/ERP, GST billing, WhatsApp automation and digital marketing.";

export const metadata = {
  ...pageMeta({ title: homeTitle, description: homeDescription, path: "/" }),
  title: { absolute: homeTitle },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Collaboration />
      <ServicesShowcase />
      <Portfolio />
      <Industries />
      <WhyChoose />
      <Process />
      <section className="bg-lavender-mesh py-20 sm:py-28" aria-labelledby="pricing-title">
        <div className="container-x">
          <SectionHead
            id="pricing-title"
            eyebrow="Pricing"
            title={<>Honest pricing for <span className="text-gradient">growing businesses</span></>}
            text={`Clear starting prices, a written quote and milestone payments. Based in ${site.address.city}, serving all of India.`}
          />
          <div className="mt-16">
            <PricingCards />
          </div>
        </div>
      </section>
      <TechStack />
      <Testimonials />
      <Faq items={homeFaqs} title="Questions business owners ask us" />
      <CtaBanner />
    </>
  );
}
