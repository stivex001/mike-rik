"use client";

import React, { useEffect, useState } from "react";
import Navlinks from "./Navlinks";
import logo from "@/public/assets/mike rik logo 1.png";
import Image from "next/image";
import { HiBars3BottomRight } from "react-icons/hi2";
import { PersonIcon } from "@/icons/PersonIcon";
import Link from "next/link";
import { CloseIcon, HamburgerIcon } from "@/icons/MenuIcons";
import { MobileLinks } from "./MobileLinks";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="bg-white w-full  fixed z-50 top-0">
      <div className="container h-24 md:h-36 mx-auto flex items-center justify-between text-white">
        <Link href="/" className="w-24 h-14 ">
          <Image src={logo} alt="logo" className=" object-cover w-full " />
        </Link>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden relative"
        >
          {nav ? <CloseIcon /> : <HamburgerIcon />}
        </div>
        <Navlinks />

        <div className="hidden md:flex items-center gap-10 cursor-pointer">
          <PersonIcon />
          <button className=" h-14 px-[58px] py-4 bg-emerald-800 rounded-[5px] justify-center items-center gap-px inline-flex">
            <span className="text-white text-xl font-bold ">Contact us</span>
          </button>
        </div>
      </div>
      {nav && <MobileLinks setNav={setNav} nav={nav} />}
    </div>
  );
};

export default Navbar;
