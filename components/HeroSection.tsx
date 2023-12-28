import Image from "next/image";
import React from "react";
import overlay from "@/public/assets/oerlay.png";
import CustomButton from "./CustomButton";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="relative flex h-screen bg-hero-section bg-no-repeat bg-cover bg-center brightness-100  items-center w-full ">
      <div className=" ">
        <Image src={overlay} alt=" " className="absolute inset-0 h-screen" />
      </div>
      <div className="flex flex-col w-5/6 mx-auto mt-28 z-10">
        <h1 className="max-w-3xl text-white text-5xl font-bold ">
          Enabling Global Trade with Premium Agricultural Exports
        </h1>
        <p className="max-w-2xl text-white text-2xl font-medium mt-5">
          Sourcing, Processing, Packaging, and Delivering Superior Agricultural
          Products to Fulfill Global Demand
        </p>
        <div className="w-52 mt-10">
          <CustomButton>Contact Us</CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
