import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <TestimonialSection />
      <NewsSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
