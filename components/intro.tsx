import React from "react";
import { NAME } from "../lib/constants";

const Intro: React.FC = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {NAME}
      </h1>
    </section>
  );
};

export default Intro;