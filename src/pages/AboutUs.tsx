import AboutHero from "@/components/AboutHero";
import AboutIntro from "@/components/AboutIntro";
import AboutMissionSection from "@/components/AboutMissionSection";
import AboutTeamSection from "@/components/AboutTeamSection";
import AboutVisionSection from "@/components/AboutVisionSection";
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <AboutIntro />
      <AboutVisionSection />
      <AboutMissionSection />
      <AboutTeamSection />
    </div>
  );
};

export default AboutUs;
