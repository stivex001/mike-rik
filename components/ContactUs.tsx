import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

export const ContactUs = (props: Props) => {
  return (
    <section id="products">
      <div className="container mx-auto px-5 md:px-0">
        <div className="relative h-screen bg-hero-section bg-no-repeat bg-cover bg-center flex items-center justify-center ">
          <div className="absolute inset-0 h-screen bg-emerald-800 bg-opacity-75 backdrop-blur-[5px]" />
          <div className="flex flex-col z-10">
            <h1 className=" text-center text-white text-sm md:text-5xl font-bold ">
              Contact us
            </h1>
            <p className="mt-3 md:mt-5 max-w-[200px] mx-auto md:max-w-lg text-center text-white text-[11px] md:text-2xl font-medium ">
              Reach us here to begin your wonderful exporting journey with us
            </p>
            <form className="flex flex-col gap-10 mt-16 w-full">
              <input
                className=" px-5 h-12 md:h-16  bg-white rounded-[5px] border border-emerald-800  items-center flex text-zinc-600 text-base font-medium "
                placeholder="Enter name"
              />
              <input
                className="px-5 h-12 md:h-16  bg-white rounded-[5px] border border-emerald-800  items-center flex text-zinc-600 text-base font-medium "
                placeholder="Enter email"
                type="email"
              />
              <textarea
                className="p-5 h-40  bg-white rounded-[5px] border border-emerald-800  items-center flex text-zinc-600 text-base font-medium"
                placeholder="Type your message..."
              />
              <CustomButton className="">Send Message</CustomButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
