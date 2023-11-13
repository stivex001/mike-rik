import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="flex h-screen bg-hero-section bg-no-repeat bg-cover bg-center brightness-100 justify-center items-center w-full ">
      <div className="text-white font-bold text-7xl">Welcome to Mike Rik</div>
    </section>
  );
};

export default HeroSection;
