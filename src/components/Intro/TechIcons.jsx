import React, { useRef } from "react";

import "./TechIcons.css";
import { motion } from "framer-motion";

import SmallCard from "../Common/SmallCard";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import { slideInFromRight } from "../../utils/motion";
import { RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMicrosoftazure } from "react-icons/si";

const TechIcons = ({ classname = "" }) => {
  const componentRef = useRef(null);
  const mouseOver = (e) => {
    // console.log(e);
    let inner = componentRef.current.querySelector(".squares-bg-highlight");
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
    <div className="w-full h-full tecicons-container" ref={componentRef}>
      {/* <img
        src="../assets/Intro2/mainIconsdark.svg"
        alt="work icons"
        height={650}
        width={650}
      /> */}
      <div className="squares-bg-container relative w-full h-full">
        <div
          className="squares-bg"
          onMouseMove={(e) => mouseOver(e)}
          onTouchMoveCapture={(e) => mouseOver(e)}
        >
          <div className={`squares-bg-highlight`}></div>
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          {/* <div className="circle circle4"></div> */}
          <div className="lines h-full w-full relative">
            <div className="line"></div>
            <div className="line line2 rotate-45"></div>
            <div className="line rotate-90"></div>
            <div className="line line2 -rotate-45"></div>
          </div>
          <div className="small-tech-icons absolute top-0 left-0 h-full w-full">
            <SmallCard Sclass="smallCard top-[19%] left-[23%]">
              <FaAws style={{ color: "#ffffff" }} />
            </SmallCard>
            <SmallCard Sclass="smallCard top-[44.5%] left-[44.5%] md:top-[43.5%] md:left-[43.5%]">
              <FaNodeJs style={{ color: "#ffffff" }} />
            </SmallCard>
            <SmallCard Sclass="smallCard top-[78.5%] left-[44%]">
              <FaHtml5 style={{ color: "#ffffff" }} />
            </SmallCard>
            <SmallCard Sclass="smallCard top-[69.5%] left-[65%]">
              <FaCss3Alt style={{ color: "#ffffff" }} />
            </SmallCard>
            <SmallCard Sclass="smallCard top-[39%] left-[77%]">
              <RiTailwindCssFill style={{ color: "#ffffff" }} />
            </SmallCard>
            <SmallCard Sclass="smallCard top-[69.5%] left-[23%]">
              <FaBootstrap style={{ color: "#ffffff" }} />
            </SmallCard>
            <SmallCard Sclass="smallCard top-[54%] left-[26.5%]">
              <FaAngular style={{ color: "#ffffff" }} />
            </SmallCard>
            <SmallCard Sclass="smallCard top-[23.5%] left-[44%]">
              <FaReact style={{ color: "#ffffff" }} />
            </SmallCard>
            <SmallCard Sclass="smallCard top-[53.5%] left-[62%]">
              <RiSvelteFill style={{ color: "#ffffff" }} />
            </SmallCard>
            <SmallCard Sclass="smallCard top-[39%] left-[12%]">
              <FaJava style={{ color: "#ffffff" }} />
            </SmallCard>
            <SmallCard Sclass="smallCard top-[19%] left-[65%]">
              <SiMicrosoftazure style={{ color: "#ffffff" }} />
            </SmallCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechIcons;
