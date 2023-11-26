import React from "react";

type Props = {};

const ServiceCard = (props: Props) => {
  return (
    <div className="text-black bg-white shadow-xl w-full md:w-11/12 mx-auto py-10 px-7">
      <div className="flex flex-col gap-7">
        <h1 className="text-[#136347] text-xl font-bold">Wholesale Sourcing</h1>
        <p className="text-[#37402b] text-lg font-semibold capitalize">
          Need Whole supplies? Just name the agriculture products from Nigeria
          and we can source for it, package and ship it.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
