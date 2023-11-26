"use client"

import React, { useState } from "react";
import Navlinks from "./Navlinks";
import logo from "@/public/assets/2.png";
import Image from "next/image";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {};

const Navbar = (props: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="bg-[#334b35]  w-full py-9 fixed z-10 top-0">
      <div className="w-[80%] mx-auto flex items-center justify-between text-white">
        <div className="w-24 h-16 flex justify-center items-center bg-white p-2">
          <Image src={logo} alt="logo" className=" object-cover w-full " />
        </div>
        <HiBars3BottomRight
          size={50}
          className="cursor-pointer md:hidden"
          onClick={toggleMobileMenu}
        />
        <Navlinks />
      </div>
    </div>
  );
};

export default Navbar;
