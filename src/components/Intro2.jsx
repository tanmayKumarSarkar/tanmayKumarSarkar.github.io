import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { parallaxImages } from "../utils";
// import NightSky from "./NightSky";

import "../assets/styles/Intro2.css";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "../utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import SmallCard from "./SmallCard";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";

function Intro() {
  const mouseOver = (e) => {
    // console.log(e);
    let inner = document.querySelector(".squares-bg-highlight");
    let outer = inner?.parentElement;
    if (!inner || !outer) return;
    let clientX = 0,
      clientY = 0;
    if (e.type == "touchmove" && !!e.changedTouches?.length > 0) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    }
    if (e.type == "mousemove") {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    let posXL = clientX - outer.getBoundingClientRect().left;
    let posXR = outer.getBoundingClientRect().right - clientX;
    let posYT = clientY - outer.getBoundingClientRect().top;
    let posYB = outer.getBoundingClientRect().bottom - clientY;
    // console.log(posXR, posYB);
    if (posXL > 1 && posYT > 1 && posXR > 1 && posYB > 1) {
      // console.log(
      //   outer.getBoundingClientRect().left,
      //   outer.getBoundingClientRect().top,
      //   clientX - outer.getBoundingClientRect().left,
      //   clientY - outer.getBoundingClientRect().top
      // );
      inner.style.display = "block";
      inner.style.left = posXL + "px";
      inner.style.top = posYT + "px";
      inner.style.backgroundPositionX = `calc(50% - ${posXL}px)`;
      inner.style.backgroundPositionY = `calc(50% - ${posYT}px)`;
    } else {
      inner.style.display = "none";
    }
    // inner.style.top = clientY - 50 + "%";
    // inner.style.left = clientX - 50 + "%";
  };

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
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Fullstack Developer Portfolio
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            I&apos;m a Full Stack Software Engineer with experience in Website,
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
          className="w-full h-full flex justify-center items-center"
        >
          <img
            src="../assets/Intro2/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
          <div className="squares-bg-container relative left-[-50%]">
            <div
              className="squares-bg"
              onMouseMoveCapture={(e) => mouseOver(e)}
              onTouchMoveCapture={(e) => mouseOver(e)}
            >
              <div className="squares-bg-highlight"></div>
              <div className="circle circle1"></div>
              <div className="circle circle2"></div>
              <div className="circle circle3"></div>
              <div className="circle circle4"></div>
              <div className="small-tech-icons">
                <SmallCard Sclass="smallCard">
                  <IoLogoJavascript style={{ color: "#ffffff" }} />
                </SmallCard>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Intro;
