import React from "react";
import Navlinks from "./Navlinks";
import logo from "@/public/assets/2.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#1D974A]/70  w-full py-9 fixed z-10 top-0">
      <div className="w-[80%] mx-auto flex items-center justify-between text-white">
        {/* logo */}
        logo
        <Navlinks />
      </div>
    </div>
  );
};

export default Navbar;
