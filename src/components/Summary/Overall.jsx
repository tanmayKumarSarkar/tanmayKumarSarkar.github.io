import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaDownload, FaRegClipboard } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMdHappy } from "react-icons/io";
import { MdEmail, MdOutlineLanguage } from "react-icons/md";
import { RiRadioButtonLine } from "react-icons/ri";

const Overall = () => {
  return (
    <div className="w-full h-full px-2 gap-3 grid grid-cols-12 grid-rows-12 ">
      <div className="col-span-3 row-span-7 portrait:lg:max-xl:row-span-9 portrait:lg:row-span-9 bento-cards md:mr-6 profile-pic-container-1">
        <div className="profile-pic-container-2">
          <img src="/assets/Tanmay-right.png" alt="" />
        </div>
      </div>
      <div className="rounded-xl col-span-6 md:col-span-5 row-span-7 portrait:lg:max-xl:row-span-9 portrait:lg:row-span-9 flex flex-col justify-between items-start text-sm py-1">
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
      <div className="rounded-xl col-span-3 row-span-4 flex flex-col-reverse md:inline-flex md:flex-row justify-center items-center">
        Resume
        <span className="rounded-md cursor-pointer ml-1 p-1 bg-[#b1b1b183]">
          <a href="/assets/TANMAY KUMAAR SARKAR.pdf" target="_blank">
            <FaDownload color="#a02dff" />
          </a>
        </span>
      </div>
      <div className="rounded-xl col-span-6 md:col-span-4 lg:col-span-5 row-span-4 flex flex-col justify-center items-start text-sm">
        <div className="inline-flex justify-center items-center">
          <GiRotaryPhone color="#6e18f0" />
          &nbsp;&nbsp;+91 9749760920&nbsp;
          <FaRegClipboard
            className="cursor-pointer"
            style={{ color: "#000" }}
            onClick={(e) => {
              navigator.clipboard.writeText("+919749760920");
              e.target.style.color = "#69db04";
            }}
          />
        </div>
        <div className="inline-flex justify-center items-center cursor-pointer">
          <span
            className="inline-flex justify-center items-center"
            onClick={(e) => window.open("mailto:tanmay.kr.sarkars@gmail.com")}
          >
            <MdEmail color="#6e18f0" />
            &nbsp;&nbsp;tanmay.kr.sarkars@gmail.com
          </span>
          &nbsp;
          <FaRegClipboard
            style={{ color: "#000" }}
            onClick={(e) => {
              navigator.clipboard.writeText("tanmay.kr.sarkars@gmail.com");
              e.target.style.color = "#69db04";
            }}
          />
        </div>
      </div>
      <div className="flex rounded-xl col-span-12 row-span-6 portrait:lg:row-span-3 bento-card p-2 text-xs md:text-sm text-left liner-gradient-border">
        Experienced in Full-Stack Software Development, Architecture Design,
        IOT, DevOps & Web Development in Enterprise Applications.
      </div>
    </div>
  );
};

export default Overall;
