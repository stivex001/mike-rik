import React from "react";
import ServiceCard from "./ServiceCard";

type Props = {};

const OurServices = (props: Props) => {
  return (
    <section id="services" className=" bg-[#eff9ed] ">
      <div className="w-5/6 mx-auto py-24">
        <h3 className="text-[#334b35] text-xl font-normal uppercase text-center ">
          Our Services
        </h3>
        <h1 className="max-w-2xl my-5 mx-auto text-[#334b35] text-5xl font-bold text-center ">
          Quality Agro Products Anytime, Anywhere
        </h1>
        <p className="text-center max-w-3xl mx-auto text-base">
          Mike-Rik offers services in sourcing, storage and transporting of
          agricultural products. Our role as exporters of raw agricultural
          products is to ensure our customers get quality products at
          competitive prices in a timely manner.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-20 ">
          <ServiceCard />
          <ServiceCard />
          {/* <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard /> */}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
