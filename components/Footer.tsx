import Image from "next/image";
import React from "react";
import logo from "@/public/assets/footerimg.png";
import { ArrowBtn, ArrowR } from "@/icons/ArrowR";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedlnIcon,
  TwitterIcon,
} from "@/icons/SocialIcons";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="bg-emerald-800 py-24">
      <div className="w-5/6 mx-auto ">
        <div className="gap-16 sm:flex">
          <div className="flex flex-col gap-10 ">
            <div className="w-24 h-14 ">
              <Image src={logo} alt="logo" className=" object-cover w-full " />
            </div>
            <div className="w-[312px]">
              <p className="text-emerald-50 text-base font-bold ">
                Copyright. all right reserve to MikeRik
              </p>
              <div className=" h-[0px] border border-emerald-50"></div>
            </div>
          </div>
          <div className="mt-16 basis-1/2 sm:mt-0">
            <h4 className="text-white text-xl font-bold  capitalize">Home</h4>
          </div>
          <div className="mt-16 basis-1/2 sm:mt-0">
            <h4 className="text-white text-xl font-bold  capitalize mb-7">
              Products
            </h4>
            <div className="flex flex-col gap-5">
              <p className="text-emerald-50 text-base font-bold ">Cashew nut</p>
              <p className="text-emerald-50 text-base font-bold ">Cocoa</p>
              <p className="text-emerald-50 text-base font-bold ">Sesame</p>
              <p className="text-emerald-50 text-base font-bold ">Egunsi</p>
              <p className="text-emerald-50 text-base font-bold ">Crayfish</p>
            </div>
          </div>
          <div className="mt-16 basis-1/2 sm:mt-0">
            <h4 className="text-white text-xl font-bold  capitalize mb-7">
              About Us
            </h4>
          </div>
          <div className="mt-16 basis-1/2 sm:mt-0">
            <h4 className="text-white text-xl font-bold  capitalize mb-7">
              Contact Us
            </h4>
            <div className="flex flex-col gap-5">
              <p className="text-emerald-50 text-base font-bold ">
                +2348083900530
              </p>
              <p className="text-emerald-50 text-base font-bold ">
                Mikerikltd@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-16 basis-1/2 sm:mt-0">
            <h4 className="text-neutral-100 text-xl font-bold  capitalize">
              Subcribe to our newsletter
            </h4>

            <div className="h-14 my-9 bg-white text-emerald-600 rounded-sm border border-zinc-600  flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-1.5 px-3 text-emerald-600 text-sm font-medium outline-none  placeholder:text-emerald-600"
              />
              <button >
                <ArrowBtn />
              </button>
            </div>
            <div className="flex items-center gap-5 cursor-pointer">
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <LinkedlnIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
