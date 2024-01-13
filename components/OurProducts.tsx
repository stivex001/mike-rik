"use client";

import React from "react";
import Link from "next/link";
import { ArrowR, ArrowRMobile } from "@/icons/ArrowR";
import Image from "next/image";
import { products } from "./data";
import { useModal } from "@/contexts/useModal";

type Props = {};

const OurProduts = (props: Props) => {
  const { openModal } = useModal();

  return (
    <section id="products" className="">
      <div className="container px-5 md:px-0 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className=" text-neutral-950 text-lg md:text-3xl font-bold  capitalize leading-[46.61px]">
            Check Related products
          </h1>
          <Link href="/products" className="flex items-center gap-2">
            <p className="text-emerald-800 text-base md:text-3xl font-medium  underline">
              See All
            </p>
            <div className="hidden md:block">
              <ArrowR />
            </div>
            <div className="block md:hidden">
              <ArrowRMobile />
            </div>
          </Link>
        </div>
        {/* products */}

        <div className="my-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products?.slice(0, 6)?.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:gap-7  bg-teal-50 rounded-[5px]"
            >
              <Link href={`/products/${product?.id}`}>
                <Image src={product.img} alt="" width={448} height={451} />
                <p className="px-5 mt-10 text-xs md:text-2xl font-semibold mb-2">
                  {product.name}
                </p>
              </Link>

              <button
                onClick={openModal}
                className="px-5 flex items-center gap-2 mb-5"
              >
                <p className="text-emerald-800 text-[10px] md:text-xl font-medium  ">
                  Contact us
                </p>
                <div className="hidden md:block">
                  <ArrowR />
                </div>
                <div className="block md:hidden">
                  <ArrowRMobile />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProduts;
