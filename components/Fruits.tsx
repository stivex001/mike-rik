import { LightingIcon, Person2Icon, QualityIcon } from "@/icons/AboutUsIcons";
import { AppleIcon } from "@/icons/AppleIcon";
import { BlueberryIcon } from "@/icons/BlueberryIcon";
import { CabbageIcon } from "@/icons/Cabbage";
import { Carrot } from "@/icons/CarrotIcon";
import { EggplanIcon } from "@/icons/EggplantIcon";
import { StrawberryIcon } from "@/icons/StrawberryIcon";
import React from "react";

type Fruit = {
  id: number;
  icon?: React.ReactNode;
  desc: string;
  title: string;
};

const fruitsData: Fruit[] = [
  {
    id: 1,
    icon: <Person2Icon />,
    title: "Customer-centric approach",
    desc: "Our customers' satisfaction is our driving force. we listen, learn, and tailor our offerings to meet your needs, providing you with exceptional value",
  },
  {
    id: 2,
    icon: <QualityIcon />,
    title: "Championing quailty",
    desc: "Experience unparalleled excellence. We uphold unwavering quality standards in every aspect, from sourcing fine raw materials to implementing state-of-the-art processing techniques",
  },
  {
    id: 3,
    icon: <LightingIcon />,
    title: "Sustainability at heart",
    desc: "We are dedicated to sustainable farming and processing practices that preserve the environment, support local communities and ensure the long term well-being of our customers",
  },
];

const Fruits = (props: Fruit) => {
  return (
    <div className="py-20">
      <div>
        <h1 className="max-w-xl text-neutral-950 text-lg md:text-3xl font-bold  capitalize leading-relaxed md:leading-[46.61px]">
          What we stand to offer you when you make a deal with us
        </h1>
        <div className="my-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {fruitsData.map((fruit) => (
            <div
              key={fruit.id}
              className=" md:h-[381px] p-10  bg-emerald-800  rounded-[10px] md:justify-center items-center gap-2.5 inline-flex "
            >
              <div className="flex flex-col gap-10">
                {fruit.icon}
                <div>
                  <p className="text-white text-xs md:text-2xl font-bold  capitalize">
                    {fruit.title}
                  </p>
                  <h1 className="  text-white text-[10px] md:text-lg font-medium ">
                    {fruit.desc}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fruits;
