import team1 from "/assets/Images/SanjivSingla.png";
import team2 from "/assets/Images/DevrajBansal.png";
import team3 from "/assets/Images/SumitSingla.png";
import team4 from "/assets/Images/LohitBansal.png";
import team5 from "/assets/Images/SahilBansal.png";

const AboutTeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: team1,
      name: "Sanjiv Singla",
      quote:
        "We are delighted to bring The Wellness City to the greater tricity region. With over 30 Years shared of shared expertise as investors in land banks and real estate trading, we are confident of our ability to not just deliver on but to surpass the expectations of our esteemed stakeholders. It is also a delightful to have achievement to have the opportunity to host The Art Of Living Foundation's first and largest Ashram in North India. I wish you well, and Thank You for all the support you have granted to The Wellness City.",
      position: "row-start-1 col-start-1",
    },
    {
      id: 2,
      image: team2,
      name: "Devraj Bansal",
      quote:
        "The Wellness City give the region exactly what is needed - a large scale real estate development project that delivers the next evolutionary step in living. We determined to provide a solution for every type of Home Buyer. At the same time, a strong Focus on the holistic wellbeing of every resident. We are inspired by the 8 Pillars of Wellness, and have tried to ensure harmony between each of them by prudently incorporating the 5 Elements of Nature. The end result, we hope is one that is able to help you and your loved ones achieve your goals of holistic wellbeing.",
      position: "row-start-1 col-start-2",
    },
    {
      id: 3,
      image: team3,
      name: "Sumit Singla",
      quote:
        "The name The Wellness City speaks for itself - we wish to help others in realizing their wellness goals. With over 20 years of shared experience in the real estate industry, we are driven by innovation at PLPB Infra. As the followers of The Art Of Living Foundation we discussed the concept with the organization, and received encouraging support. The Wellness City will help us achieve our vision of serving others.",
      position: "row-start-2 col-start-1",
    },
    {
      id: 4,
      image: team4,
      name: "Lohit Bansal",
      quote:
        "The Wellness City is the meaningful and practical amalgamation of a business plan with divine purpose. The project is divided into residential plots, premium villas, low-rise apartments, a commercial complex, the clubhouse, and an the Ashram that will be operated by The Art of Living Foundation. Our goal is to elevate the home ownership experience into a complete solution and experience that allows buyers to positively influence their holistic wellbeing.",
      position: "row-start-2 col-start-2",
    },
    {
      id: 5,
      image: team5,
      name: "Sahil Bansal",
      quote:
        "Each aspect of construction is focused on sustainability. Keeping in mind the core ethos of The Wellness City, we are determined to incorporate the best practices during the construction phase of the project. As much as possible, all materials that are sourced for the project are environmentally friendly. All these factors come together to make The Wellness City an innovation real estate development project in the region with many pioneering aspects.",
      position: "row-start-3 col-start-1 col-span-2 justify-self-center",
    },
  ];

  return (
    <section className="py-20 bg-[#e8e0d1]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#78602C] mb-4">
            Led with <span className="text-pipb-green">Purpose</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`flex flex-col lg:flex-row gap-6 items-center mt-20 ${
                member.id === 5
                  ? "lg:col-span-2 lg:justify-center lg:max-w-4xl lg:mx-auto"
                  : ""
              }`}
            >
              {/* Photo */}
              <div className="flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-96 w-80 object-cover shadow-lg"
                />
              </div>

              {/* Quote and Name */}
              <div className="flex-1">
                {/* Quote Icon */}
                <div className="text-5xl leading-none text-[#78602C] animate-scale-in">
                  ❝
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed text-sm italic">
                  {member.quote}
                </blockquote>

                {/* Name */}
                <div className="pt-4">
                  <p className="font-medium text-pipb-brown text-2xl">
                    {member.name}
                  </p>
                  <p className="text-muted-foreground">Partner</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
