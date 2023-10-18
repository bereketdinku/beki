import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Projects Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Java Developer"
            subTitle="UOG,Infsy-2nd - (2022 )"
            result="SuperMarket Management Systems"
            des=" The project design in javaswipt and mysql. "
          />
          <ResumeCard
            title=" Full Stack Developer"
            subTitle="UOG,Infsy-3rd - (2022)"
            result="Sheger Park Websites"
            des=" The project designed with html,css,javascript ,bootstrap,php."
          />
          <ResumeCard
            title=" Machine Learning Developer"
            subTitle="UOG,Infsy-3rd - (2022)"
            result="Mental Health Chatbot"
            des=" The project designed with html,css,javascript ,bootstrap,php."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Clone Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Amazon websites"
            result=""
            des="The clone design using react,redux and tailwindcss."
          />
          <ResumeCard
            title="Mobile App Developer"
            subTitle="Nike Mobile App Clone"
            result=""
            des="App designed using react native and redux."
          />
          <ResumeCard
            title="Mobile App Developer"
            subTitle="Signal Mobile App Clone"
            result=""
            des="The App designed using react native,redux and firebase."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
