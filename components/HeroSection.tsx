"use client"
import Image from "next/image";
import React from "react";
import overlay from "@/public/assets/oerlay.png";
import CustomButton from "./CustomButton";
import { useModal } from "@/contexts/useModal";

type Props = {};

const HeroSection = (props: Props) => {
  const { openModal } = useModal();
  return (
    <section className="relative flex h-screen bg-hero-section bg-no-repeat bg-cover bg-center brightness-100  items-center w-full ">
      <div className=" object-cover object-center">
        <Image src={overlay} alt=" " className="absolute  inset-0  " layout="fill" />
      </div>
      <div className="flex flex-col w-5/6 mx-auto mt-28 z-10">
        <h1 className="max-w-3xl text-white text-2xl lg:text-5xl font-bold ">
          Enabling Global Trade with Premium Agricultural Exports
        </h1>
        <p className="max-w-2xl text-white text-base lg:text-2xl font-medium mt-3 lg:mt-5">
          Sourcing, Processing, Packaging, and Delivering Superior Agricultural
          Products to Fulfill Global Demand
        </p>
        <div className="w-52 mt-10">
          <CustomButton onClick={openModal}>Contact Us</CustomButton>
        </div>
      </div>
      {/* <div className="origin-top-left rotate-90 w-[45px] h-[45px] absolute bottom-0">
        <div className="w-[45px] h-[45px] left-0 top-0 absolute origin-top-left rotate-90 bg-emerald-800 rounded-full" />
      </div> */}
    </section>
  );
};

export default HeroSection;
