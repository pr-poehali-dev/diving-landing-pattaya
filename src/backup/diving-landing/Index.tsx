import HeroSection from "./HeroSection";
import ToursSection from "./ToursSection";
import GallerySection from "./GallerySection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import { Toaster } from "sonner";

const DivingLandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ToursSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Toaster position="top-right" />
    </div>
  );
};

export default DivingLandingPage;
