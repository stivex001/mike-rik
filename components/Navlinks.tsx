import Link from "next/link";
import React from "react";

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About Us", url: "/about" },
  { id: 3, title: "Our Products", url: "/products" },
  { id: 4, title: "Projects", url: "/projects" },
  { id: 5, title: "Services", url: "/services" },
  { id: 6, title: "News", url: "/news" },
  { id: 7, title: "Contact Us", url: "/contact" },
];

type Props = {};

const Navlinks = (props: Props) => {
  return (
    <nav className="">
      <ul className="flex">
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <span className="text-white hover:text-gray-300">{link.title}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
