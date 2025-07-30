"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GridGlode";

import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Marquee from "./animata/marquee";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 md:auto-rows md:grid-cols-3 gap-8 lg:grid-cols-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    console.log("copying");

    navigator.clipboard.writeText("shivaraghav200701@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      className={cn(
        "group/bento shadow-input relative overflow-hidden row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.1] dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={id === 6 ? "flex justify-center h-full" : "h-full"}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover", "object-contain")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={
                "object-cover, object-contain,w-full,h-full, -right-10 -bottom-10"
              }
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                <Marquee vertical speed={20} pauseOnHover>
                  {[
                    "React.js",
                    "Next.js",
                    "Typescript",
                    "Javascript",
                    "Flask",
                    "FastAPI",
                  ].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                  {/* <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" /> */}
                </Marquee>
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <Marquee vertical reverse speed={20} pauseOnHover>
                  {[
                    "Java",
                    "Python",
                    "MySQL",
                    "MongoDB",
                    "Redis",
                    "Docker",
                  ].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </Marquee>
              </div>
            </div>
          )}
          {id == 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy my email"}
                handleClick={handleCopy}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161831]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
