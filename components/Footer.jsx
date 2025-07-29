import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[40px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold lg:max-w-[45vw] ">
          Looking to{" "}
          <span className="text-[#CBACF9]"> Collaborate or Chat?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me — I&apos;d love to connect, collaborate, or contribute
          to something meaningful!
        </p>
        <a href="mailto:shivaraghav200701@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Shiva Raghav
        </p>
        <div className="flex iterms-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-500 rounded-lg border border-black"
            >
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
