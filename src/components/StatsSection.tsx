import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-[#fdf7eb]">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`text-center transition-all duration-800 delay-100 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-5xl text-[#78602C] font-bold  mb-2 transition-transform duration-300 hover:scale-110">
              30+
            </div>
            <p className="text-gray-600">Years of expertise</p>
          </div>
          <div
            className={`text-center transition-all duration-800 delay-300 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-5xl font-semibold text-[#78602C] mb-2 transition-transform duration-300 hover:scale-110">
              Inter<span className="text-4xl">national</span>
            </div>
            <p className="text-gray-600">International projects</p>
          </div>
          <div
            className={`text-center transition-all duration-800 delay-500 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gray-600 text-sm">
              At PJPB, we are committed to delivering the highest quality real
              estate solutions to our clients. With over 30 years of experience
              in the industry, we have established ourselves as a trusted
              partner for all your real estate needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
