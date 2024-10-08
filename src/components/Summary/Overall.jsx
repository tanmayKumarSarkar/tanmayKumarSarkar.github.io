import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdHappy } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import { RiRadioButtonLine } from "react-icons/ri";

const Overall = () => {
  return (
    <div className="w-full h-full px-2 gap-3 grid grid-cols-12 grid-rows-12 ">
      <div className="rounded-xl col-span-3 row-span-7 portrait:lg:max-xl:row-span-9 bento-card md:mr-6">
        Photo
      </div>
      <div className="rounded-xl col-span-6 row-span-7 portrait:lg:max-xl:row-span-9 flex flex-col justify-between items-start text-sm py-1">
        <span className="flex justify-center items-center dark-back-shade py-0 px-2">
          <div className="bg-[#62ff00] h-2 w-2 md:h-[6px] md:w-[6px] rounded-lg"></div>
          &nbsp; Available to work
        </span>
        <div className="flex flex-col items-start">
          <span className="flex justify-center items-center py-0 px-2">
            <FaLocationDot color="#6e18f0" /> &nbsp; India
          </span>
          <span className="flex justify-center items-center py-0 px-2">
            <MdOutlineLanguage color="#6e18f0" /> &nbsp; English & Hindi
          </span>
        </div>
      </div>
      <div className="rounded-xl col-span-3 row-span-4 inline-flex justify-center items-center">
        Resume
        <span className="rounded-md ml-1 p-1 bg-[#b1b1b183]">
          <FaDownload color="#a02dff" />
        </span>
      </div>
      <div className="rounded-xl col-span-12 row-span-6 bento-card p-2 text-xs md:text-sm text-left liner-gradient-border">
        Experienced in Full-Stack Software Development, Architecture Design,
        IOT, DevOps & Web Development in Enterprise Applications.
      </div>
    </div>
  );
};

export default Overall;
