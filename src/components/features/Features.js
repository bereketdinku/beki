import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
function Features() {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-block"
    >
      <Title title="Features" dos="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title=" Strategy"
          des="collaborate with their organizations to create innovative solutions and then develop the plans, strategies, approaches and targets necessary to implement them. "
        />
        <Card
          title="App Development"
          des="uses programming languages and development skills to create, test, and develop applications on mobile devices. "
          icon={<AiFillAppstore />}
        />

        <Card
          title="Hosting Websites"
          des="responsible for planning and developing software solutions and web applications, supporting and maintaining a company's websites and digital products."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features;
