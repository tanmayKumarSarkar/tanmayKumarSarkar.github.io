import React, { useEffect, useRef, lazy } from "react";

import "./Intro3.css";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
  slideInFromBottom,
} from "../../utils/motion";
import { profileDetails } from "../../utils";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { IoIosArrowDown } from "react-icons/io";
// import TechIcons from "./TechIcons";
const TechIcons = lazy(() => import("./TechIcons.jsx"));
const StarsField = lazy(() => import("./StarsField.jsx"));

const Intro = () => {
  const componentRef = useRef(null);
  const gradientTextClass = `text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap`;
  useEffect(() => {
    let about_me_1 = componentRef.current.querySelector(".about_me_1");
    let about_me_2 = componentRef.current.querySelector(".about_me_2");
    about_me_1.innerHTML = about_me_1.innerHTML.replace(
      "India",
      `<span class="${gradientTextClass}">India</span>`
    );
    about_me_2.innerHTML = about_me_2.innerHTML.replace(
      "the best",
      `<span class="${gradientTextClass}">the best</span>`
    );
  }, []);
  return (
    <div
      className="flex flex-col w-full min-h-screen md:h-full justify-around md:justify-start intro3-cointainer pt-0 pb-8 md:pb-0 px-0 mx-0 relative overflow-hidden"
      ref={componentRef}
    >
      <video
        className="rotate-180 absolute top-[-44%] md:top-[-43%] left-0 z-[0] w-full h-full object-cover blackhole blue-scroll-cursor"
        autoPlay
        muted
        loop
        src="../assets/Intro2/blackhole.webm"
      ></video>
      <StarsField />
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col w-full h-full mt-[22vh] mb-[5vh] items-center justify-between gap-5 blue-scroll-cursor"
      >
        <div className="salutation flex w-full justify-center md:justify-start">
          <div className="w-auto flex flex-col md:px-14">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="relative flex-col font-bold text-white w-auto h-auto"
            >
              <div className="text-left font-normal text-sm md:text-lg">
                Hello, I'm
              </div>
              <div className="text-2xl md:text-3xl uppercase">
                {profileDetails.name}
              </div>
            </motion.div>
            <motion.div
              variants={slideInFromTop(0.5)}
              className="Welcome-box py-[7px] px-[5px] border border-[#7042f88b] opacity-[0.9] w-full"
            >
              <SparklesIcon className="text-[#ffd92f] mr-[8px] h-5 w-5" />
              <h1 className="Welcome-text text-[17px] text-white mr-[4px]">
                {profileDetails.profession}
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-row w-full relative px-5 h-full">
          <div className="intro flex flex-row h-full w-full">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col text-white text-sm md:text-lg w-auto h-auto text-left md:px-10 justify-evenly"
            >
              <span className="about_me_1 font-bold text-xl md:text-xl text-center md:text-left">
                {profileDetails.about_me_1}
                {/* Self-motivated Full-Stack Developer from
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  &nbsp;India&nbsp;
                </span>
                with over 8 years of experience in frontend and backend
                technologies. My passion for research, learning, and
                problem-solving drives me to create high-quality products. */}
              </span>
              <motion.div
                variants={slideInFromRight(1)}
                className="md:hidden flex w-full h-[60vw]"
              >
                <TechIcons />
              </motion.div>
              <span className="about_me_2  text-center md:text-left">
                {profileDetails.about_me_2}
                {/* I'm proficient in finding innovative business solutions and
                leading teams effectively providing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap">
                  &nbsp;the best&nbsp;
                </span>
                project exprience. */}
              </span>
              <div className="w-full flex justify-center">
                <motion.span
                  variants={slideInFromBottom(0.5)}
                  className="Welcome-box py-[5px] md:py-[3px] px-[10px] border border-[#efe9ff] opacity-[0.9] text-center cursor-pointer"
                >
                  <h1 className="Welcome-text text-[17px] text-white mr-[4px]">
                    About Me
                  </h1>
                </motion.span>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={slideInFromRight(0.5)}
            className="hidden md:flex w-full h-full mt-[3vh] md:mt-[0] lg:mt-[-5vh] xl:mt-[-10vh] -ml-10"
          >
            <TechIcons />
          </motion.div>
        </div>
      </motion.div>
      <div className="scroll-arrow bottom-[6%] md:bottom-[12%] text-sm md:text-4xl">
        <div className="arrow-1 h-[7px] md:h-[15px]"><IoIosArrowDown /></div>
        <div className="arrow-2 h-[7px] md:h-[15px]"><IoIosArrowDown /></div>
        <div className="arrow-3 h-[7px] md:h-[15px]"><IoIosArrowDown /></div>
      </div>
      <div className="custom-shape-divider-bottom-1724344525">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Intro;
