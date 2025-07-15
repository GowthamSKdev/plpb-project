import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import logo from "/assets/Images/PLPB.png";

export const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="bg-[#1C3260] text-white py-12">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            className={`transition-all duration-800 delay-100 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-2xl font-bold mb-4">
              <img src={logo} alt="PLPB image" height={300} />
            </div>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125" />
              <Twitter className="w-6 h-6 hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125" />
              <Instagram className="w-6 h-6 hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125" />
              <Linkedin className="w-6 h-6 hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125" />
              <Youtube className="w-6 h-6 hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125" />
            </div>
          </div>

          <div
            className={`transition-all duration-800 delay-200 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`transition-all duration-800 delay-300 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold mb-4">Projects</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  The Wellness City
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Induspark
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Residential
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Commercial
                </a>
              </li> */}
            </ul>
          </div>

          <div
            className={`transition-all space-y-4 duration-800 delay-400 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="text-sm  space-y-4 font-base">
              <p>
                <b>Sale Office: </b> 2nd Floor, SCO 10, Airport Road, Sector 80,
                Sahibzada Ajit Singh Nagar, Punjab
              </p>
              <p>
                <b>Corporate Office:</b> SCO 131-132, Shopping Plaza, 17C,
                Sector 17, Chandigarh
              </p>
              <p> +91-92094-93094</p>
              <p> contact@plpbinfra.com</p>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-gray-700 mt-8 pt-8 text-center text-sm transition-all duration-800 delay-500 ${
            isVisible
              ? "animate-fade-in opacity-100"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p>&copy; 2024 PJPB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
