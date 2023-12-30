"use client";

import React, { useState } from "react";
import Navlinks from "./Navlinks";
import logo from "@/public/assets/mike rik logo 1.png";
import Image from "next/image";
import { HiBars3BottomRight } from "react-icons/hi2";
import { PersonIcon } from "@/icons/PersonIcon";

type Props = {};

const Navbar = (props: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="bg-white w-full  fixed z-50 top-0">
      <div className="w-5/6 h-36 mx-auto flex items-center justify-between text-white">
        <div className="w-24 h-14 ">
          <Image src={logo} alt="logo" className=" object-cover w-full " />
        </div>
        <HiBars3BottomRight
          size={50}
          className="cursor-pointer md:hidden"
          onClick={toggleMobileMenu}
        />
        <Navlinks />

        <div className="flex items-center gap-10 cursor-pointer">
          <PersonIcon />
          <button className=" h-14 px-[58px] py-4 bg-emerald-800 rounded-[5px] justify-center items-center gap-px inline-flex">
            <div className="text-white text-xl font-bold ">Contact us</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
