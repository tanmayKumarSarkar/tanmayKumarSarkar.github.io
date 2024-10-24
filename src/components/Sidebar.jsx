import React, { useEffect } from "react";
import { customNav, zIndex } from "../utils";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { navRoutes } from "../utils";
import IconComp from "./Common/IconComp";
import { motion, useAnimate } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";

function Sidebar() {
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();
  // const Icon = React.lazy(()=> import('react-icons/io5').then(module=>({default:module['IoPieChart']})))
  const onScroll = () => {
    // 60px
    let navRect = document.querySelector("nav")?.getBoundingClientRect();
    let slideInProp = {
      hidden: {
        x: 100,
        opacity: 0,
        transition: {
          duration: 0.8,
        },
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      },
    };
    if (navRect && navRect.bottom < 10) {
      animate(scope.current, slideInProp.visible);
    } else {
      animate(scope.current, slideInProp.hidden);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, true);
  });

  return (
    <motion.div
      initial="hidden"
      // animate="visible"
      variants={slideInFromRight(0.5)}
      ref={scope}
      className={`h-screen fixed top-0 right-0 w-[10vw] min-w-[35px] max-w-[60px] mr-2 md:-mr-0 flex text-center justify-center items-center sidebar-container z-2 z-${zIndex.sideBar}`}
    >
      <div className="menu-bar flex flex-col">
        {navRoutes.map((nav) => {
          return (
            <a
              key={nav.id}
              aria-label={nav.title}
              // title={nav.title}
              // href={nav.path}
              // onClick={() => navigate(nav.path)}
              onClick={
                () => customNav(nav.path)
                // document
                //   .getElementById(nav.path.replace("/#", ""))
                //   .scrollIntoView()
              }
              className="p-2 my-3 sidebar header-nav-item cursor-pointer"
            >
              <span className="menu-span-item relative">
                <span className="text-xl lg:text-3xl">
                  <IconComp componentName={nav.icon} />
                </span>
                <span className="menu-span-item-label">{nav.title}</span>
              </span>
            </a>
          );
        })}
      </div>
      {/* <div className="w-full h-full absolute bg-white"></div> */}
      <div className="flex flex-col menu-wrapper">
        {/* {navRoutes.map((nav) => {
        
        return (<a key={nav.id}
          href={nav.path}
          onClick={() => navigate(nav.path)}
          className="p-2 my-1 header-nav-item cursor-pointer"
        >
          <span className="menu-span-item"><span className="text-xl lg:text-3xl"><IconComp componentName={nav.icon} /></span></span>
          
        </a>)
      })} */}
        {/* <a href="/#" onClick={() => navigate('/#')}
        className="p-2 header-nav-item cursor-pointer"
      > <IoHome /> </a> */}
      </div>
    </motion.div>
  );
}

export default Sidebar;
