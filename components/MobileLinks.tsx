import Link from "next/link";
import React, { useEffect, useRef } from "react";

type Props = {
  nav: boolean;
  setNav: (value: boolean) => void;
};

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 3, title: "About Us", url: "#about" },
  { id: 2, title: "Products", url: "#services" },
];

export const MobileLinks = ({ setNav, nav }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setNav(false);
      }
    };

    if (nav) {
      // Add event listener when the navigation is open
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      // Remove event listener when the component is unmounted
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [nav, setNav]);

  return (
    <nav
      ref={modalRef}
      className="bg-white w-1/2 absolute top-24 right-8 px-5 py-5 transition-transform duration-500 ease-in-out"
    >
      <ul className="flex gap-7 flex-col ">
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id} onClick={() => setNav(false)}>
            <span
              className={`text-zinc-800 text-xl font-bold hover:text-emerald-800 duration-300 ease-out  `}
            >
              {link.title}
            </span>
            <div className="mt-1 h-[0px] border border-zinc-300"></div>
          </Link>
        ))}
        <button className=" h-12 px-[58px] py-4 bg-emerald-800 rounded-[5px] justify-center items-center gap-px inline-flex">
          <span className="text-white text-xl font-bold ">Contact us</span>
        </button>
      </ul>
    </nav>
  );
};
