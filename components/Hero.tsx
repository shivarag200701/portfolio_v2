"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/Movingborder";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319] dark:">
        <div
          className={cn(
            "absolute inset-0 dark:opacity-30",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]" />
      </div>
      <div className="flex justify-center relative">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Engineer. Builder. Problem Solver
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
            words="Hi, I'm Shiva Raghav, a fullstack developer bringing ideas to life through thoughtful, scalable software"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Relentlessly Curious. Solution Obsessed. Impact Driven.
          </p>
          <Button
            borderRadius="2rem"
            className="flex-1 border-2 border-neutral-200 dark:border-slate-800 w-full h-15 px-10 cursor-pointer hover:scale-105 transition-transform duration-300"
            duration={Math.random() * 10000 + 10000}
            onClick={() => {
              window.open("/resume.pdf", "_blank");
            }}
          >
            <h1 className="flex items-center gap-2">
              Resume
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </h1>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
