import React from "react";
import { zIndex } from "../utils";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div
      className={`h-screen fixed top-0 right-0 bg-opacity-20 bg-slate-500 w-[10vw] min-w-[30px] max-w-[60px] flex text-center justify-center items-center z-2 z-${zIndex.sideBar}`}
    >
      <div className="flex flex-col menu-wrapper">
      <a
        href="/#"
        onClick={() => navigate('/#')}
        className="p-2 header-nav-item cursor-pointer"
      >
        <IoHome />
      </a>
      
      {/* <IoHome /> */}
      </div>
    </div>
  );
}

export default Sidebar;
