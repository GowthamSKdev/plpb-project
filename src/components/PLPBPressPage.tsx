import React from "react";

import press from "/assets/Images/press.jpg";

import NewsBanner from "/assets/Images/newsbanner.png";

import news1 from "/assets/Images/Screenshot 2025-07-15 154743.png";
import news2 from "/assets/Images/Screenshot 2025-07-15 154759.png";
import news3 from "/assets/Images/Screenshot 2025-07-15 154828.png";
import news4 from "/assets/Images/Screenshot 2025-07-15 154845.png";
import news5 from "/assets/Images/Screenshot 2025-07-15 154900.png";
import news6 from "/assets/Images/Screenshot 2025-07-15 154917.png";
import news7 from "/assets/Images/Screenshot 2025-07-15 154940.png";
import news8 from "/assets/Images/Screenshot 2025-07-15 155016.png";
import news9 from "/assets/Images/Screenshot 2025-07-15 155034.png";
import news10 from "/assets/Images/Screenshot 2025-07-15 155126.png";
import news11 from "/assets/Images/Screenshot 2025-07-15 155143.png";
import news12 from "/assets/Images/Screenshot 2025-07-15 155158.png";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  image: string;
  category: string;
}

const PLPBPressPage: React.FC = () => {
  const newsData: NewsItem[] = [
    {
      id: 1,
      date: "July 13, 2025",
      title:
        "Bioclimatic Townships: A Paradigm Shift in Sustainable Urban Living",
      image: news1,
      category: "Sustainability",
    },
    {
      id: 2,
      date: "July 9, 2025",
      title:
        "PLPB Leads the Way in Senior Living with Future-Ready Communities",
      image: news2,
      category: "Senior Living",
    },
    {
      id: 3,
      date: "July 10, 2025",
      title:
        "Timeless PLPB: State of The Art Infrastructure to Support Senior Living",
      image: news3,
      category: "Infrastructure",
    },
    {
      id: 4,
      date: "July 14, 2025",
      title: "PLPB is Continuously Working Towards Eco-friendly Developments",
      image: news4,
      category: "Environment",
    },
    {
      id: 5,
      date: "July 5, 2025",
      title: "The Wellness City: Built for Life",
      image: news5,
      category: "Wellness",
    },
    {
      id: 6,
      date: "April 6, 2025",
      title: "Summit Singla: PLPB Creates Spaces that Respect the Earth",
      image: news6,
      category: "Leadership",
    },
    {
      id: 7,
      date: "March 31, 2025",
      title: "Summit Singla on Infra Boost on Patiala Road",
      image: news7,
      category: "Infrastructure",
    },
    {
      id: 8,
      date: "April 6, 2025",
      title:
        "Summit Singla, CEO, PLPB Group, Recognised with Iconic Sustainable Township Developer",
      image: news8,
      category: "Awards",
    },
    {
      id: 9,
      date: "May 9, 2025",
      title:
        "Loni Bansal, MD, PLPB Group Comments on Futuristic Infrastructure",
      image: news9,
      category: "Leadership",
    },
    {
      id: 10,
      date: "March 28, 2025",
      title: "Setting Infrastructure Standards with Artelia at IndusLand Park",
      image: news10,
      category: "Infrastructure",
    },
    {
      id: 11,
      date: "Nov 10, 2024",
      title: "The Wellness City: India's First Bioclimatic Township",
      image: news11,
      category: "Innovation",
    },
    {
      id: 12,
      date: "Feb 20, 2025",
      title: "PLPB Partners with Surbana Jurong to Develop Induspark",
      image: news12,
      category: "Partnership",
    },
  ];

  const featuredNews: NewsItem = newsData[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gray-400 h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage: `url(${press})`,
            backgroundSize: "cover", // optional: ensures full coverage
            backgroundPosition: "center", // optional: centers the image
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">PRESS RELEASE</h1>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest news and developments from PLPB Group
          </p> */}
        </div>
      </section>

      {/* Second Section - Left Image, Right Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="bg-gray-300 rounded-lg shadow-lg"
                style={{
                  //   width: "807.6px",
                  height: "656px",
                  backgroundImage: `url(${NewsBanner})`,
                  backgroundSize: "cover", // optional: ensures full coverage
                  backgroundPosition: "center", // optional: centers the image
                }}
              ></div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">
                {featuredNews.date}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {featuredNews.title}
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                PLPB Group continues to pioneer sustainable urban development
                with innovative bioclimatic townships that prioritize
                environmental harmony and modern living standards. Our
                commitment to green infrastructure and eco-friendly design
                principles sets new benchmarks in the real estate industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - 12 Images Grid (3 per row) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.map((news, index: number) => (
              <div
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <div
                    className="w-full h-[556px] bg-gray-300 group-hover:scale-105 transition-transform duration-300"
                    style={{
                      width: "445px",
                      height: "556px",
                      backgroundImage: `url(${news.image})`,
                      backgroundSize: "cover", // optional: ensures full coverage
                      backgroundPosition: "center", // optional: centers the image
                    }}
                  ></div>
                </div>
                <div className="">
                  <p>{news.date}</p>
                  <p>{news.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PLPBPressPage;
