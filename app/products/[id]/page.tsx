import CustomButton from "@/components/CustomButton";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedlnIcon,
  TwitterIcon,
} from "@/icons/SocialIcons";
import Image from "next/image";
import React from "react";
import sesame from "@/public/assets/sesame.png";
import { products } from "@/components/data";
import Link from "next/link";
import { ArrowR } from "@/icons/ArrowR";

type Props = {
  params: {
    id: number;
  };
};

const Product = ({ params }: Props) => {
  const id = params.id;

  const product = products.find((p) => p.id == id);

  return (
    <div>
      <div className="flex ">
        <div className="flex-1 bg-emerald-800  flex items-center justify-center pt-40 ">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-white text-5xl font-bold ">{product?.name}</h1>
            <p className="max-w-xl text-white text-2xl font-medium ">
              {product?.desc}
            </p>
            <div className="w-48 mt-10">
              <CustomButton>Contact Us</CustomButton>
            </div>
            <p className="mt-10 text-white text-2xl font-bold ">
              Reach us on socials
            </p>
            <div className="mt-10 flex items-center gap-5 cursor-pointer">
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <LinkedlnIcon />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white  flex items-center justify-center  ">
          <div className="w-full  bg-contain bg-center ">
            <Image src={product?.img || "/placeholder-image.jpg"} alt="" />
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto mt-48">
        <h1 className=" text-neutral-950 text-3xl font-bold  capitalize leading-[46.61px]">
          Check out our products
        </h1>
        <div className="my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {products?.slice(0, 6)?.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-7 h-[624px] bg-teal-50 rounded-[5px]"
            >
              <Link href={`/products/${product?.id}`}>
                <Image src={product.img} alt="" width={448} height={451} />
                <p className="px-5 mt-10 text-2xl font-semibold ">
                  {product.name}
                </p>
              </Link>

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
    </div>
  );
};

export default Product;
