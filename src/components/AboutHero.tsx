import heroImage from "/assets/Images/illustration-construction-site.jpg";
import AboutVideo from "/assets/videos/Construction.mp4";
const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <video
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src={AboutVideo} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-base leading-tight mb-8">
          DEVELOPING SUSTAINABLE COMMUNITIES
          <br />
          <span className="text-pipb-light-green">
            THAT CAN CO-EXIST WITH NATURE
          </span>
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;
