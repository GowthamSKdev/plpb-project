import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import MediaIMG1 from "/assets/Images/media-img-1.png";
import MediaIMG2 from "/assets/Images/media-img-2.png";
import MediaIMG3 from "/assets/Images/media-img-3.png";

export const NewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-12 text-[#78602C] transition-all duration-800 ${
            isVisible
              ? "animate-fade-in opacity-100"
              : "opacity-0 translate-y-8"
          }`}
        >
          News and Media
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            className={`transition-all duration-800 delay-100 hover:shadow-lg hover:-translate-y-2 bg-primary ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader>
              <img
                src={MediaIMG1}
                alt="News 1"
                className="w-full h-80 object-cover object-top rounded-t-lg transition-transform duration-300 hover:scale-110"
              />
            </CardHeader>
            <CardContent className="bg-[#1C3260] text-white pt-6">
              <CardTitle className="text-xl font-normal max-w-[320px] mx-auto mb-2">
                {" "}
                PLPB Partners with Surbana Jurong to Develop Punjab’s New
                Industrial Hub
              </CardTitle>
              {/* <p className="text-gray-600 text-sm">
                Stay updated with our latest projects and developments in the real estate sector.
              </p> */}
            </CardContent>
          </Card>

          <Card
            className={`transition-all duration-800 delay-300 hover:shadow-lg hover:-translate-y-2 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader>
              <img
                src={MediaIMG2}
                alt="News 2"
                className="w-full h-80 object-top object-cover rounded-t-lg transition-transform duration-300 hover:scale-110"
              />
            </CardHeader>
            <CardContent className="bg-[#1C3260] text-white pt-6">
              <CardTitle className="text-xl font-normal max-w-[300px] mx-auto mb-2 text-center">
                Raising Infrastructure Standards with Artelia at IndusPark
              </CardTitle>
              {/* <p className="text-gray-600 text-sm">
                Exploring our commitment to sustainable development and green
                building practices.
              </p> */}
            </CardContent>
          </Card>

          <Card
            className={`transition-all duration-800 delay-500 hover:shadow-lg hover:-translate-y-2 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader>
              <img
                src={MediaIMG3}
                alt="News 3"
                className="w-full h-80 object-top object-cover rounded-t-lg transition-transform duration-300 hover:scale-110"
              />
            </CardHeader>
            <CardContent className="bg-[#1C3260] text-white pt-6">
              <CardTitle className="text-xl font-normal max-w-[300px] mx-auto mb-2">
                PLPB Leads the Way in Senior Living with Future-Ready
                Communities
              </CardTitle>
              {/* <p className="text-gray-600 text-sm">
                How our developments are making a positive impact on local
                communities.
              </p> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
