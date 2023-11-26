import Image from "next/image";
import React from "react";
import product from "@/public/assets/product.jpg";
import { CheckedIcon } from "@/icons/CheckedIcon";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section id="about" className=" bg-[#334b35] text-white">
      <div className="w-5/6 mx-auto pt-24  lg:flex gap-20">
        <div>
          <Image src={product} alt="" />
        </div>

        <div className="mt-20 lg:mt-0  flex flex-col gap-5">
          <p className="text-white text-xl font-normal text-center lg:text-left ">OUR INTRODUCTION</p>
          <h1 className=" text-white text-3xl md:text-5xl font-bold my-5 text-center lg:text-left">
            Pure Agriculture and
            <br />
            Organic Form
          </h1>
          <h3 className="text-orange-300 text-xl md:text-3xl font-medium ">
            We’re Leader in Agriculture Market
          </h3>
          <span className=" md:max-w-3xl text-white text-xl md:text-lg font-normal ">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humou or
            randomised words even slightly believable.
          </span>
          <div className="flex flex-col gap-5 mb-7">
            <div className="flex items-center gap-2">
              <CheckedIcon />
              <span className="text-white md:text-xl font-medium ">
                Organic food contains more vitamins
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckedIcon />
              <span className="text-white md:text-xl font-medium ">
                Eat organic because supply meets demand
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckedIcon />
              <span className="text-white md:text-xl font-medium ">
                Organic food is never irradiated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
