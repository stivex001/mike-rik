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
};

const fruitsData: Fruit[] = [
  {
    id: 1,
    icon: <AppleIcon />,
    desc: "Apple",
  },
  // Add more fruits as needed
  {
    id: 2,
    icon: <BlueberryIcon />,
    desc: "Blueberry",
  },
  {
    id: 3,
    icon: <StrawberryIcon />,
    desc: "Strawberry",
  },
  {
    id: 4,
    icon: <EggplanIcon />,
    desc: "Eggplant",
  },
  {
    id: 5,
    icon: <CabbageIcon />,
    desc: "Cabbage",
  },
  {
    id: 6,
    icon: <Carrot />,
    desc: "carrot",
  },
];

const Fruits = (props: Fruit) => {
  return (
    <div className="py-20">
      <div>
        <h3 className="text-white text-xl font-normal uppercase text-center">
          Popular Foods And Vegetables
        </h3>
        <h1 className="text-white text-2xl md:text-5xl my-5 font-bold text-center">
          Quality Fruits & Vegetables
        </h1>
        <div className="my-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10 ">
          {fruitsData.map((fruit) => (
            <div
              key={fruit.id}
              className="w-40 h-44 px-14 py-8 bg-zinc-300 bg-opacity-10 rounded-2xl backdrop-blur-[50px] justify-center items-center gap-2.5 inline-flex hover:bg-orange-300 duration-300 transition-all group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-5">
                {fruit.icon}
                <h1 className=" text-white text-xl font-semibold group-hover:text-black">
                  {fruit.desc}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fruits;
