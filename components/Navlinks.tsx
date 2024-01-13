import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 3, title: "About Us", url: "#about" },
  { id: 2, title: "Products", url: "#products" },
 
];

type Props = {};

const Navlinks = (props: Props) => {

  const path = usePathname();
  console.log(path, 'path');
  

  let active =
    'text-zinc-800 text-xl font-bold hover:text-emerald-800 duration-300 ease-out hover:border-b-2 hover:border-b-emerald-800';
  let inActive =
    'text-zinc-800 text-xl font-bold hover:text-emerald-800 hover:border-b-2 hover:border-b-emerald-800';

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-5 lg:gap-12 ">
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <span className={`${path == link.url ? active : inActive} `}>
              {link.title}
            </span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
