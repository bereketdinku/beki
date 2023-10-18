import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019-2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-1-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PRIMARY SCHOOL"
            subTitle="Keto Primary School(2000 - 2007)"
            result=""
            des=" I was learn from grade 1 to 8.I was passionate about to learned english and mathics."
          />
          <ResumeCard
            title=" High School"
            subTitle="Aba Buna High School (2008 - 2010)"
            result=""
            des="I was learn and study with more passionate and dedicated.I was actively participated in class.I was loved physics,mathematics,chemistry,biology and english."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019-2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-1-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Preparatory School"
            subTitle="Jimma Preparatory School (2010 - 2011)"
            result="4.75/5"
            des=""
          />
          <ResumeCard
            title="BS - Information Systems"
            subTitle="University of Gondar (2012 - 2015)"
            result=""
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
