import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import DisplayHomeSection from "@/components/DisplayHomeSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import UniqueDesignsSection from "@/components/UniqueDesignsSection";
import HomeDesignsSection from "@/components/HomeDesignsSection";
import QuoteSection from "@/components/QuoteSection";
import InclusionsSection from "@/components/InclusionsSection";
import CTASection from "@/components/CTASection";
import WhyUsSection from "@/components/WhyUsSection";
import NewsletterSection from "@/components/NewsletterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <DisplayHomeSection />
      <ServicesSection />
      <PortfolioSection />
      <UniqueDesignsSection />
      <HomeDesignsSection />
      <QuoteSection />
      <InclusionsSection />
      <CTASection />
      <WhyUsSection />
      <NewsletterSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
