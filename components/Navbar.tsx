import React from "react";
import Navlinks from "./Navlinks";
import logo from "@/public/assets/2.png";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#1D974A]/60  w-full py-9 fixed z-10 top-0">
      <div className="w-[80%] mx-auto flex items-center  text-white gap-[100px]">
        <div className="w-24 h-16 flex justify-center items-center bg-white p-2">
          <Image src={logo} alt="logo" className=" object-cover w-full " />
        </div>
        <Navlinks />
      </div>
    </div>
  );
};

export default Navbar;
