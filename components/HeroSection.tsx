import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="flex h-screen bg-hero-section bg-no-repeat bg-cover bg-center brightness-100  items-center w-full ">
      <div className="flex flex-col w-5/6 mx-auto mt-16">
        <h2 className="text-white text-2xl font-bold mb-5">
          Original & Natural
        </h2>
        <h1 className="text-orange-300 text-7xl font-bold mb-3">
          Agriculture Matter
        </h1>
        <h1 className="text-white text-7xl font-bold ">Good production</h1>
        <span className="max-w-3xl text-white text-xl font-normal my-5">
          Our success is built upon the knowledge of the market and wonderful
          relationship with our suppliers and customers.
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
