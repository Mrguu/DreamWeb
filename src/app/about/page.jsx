import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="font-mono px-3 md:px-20 py-10 flex flex-col items-center bg-transparent">
      <div>
        <h1 className="text-center text-3xl font-bold text-blue-600 mb-5 drop-shadow-5xl">
          About Us
        </h1>
        <div className="text-sm text-blue-400 text-center w-full">
          At Dreamweb Web Design, we're not just a team of web designers and
          developers; we are a passionate group of digital dreamers who believe
          that every website has the potential to be a work of art and a
          powerful tool for businesses and individuals alike.
        </div>
      </div>
      <div className="md:w-[700px] md:h-[500px] w-[300px] h-[300px] relative drop-shadow-4xl">
        <Image
          src="/about.png"
          alt=""
          fill={true}
          className="animate-floating"
        />
      </div>
      <div className="flex md:flex-row flex-col gap-10">
        <div>
          <h1 className="text-xl font-bold text-blue-600 text-center mb-5 drop-shadow-5xl">
            Our Story
          </h1>
          <div className="text-justify text-sm text-blue-400">
            Our journey began in 2020 when a small group of creative minds
            gathered with a shared vision – to transform the online world, one
            pixel at a time. Since then, we've grown into a leading web design
            agency known for crafting stunning, user-friendly, and highly
            functional websites.
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-blue-600 text-center mb-5 drop-shadow-5xl">
            Our Mession
          </h1>
          <p className="text-justify text-sm text-blue-400">
            At Dreamweb, our mission is simple: to empower businesses and
            individuals to thrive in the digital age. We do this by providing
            cutting-edge web design and development services that bridge the gap
            between dreams and reality. We believe that a well-designed website
            is more than just a virtual storefront; it's a gateway to success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
