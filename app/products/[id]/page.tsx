"use client";
import CustomButton from "@/components/CustomButton";
import {
  Facebook,
  FacebookIcon,
  Instagram,
  InstagramIcon,
  LinkedlnIcon,
  Twitter,
  TwitterIcon,
} from "@/icons/SocialIcons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { products } from "@/components/data";
import { BackIcon } from "@/icons/ArrowR";
import { useRouter } from "next/navigation";
import { useModal } from "@/contexts/useModal";

type Props = {
  params: {
    id: number;
  };
};

const Product = ({ params }: Props) => {
  const id = params.id;
  const router = useRouter();
  const product = products.find((p) => p.id == id);
  const [isMobile, setIsMobile] = useState(false);

  const { openModal } = useModal();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row min-h-screen">
        <div className="flex-1 px-5 py-10 md:px-0 md:py-0 bg-emerald-800 flex items-center justify-center ">
          <div className="flex flex-col gap-5 text-white">
            <h1 className="text-2xl md:text-5xl font-bold">{product?.name}</h1>
            <p className="max-w-xl text-sm md:text-2xl font-medium">
              {product?.desc}
            </p>
            <div className="w-48 mt-7">
              <CustomButton onClick={openModal}>Contact Us</CustomButton>
            </div>
            {/* <p className="mt-7 text-2xl font-bold">Reach us on socials</p> */}
            {/* <div className="mt-7 flex items-center gap-5 cursor-pointer">
              <div className="">
                <Instagram />
              </div>

              <Twitter />
              <Facebook />
              <div className="w-6 h-6 bg-emerald-800 rounded-full border border-emerald-500 flex items-center justify-center">
                <span className="text-white text-[10.36px] font-bold ">In</span>
              </div>
            </div> */}
            <div
              className="md:absolute bottom-10 cursor-pointer mt-5"
              onClick={() => router.back()}
            >
              <BackIcon />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white relative">
          <Image
            src={product?.img || ""}
            alt=""
            layout={isMobile ? "responsive" : "fill"}
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
};

export default Product;
