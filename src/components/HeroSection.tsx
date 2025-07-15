import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import BannerVideo from "/assets/videos/Home.mp4";

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative h-screen flex items-center justify-start bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
      <video
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  transition-opacity duration-1000"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src={BannerVideo} type="video/mp4" />
      </video>

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1
            className={`text-8xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible
                ? "animate-slide-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            Reimagining
          </h1>
          <p
            className={`text-4xl text-white/90 mb-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "animate-slide-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            Quality, comfort, and distinction
          </p>
        </div>
      </div>
    </section>
  );
};
