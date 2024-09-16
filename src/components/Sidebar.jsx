import React from "react";
import { zIndex } from "../utils";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { navRoutes } from "../utils";
import IconComp from "./Common/IconComp";

function Sidebar() {
  const navigate = useNavigate();
  // const Icon = React.lazy(()=> import('react-icons/io5').then(module=>({default:module['IoPieChart']})))

  
  return (
    <div
      className={`h-screen fixed top-0 right-0 bg-opacity-20 bg-slate-500 w-[10vw] min-w-[30px] max-w-[60px] flex text-center justify-center items-center z-2 z-${zIndex.sideBar}`}
    >
      {/* <div className="w-full h-full absolute bg-white"></div> */}
      <div className="flex flex-col menu-wrapper">

      {navRoutes.map((nav) => {
        
        return (<a key={nav.id}
          href={nav.path}
          onClick={() => navigate(nav.path)}
          className="p-2 my-1 header-nav-item cursor-pointer"
        >
          <span className="menu-span-item"><span className="text-xl lg:text-3xl"><IconComp componentName={nav.icon} /></span></span>
          {/* <IoHome /> */}
        </a>)
      })}
      {/* <a href="/#" onClick={() => navigate('/#')}
        className="p-2 header-nav-item cursor-pointer"
      > <IoHome /> </a> */}
      
      </div>
    </div>
  );
}

export default Sidebar;

