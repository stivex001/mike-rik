import { products } from "@/components/data";
import { ArrowR, ArrowRMobile } from "@/icons/ArrowR";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <main id="products" className="mt-40 ">
      <div className="container mx-auto px-5 md:px-0">
        <h1 className=" text-neutral-950 text-xl md:text-3xl font-bold  capitalize leading-[46.61px]">
          Check out all our products here
        </h1>

        {/* products */}

        <div className="my-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link href={`/products/${product.id}`}
              key={product.id}
              className="flex flex-col md:gap-7 bg-teal-50 rounded-[5px]"
            >
              <Image src={product.img} alt="" width={448} height={451} />
              <p className="px-5 mt-10 text-xs md:text-2xl font-semibold mb-2">
                {product.name}
              </p>
              <Link href="/" className="px-5 flex items-center gap-5 mb-5">
                <p className="text-emerald-800 text-[10px] md:text-xl font-medium  ">
                  Contact us
                </p>
                <div className="hidden md:block">
                  <ArrowR />
                </div>
                <div className="block md:hidden">
                  <ArrowRMobile />
                </div>
              </Link>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
