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
  const pathname = usePathname();

  console.log(pathname);
  

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-5 lg:gap-12 ">
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <span
              className={`text-zinc-800 text-xl font-bold hover:text-emerald-800 duration-300 transition relative ${
                pathname === link.url ? "text-emerald-900" : "text-black"
              }`}
            >
              {link.title}
            </span>
            {/* {pathname === link.url && (
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-900"></span>
            )} */}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
