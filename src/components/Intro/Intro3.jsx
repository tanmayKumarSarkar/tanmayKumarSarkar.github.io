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
    <div className="flex flex-col w-full h-full intro3-cointainer py-0 relative overflow-hidden bg-[#040016]">
      <video
        className="rotate-180 absolute top-[-44%] md:top-[-43%] left-0 z-[1] w-full h-full object-cover blackhole"
        autoPlay
        muted
        loop
        src="../assets/Intro2/blackhole.webm"
      ></video>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center border border-red-600"
      ></motion.div>
    </div>
  );
};

export default Intro;
