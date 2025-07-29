import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/Movingborder";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        My <span className="text-[#CBACF9]">work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-1 gap-10">
        {workExperience.map(({ id, title, desc, className, thumbnail }) => (
          <Button
            key={id}
            borderRadius="2rem"
            className="flex-1 border-neutral-200 dark:border-slate-800"
            duration={Math.random() * 10000 + 10000}
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={thumbnail}
                alt={title}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
