"use client";
import React from "react";
import { CanvasRevealEffect } from "./ui/RevealEffect";
import { AnimatePresence, motion } from "motion/react";

const Approach = () => {
  return (
    <section className="w-full py-20" id="approach">
      <h1 className="text-center text-4xl font-bold">
        My <span className="text-[#CBACF9]">Approach</span>
      </h1>
      <div className="flex flex-col md:flex-row my-20 items-center justify-center gap-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="1" />}
          desc="I start by analyzing the problem and planning the best strategy to solve it."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-teal-600"
          />
        </Card>
        <Card
          title="Build & Validate"
          icon={<AceternityIcon order="2" />}
          desc="Then, I build and test iteratively to ensure each part works as intended."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-blue-600"
            // colors={[
            //   [236, 72, 153],
            //   [232, 121, 249],
            // ]}
            // dotSize={2}
          />
        </Card>
        <Card
          title="Polish & Prepare"
          icon={<AceternityIcon order="3" />}
          desc="Finally, I refine the solution for performance, scalability, and long-term use."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-indigo-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  desc,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  desc?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative rounded-3xl lg:h-[35rem] h-[15rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <h2
          className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {desc}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2  text-white backdrop-blur-3xl text-2xl font-bold">
          Phase {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
