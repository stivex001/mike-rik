import Image from "next/image";
import React from "react";

import Fruits from "./Fruits";
import Intro from "./Intro";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section id="about" className=" text-white">
      <div className="container mx-auto px-5 md:px-0">
        <Intro />
        <Fruits id={0} desc={""} title={""} />
      </div>
    </section>
  );
};

export default AboutUs;
