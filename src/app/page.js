import Hero from "@/components/home/Hero";
import DigitalDukaanHero from "@/components/home/DigitalDukaanHero";
import DesiValuesShowcase from "@/components/india/DesiValuesShowcase";
import Collaboration from "@/components/home/Collaboration";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import Portfolio from "@/components/home/Portfolio";
import Industries from "@/components/home/Industries";
import PanIndiaCoverage from "@/components/india/PanIndiaCoverage";
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

const homeTitle = "Website & Digital Store Development for Indian Small Businesses | Siddhi Info";
const homeDescription =
  "Siddhi Info helps Indian small businesses launch online stores, mobile apps, websites, GST billing and WhatsApp automation starting from ₹4,999. Serving all 28 Indian States & 8 UTs.";

export const metadata = {
  ...pageMeta({ title: homeTitle, description: homeDescription, path: "/" }),
  title: { absolute: homeTitle },
};

export default function Home() {
  return (
    <>
      <Hero />
      <DigitalDukaanHero />
      <DesiValuesShowcase />
      <Collaboration />
      <ServicesShowcase />
      <Portfolio />
      <Industries />
      <PanIndiaCoverage />
      <WhyChoose />
      <Process />
      <section className="bg-lavender-mesh py-20 sm:py-28" aria-labelledby="pricing-title">
        <div className="container-x">
          <SectionHead
            id="pricing-title"
            eyebrow="Pricing / मूल्यतालिका"
            title={<>Honest pricing for <span className="text-gradient">Indian businesses</span></>}
            text={`Clear starting prices, milestone payments and 0% marketplace commission. Based in ${site.address.city}, serving all 28 Indian States.`}
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
