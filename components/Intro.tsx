import { CheckedIcon } from "@/icons/CheckedIcon";
import React from "react";
import product from "@/public/assets/fruits.png";
import Image from "next/image";
import { StarIcon } from "@/icons/StarIcon";
import { RingIcon } from "@/icons/RingIcon";

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="pt-24  lg:flex gap-20 items-center ">
      <div className="flex-1">
        <h1 className="text-neutral-950 text-lg md:text-3xl font-bold ">About us </h1>
        <div className="flex flex-col mt-5">
          <p className=" text-neutral-950 text-sm md:text-xl font-medium  leading-9">
            Our mission is to redefine excellence in Agro-food processing by
            consistently delivering sustainable and innovative food products
            that cater to the diverse needs of our valued customers.{" "}
          </p>
          <h3 className="text-neutral-950 text-base md:text-xl font-bold  capitalize my-10">
            We strive to be the best in the market by:
          </h3>
          <div>
            <p className="text-neutral-950 text-sm md:text-lg font-bold ">
              -Innovation and adaptability
            </p>
            <span className=" text-zinc-800 text-xs md:text-lg font-medium leading-normal">
              We continually innovate our products and processes to meet
              evolving consumer demands and market trends, staying at the
              forefront of the Agro-food industry{" "}
            </span>
          </div>
          <div className="my-8">
            <p className="text-neutral-950 text-sm md:text-lg font-bold ">
              -Empowering partnerships
            </p>
            <span className=" text-zinc-800 text-xs md:text-lg font-medium leading-normal">
              We foster strong partnerships with local farmers, suppliers, and
              distributors, creating a network built on trust, fairness, and
              mutual growth.
            </span>
          </div>
          <div className="mb-8">
            <p className="text-neutral-950 text-sm md:text-lg font-bold ">
              -Responsible leadership
            </p>
            <span className=" text-zinc-800 text-xs md:text-lg font-medium leading-normal">
              We take pride in our role as responsible cooperate citizens,
              contributing positively to the communities we serve and acting as
              stewards of the resources entrusted to us.
            </span>
          </div>
          <div className="">
            <p className="text-neutral-950 text-sm md:text-lg font-bold ">
              -Commitment to excellence
            </p>
            <span className=" text-zinc-800 text-xs md:text-lg font-medium leading-normal">
              We are unwavering in our pursuit of excellence, setting the bar
              high for ourselves, our products, and our industry.
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 relative mt-5 md:mt-0">
        <div className=" z-50">
          <Image src={product} alt=""  />
        </div>

        <div className="hidden md:absolute -top-16 left-10 ">
          <StarIcon />
        </div>
        <div className="hidden md:absolute -top-12 -right-12 ">
          <RingIcon />
        </div>
        {/* <div className="  absolute -top-12 -right-12 rounded-full bg-red-500 border-2 border-yellow-400" /> */}
        <div>
          <RingIcon className="hidden md:absolute -bottom-12 -left-12 " />
        </div>
      </div>
    </div>
  );
};

export default Intro;
