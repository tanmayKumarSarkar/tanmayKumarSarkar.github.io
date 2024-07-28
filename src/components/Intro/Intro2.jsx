import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { parallaxImages } from "../../utils";
// import NightSky from "./NightSky";

import "./Intro2.css";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import TechIcons from "./TechIcons";

function Intro() {
  return (
    <div className="intro2-cointainer w-full h-full py-0 relative overflow-hidden flex flex-col bg-[#040016]">
      <video
        className="rotate-180 absolute top-[-255px] left-0 z-[1] w-full h-full object-cover"
        autoPlay
        muted
        loop
        src="../assets/Intro2/blackhole.webm"
      ></video>

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-7 md:px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[7px] px-[5px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#ffd92f] mr-[8px] h-5 w-5" />
            <h1 className="Welcome-text text-[17px] text-white mr-[4px]">
              Fullstack Developer Portfolio
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[200px] md:max-w-[600px] w-auto h-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project exprience
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-md md:text-lg text-gray-400 my-5 max-w-[45vw] md:max-w-[600px]"
          >
            I'm a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.a>
        </div>
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center ml-[-26vw] md:ml-0 md:mr-0 mt-6 md:-mt-5"
        >
          <TechIcons />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Intro;
