import React from "react";

import "./Intro3.css";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import TechIcons from "./TechIcons";

const Intro = () => {
  return (
    <div className="flex flex-col w-full h-full intro3-cointainer py-0 px-0 mx-0 relative overflow-hidden bg-[#040016]">
      <video
        className="rotate-180 absolute top-[-44%] md:top-[-43%] left-0 z-[0] w-full h-full object-cover blackhole"
        autoPlay
        muted
        loop
        src="../assets/Intro2/blackhole.webm"
      ></video>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col w-full h-full mt-[20vh] mb-[5vh] items-center justify-between gap-10"
      >
        <div className="salutation flex w-full justify-center md:justify-start">
          <div className="w-auto flex flex-col md:px-14">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="relative flex-col font-bold text-white w-auto h-auto"
            >
              <div className="text-left text-xl md:text-2xl">Hello, I'm</div>
              <div className="text-2xl md:text-4xl">TANMAY KUMAR SARKAR </div>
            </motion.div>
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[7px] px-[5px] border border-[#7042f88b] opacity-[0.9] w-full"
            >
              <SparklesIcon className="text-[#ffd92f] mr-[8px] h-5 w-5" />
              <h1 className="Welcome-text text-[17px] text-white mr-[4px]">
                Fullstack Software Developer
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-row w-full relative px-5 h-full">
          <div className="intro flex flex-row h-full w-full">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col text-white text-sm md:text-xl xl:text-2xl w-auto h-auto text-left md:px-10 justify-between md:justify-evenly"
            >
              <span>
                Self-motivated Full-Stack Developer from
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  &nbsp;India&nbsp;
                </span>
                with over 8 years of experience in frontend and backend
                technologies. My passion for research, learning, and
                problem-solving drives me to create high-quality products.
              </span>
              <span>
                I'm proficient in finding innovative business solutions and
                leading teams effectively providing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap">
                  &nbsp;the best&nbsp;
                </span>
                project exprience.
              </span>
            </motion.div>
          </div>
          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex w-full h-full mt-[3vh] md:mt-[0] lg:mt-[-5vh] xl:mt-[-10vh] -ml-10"
          >
            <TechIcons />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
