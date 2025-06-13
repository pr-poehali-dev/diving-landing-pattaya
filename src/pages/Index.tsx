import HeroSection from "@/components/HeroSection";
import ToursSection from "@/components/ToursSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ToursSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
