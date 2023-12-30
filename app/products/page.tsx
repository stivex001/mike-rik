import { products } from "@/components/data";
import { ArrowR } from "@/icons/ArrowR";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <main id="products" className="mt-40 ">
      <div className="w-5/6 mx-auto">
        <h1 className=" text-neutral-950 text-3xl font-bold  capitalize leading-[46.61px]">
          Check out all our products here
        </h1>

        {/* products */}

        <div className="my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-7 h-[624px] bg-teal-50 rounded-[5px]"
            >
              <Image src={product.img} alt="" width={448} height={451} />
              <p className="px-5 text-2xl font-semibold ">{product.name}</p>
              <Link href="/" className="px-5 flex items-center gap-2">
                <p className="text-emerald-800 text-xl font-medium  ">
                  Contact us
                </p>
                <ArrowR />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
