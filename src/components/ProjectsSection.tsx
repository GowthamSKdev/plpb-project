import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import bannerimg2 from "/assets/Images/banner-img-2.jpg";
import WellnessCity from "/assets/Images/wellness city.png";
import Induspark from "/assets/Images/Induspark.png";
// import IndusparkLogo from "/assets/Images/indusparklogo.png";

import DesignImg from "/assets/Images/design.png";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export const ProjectsSection = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref1}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <div
            className={`transition-all duration-800 ${
              isVisible1
                ? "animate-fade-in-left opacity-100"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className=" border-l-4 border-[#78602C] pl-10">
              <h2 className="text-4xl font-medium mb-6">
                Building the Future, Thoughtfully
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              At Prime Land Promoters & Builders, we don’t just build homes — we
              plan environments that help people live better. With over 30 years
              of experience in land development and real estate, our focus has
              always been long-term: what makes a home liveable, a township
              sustainable, and a neighbourhood truly feel like one.
            </p>
            <p className="text-gray-600">
              From India’s first bioclimatic township to projects shaped by
              light, air, and ease, we design with care — not clutter. Our work
              is led by purpose, rooted in trust, and backed by a deep
              understanding of how people want to live now — and how that may
              change tomorrow.
            </p>
            <br />
            <p className="text-gray-600">
              Every project is a step toward a calmer, smarter, more balanced
              way of life.
            </p>
          </div>
          <div
            className={`transition-all duration-800 delay-200 ${
              isVisible1
                ? "animate-fade-in-right opacity-100"
                : "opacity-0 translate-x-8"
            }`}
          >
            <img
              src={bannerimg2}
              alt="Modern development project"
              className="w-full h-96 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div
          ref={ref2}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <div
            className={`transition-all duration-800 ${
              isVisible2
                ? "animate-fade-in-left opacity-100"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src={WellnessCity}
              alt="Wellness city project"
              className="w-full h-96 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div
            className={`flex items-center transition-all duration-800 delay-200 ${
              isVisible2
                ? "animate-fade-in-right opacity-100"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div>
              <div className=" rounded-lg inline-block mb-4 transition-transform duration-300 hover:scale-110">
                <div className="w-16 h-16 rounded">
                  <img src={DesignImg} alt="Design" />
                </div>
              </div>
              <div className=" border-l-4 border-[#78602C] pl-10">
                <h3 className="text-3xl font-medium mb-4">THE WELLNESS CITY</h3>
                <p className="text-gray-600 mb-4 uppercase">Rajpura</p>
              </div>
              <p className="text-gray-600">
                A revolutionary development in contemporary Real Estate. Located
                on a pristine land parcel of over 90 acres on the Mohali-Rajpura
                highway, The Wellness City is India's first large-scale real
                estate development project that will focus on holistic
                wellbeing. Designed and planned by applying the principles of
                bioclimatic architecture, the philosophy is to develop a
                community in harmony with nature and not against it.
              </p>
              <Link
                to={"#"}
                className="flex items-center gap-2 mt-2 text-[#78602C]"
              >
                Experience Wellness <ArrowRight className="h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div ref={ref3} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-800 ${
              isVisible3
                ? "animate-fade-in-left opacity-100"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src={Induspark}
              alt="Induspark project"
              className="w-full h-96 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div
            className={`flex items-center transition-all duration-800 delay-200 ${
              isVisible3
                ? "animate-fade-in-right opacity-100"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div>
              {/* <img src={IndusparkLogo} alt="induspark logo" height={24} /> */}
              <div className=" border-l-4 border-[#78602C] pl-10">
                <h3 className="text-3xl font-medium mb-4">INDUSPARK</h3>
                <p className="text-gray-600 mb-4 uppercase">
                  Rajpura - Ambala Highway
                </p>
              </div>
              <p className="text-gray-600">
                A revolutionary development in contemporary Real Estate. Located
                on a pristine land parcel of over 90 acres on the Mohali-Rajpura
                highway, The Wellness City is India's first large-scale real
                estate development project that will focus on holistic
                wellbeing. Designed and planned by applying the principles of
                bioclimatic architecture, the philosophy is to develop a
                community in harmony with nature and not against it.
              </p>
              <Link
                to={"#"}
                className="flex items-center gap-2 mt-2 text-[#78602C]"
              >
                Experience Growth <ArrowRight className="h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
