import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import WhoCanBenefit from "@/components/WhoCanBenefit";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Online Speech Therapy for Children in India | Communiquecate"
        description="Affordable online speech therapy for children in India by certified speech-language pathologists. Book expert online sessions with Communiquecate."
        canonicalPath="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Communiquecate",
          url: "https://communiquecate.in/",
          description:
            "Online speech therapy for children in India with certified speech-language pathologists.",
          areaServed: "India",
        }}
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <WhoCanBenefit />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
