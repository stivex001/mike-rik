import Link from "next/link";
import React from "react";

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 3, title: "About Us", url: "#about" },
  { id: 2, title: "Products", url: "#services" },
 
];

type Props = {};

const Navlinks = (props: Props) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-5 lg:gap-12 ">
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <span className=" text-zinc-800 text-xl font-bold hover:text-emerald-800 duration-300 ease-out">
              {link.title}
            </span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
