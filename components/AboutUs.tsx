import Image from "next/image";
import React from "react";

import Fruits from "./Fruits";
import Intro from "./Intro";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section id="about" className=" bg-[#334b35] text-white">
      <div className="w-5/6 mx-auto">
        <Intro />
        <Fruits id={0} desc={""} />
      </div>
    </section>
  );
};

export default AboutUs;
