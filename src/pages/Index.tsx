import HeroSection from "@/components/portfolio/HeroSection";
import GlobalFootprint from "@/components/portfolio/GlobalFootprint";
import ImpactCarousel from "@/components/portfolio/ImpactCarousel";
import CreativeGallery from "@/components/portfolio/CreativeGallery";
import SalesEngineLab from "@/components/portfolio/SalesEngineLab";
import ProfessionalTimeline from "@/components/portfolio/ProfessionalTimeline";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <GlobalFootprint />
      <ImpactCarousel />
      <CreativeGallery />
      <SalesEngineLab />
      <ProfessionalTimeline />
      <Footer />
    </main>
  );
};

export default Index;
