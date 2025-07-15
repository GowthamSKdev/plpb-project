const AboutIntro = () => {
  return (
    <section className="mt-20 py-16 bg-pipb-beige bg-[#f8f2e5] ">
      <div className="container mx-auto px-4 text-center">
        {/* PIPB Logo */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-pipb-brown mb-4">
            <img
              src="/assets/Images/PLPB_Blue.png"
              alt=""
              className="mx-auto"
            />
          </h2>
          <div className="text-lg text-pipb-green font-semibold">
            DEVELOPING{" "}
            <span className="text-[#efb12a] font-semibold ">
              SUSTAINABLE COMMUNITIES
            </span>
          </div>
          <div className="text-lg text-pipb-brown font-semibold">
            THAT CAN CO-EXIST WITH NATURE
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed text-base">
            At PLPB we are committed to creating playgrounds for the future,
            where nature plays host to you & your family. Fuelled with our
            passion for creating sustainable environments, PLPB partners with
            the world's best architects and designers to create communities that
            coexist in harmony with their surroundings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
