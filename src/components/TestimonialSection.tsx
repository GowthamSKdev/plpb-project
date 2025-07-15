import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import Home2 from "/assets/videos/Home2.mp4";

import Ravi from "/assets/Images/Ravi.png";
import heroPlayVideo from "/assets/Images/HeroPlayvideo.png";
export const TestimonialSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <div className="container-fluid">
        <video className="" loop autoPlay muted playsInline>
          <source src={Home2} type="video/mp4" />
        </video>
      </div>
      <section className="py-16 bg-[#e8e0d1]">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 transition-all duration-800 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-6xl font-bold text-[#78602C] mb-8">
              Heartfelt Gratitude
            </h2>
          </div>

          <div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div
              className={`transition-all duration-800 ${
                isVisible
                  ? "animate-fade-in-left opacity-100"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <img
                src={Ravi}
                alt="Testimonial person"
                className="w-full h-[800px] object-cover rounded-lg grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
              />
            </div>
            <div
              className={`transition-all duration-800 delay-200 ${
                isVisible
                  ? "animate-fade-in-right opacity-100"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="text-9xl text-[#78602C] mb-4 animate-scale-in">
                ❝
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                Gurudev Sri Sri Ravi Shankar has united people of different
                races, traditions, economic and social status, and
                nationalities. This community, spanning 156 countries, has
                created a one-world spiritual family. Gurudev's message is
                simple: 'Love and wisdom can prevail over hatred and violence'.
                This message is not just a slogan, but through The Art of Living
                has been and continues to be translated into action and results.
              </blockquote>
              <cite className="text-gray-600">
                - Gurdev Sri Sri Ravi Shankar
              </cite>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
