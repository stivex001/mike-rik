import Link from "next/link";
import React from "react";

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About Us", url: "#about" },
  { id: 3, title: "Services", url: "#services" },
  // { id: 4, title: "Projects", url: "#projects" },
  { id: 5, title: "Our Products", url: "#products" },
  // { id: 6, title: "News", url: "#news" },
  { id: 7, title: "Contact Us", url: "#contact" },
];

type Props = {};

const Navlinks = (props: Props) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-5 lg:gap-12 ">
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <span className="text-white text-lg font-normal leading-[30px] hover:text-gray-300">
              {link.title}
            </span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
