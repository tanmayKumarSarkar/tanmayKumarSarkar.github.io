import React, { lazy } from "react";
import "./ProfileSummary.css";
import {
  AiOutlineCodeSandbox,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { PiChatsDuotone, PiShootingStarBold } from "react-icons/pi";
import { IoMdHappy } from "react-icons/io";
import Overall from "./Overall";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoDesktopSharp } from "react-icons/io5";
import { GiServerRack } from "react-icons/gi";
import { ImDatabase } from "react-icons/im";
const ProfileSummaryBG = lazy(() => import("./ProfileSummaryBG.jsx"));

const ProfileSummary = () => {
  return (
    <div className="w-full h-full profile-summary-bg relative black-scroll-cursor">
      <ProfileSummaryBG />
      <div className="w-full h-full px-5 gap-3 md:gap-6 grid grid-cols-12 grid-rows-12 md:grid-rows-11 lg:grid-rows-12">
        <div className="rounded-xl col-span-12 lg:col-span-6 portrait:lg:max-xl:col-span-12 portrait:lg:col-span-12 row-span-3 md:row-span-4 lg:row-span-6 portrait:lg:row-span-3 portrait:lg:max-xl:row-span-3 bento-card ">
          <Overall />
        </div>
        {/* <div className="rounded-xl md:col-span-6 md:row-span-1 hidden lg:block portrait:lg:hidden portrait:lg:max-xl:hidden"></div> */}
        {/* <!-- 1 Large box spanning 2x2 --> */}
        <div className="flex rounded-xl col-span-6 lg:col-span-2 portrait:lg:col-span-4 portrait:lg:max-xl:col-span-6 row-span-2 lg:row-span-4 portrait:lg:row-span-3 portrait:lg:max-xl:row-span-2 bento-card">
          <span>
            <span className="text-4xl purple-grad-font font-medium">15</span>
            <span className="text-4xl purple-grad-icons font-semibold">+</span>
          </span>
          <span className="w-full bento-card-footer liner-gradient-border">
            <AiOutlineFundProjectionScreen /> Projects
          </span>
        </div>
        {/* <!-- 2 Tall box spanning 2 rows --> */}
        <div className="flex rounded-xl col-span-6 lg:col-span-2 portrait:lg:col-span-4 portrait:lg:max-xl:col-span-6 row-span-2 lg:row-span-4 portrait:lg:row-span-3 portrait:lg:max-xl:row-span-2 bento-card">
          <span>
            <span className="text-4xl purple-grad-font font-medium">10</span>
            <span className="text-4xl purple-grad-icons font-semibold">+</span>
          </span>
          <span className="w-full bento-card-footer liner-gradient-border">
            <IoMdHappy /> Satisfied Clients
          </span>
        </div>
        {/* <!-- 3 Regular box --> */}
        <div className="flex rounded-xl col-span-6 lg:col-span-2 portrait:lg:col-span-4 portrait:lg:max-xl:col-span-6 row-span-2 lg:row-span-4 portrait:lg:row-span-3 portrait:lg:max-xl:row-span-2 bento-card">
          <span>
            <span className="text-4xl purple-grad-font font-medium">8</span>
            <span className="text-4xl purple-grad-icons font-semibold">+</span>
          </span>
          <span className="w-full bento-card-footer liner-gradient-border">
            <PiShootingStarBold /> Years Experience
          </span>
        </div>
        <div className="flex rounded-xl col-span-6 lg:col-span-2 portrait:lg:max-xl:col-span-6 row-span-2 lg:row-span-4 portrait:lg:max-xl:row-span-2 bento-card lg:hidden portrait:lg:max-xl:flex">
          <span>
            <span className="text-4xl purple-grad-font font-medium">20</span>
            <span className="text-4xl purple-grad-icons font-semibold">+</span>
          </span>
          <span className="w-full bento-card-footer liner-gradient-border">
            <AiOutlineCodeSandbox /> Core Technologies
          </span>
        </div>

        <div className="rounded-xl md:col-span-6 md:row-span-2 hidden lg:block portrait:lg:hidden portrait:lg:max-xl:hidden"></div>

        <div className="rounded-xl col-span-6 row-span-3 md:row-span-3 lg:row-span-3 portrait:lg:row-span-3 bento-card flex flex-col justify-start items-start p-2">
          <div className="rounded-xl col-span-12 row-span-6 px-2 py-1 md:py-2 text-xs md:text-sm text-left purple-grad-font font-semibold flex justify-center items-center">
            <IoDesktopSharp color="#6e18f0" /> &nbsp; Front-end Technologies
          </div>
          <div className="w-full rounded-xl col-span-12 row-span-6 p-2 text-xs md:text-sm text-left">
            Specialized In: Responsive UI Design.
            <br />
            Proficient In: React JS, React Native, Angular, Svelte, JQuery, Grid
            & Flex Layout Bootstrap, Tailwind CSS, A11Y/ WCAG.
          </div>
        </div>

        <div className="rounded-xl col-span-6 row-span-3 md:row-span-3 lg:row-span-3 portrait:lg:row-span-3 bento-card flex flex-col justify-start items-start p-2">
          <div className="rounded-xl col-span-12 row-span-6 px-2 py-1 md:py-2 text-xs md:text-sm text-left purple-grad-font font-semibold flex justify-center items-center">
            <GiServerRack color="#6e18f0" /> &nbsp; Back-end Technologies
          </div>
          <div className="w-full rounded-xl col-span-12 row-span-6 p-2 text-xs md:text-sm text-left">
            Specialized In: Robust and secure RESTful API Web Services.
            <br />
            Proficient In: Java/J2EE, Dynamics 365 CRM Apps, Node JS, Express,
            Django, .Net, MVC architecture, GraphQL.
          </div>
        </div>

        <div className="rounded-xl col-span-6 row-span-2 md:row-span-3 portrait:lg:row-span-3 bento-card flex flex-col justify-start items-start p-2">
          <div className="rounded-xl col-span-12 row-span-6 px-2 py-1 md:py-2 text-xs md:text-sm text-left purple-grad-font font-semibold flex justify-center items-center">
            <ImDatabase color="#6e18f0" /> &nbsp; Databases
          </div>
          <div className="w-full rounded-xl col-span-12 row-span-6 p-2 text-xs md:text-sm text-left">
            Relational: MySQL, Oracle, PostgreSQL.
            <br />
            Non-Relational: MongoDB, Elasticsearch, Oracle NoSQL, HarperDB.
          </div>
        </div>
        <div className="rounded-xl col-span-6 row-span-2 md:row-span-3 portrait:lg:row-span-3 bento-card flex flex-col justify-start items-start p-2">
          <div className="rounded-xl col-span-12 row-span-6 px-2 py-1 md:py-2 text-xs md:text-sm text-left purple-grad-font font-semibold flex justify-center items-center">
            <PiChatsDuotone color="#6e18f0" /> &nbsp; Communication
          </div>
          <div className="w-full rounded-xl col-span-12 row-span-6 p-2 text-xs md:text-sm text-left">
            Identifying specific requirements, managing client expectations,
            ensuring quality delivery.
          </div>
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,192L34.3,186.7C68.6,181,137,171,206,144C274.3,117,343,75,411,80C480,85,549,139,617,154.7C685.7,171,754,149,823,138.7C891.4,128,960,128,1029,154.7C1097.1,181,1166,235,1234,240C1302.9,245,1371,203,1406,181.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg> */}
    </div>
  );
};

export default ProfileSummary;
