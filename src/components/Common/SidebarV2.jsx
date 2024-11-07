import React, { useEffect } from "react";
import { customNav, sideNavActivate, zIndex, isNavScroll } from "../../utils";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { navRoutes } from "../../utils";
import IconComp from "./IconComp";
import { motion, useAnimate } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import "./Common.css";

function SidebarV2() {
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();
  let timeoutId = 0;
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

    if(!!timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      intersectionViewportContainers();
    }, 200);

  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () =>{
      document.removeEventListener("scroll", onScroll, true);
      if(!!timeoutId) clearTimeout(timeoutId);
    }
  });

  const intersectionViewportContainers = ()=>{
    console.log("isNavScroll ", isNavScroll);
    
    if(isNavScroll) return;
    let containerList = [];
    document.querySelectorAll('.fragment-content').forEach(elm=>{
      let elmRect = elm.getBoundingClientRect();
      let visibleHeight = 0;
      if(elmRect.top>0 && elmRect.top>=window.innerHeight){
        visibleHeight = 0;
      }
      if(elmRect.top>0 && elmRect.top<window.innerHeight){
        if(elmRect.bottom<window.innerHeight){
          visibleHeight = elmRect.bottom;
        }else{
          visibleHeight = window.innerHeight-elmRect.top;
        }
      }
      if(elmRect.top<0){
        if(elmRect.bottom<=0){
          visibleHeight = 0;
        }else{
          visibleHeight = Math.min(elmRect.bottom, window.innerHeight);
        }
      }
      let visiblePct = (Math.round(visibleHeight/window.innerHeight*10000)/100);
      let path = `/#${elm.getAttribute('id')}`;
      containerList.push({path, visiblePct});
    })
    if(containerList.length>0){
      let maxVisible = containerList.reduce((a,b)=>a.visiblePct>b.visiblePct?a:b)
      console.log("max Visible ", maxVisible);
      let pathParts = window.location.pathname.split("/").length;
      if (pathParts < 3 && maxVisible.visiblePct>1) {
        window.history.replaceState(null, "My Portfolio", maxVisible.path);
        sideNavActivate(maxVisible.path);
      }
    } 
  }

  const navClick = (path, i) => {
    customNav(path, false, navigate);
    sideNavActivate(path);
    // document
    //   .querySelectorAll(".sidebar-navigation li")
    //   .forEach((ele) => ele.classList.remove("active"));
    // document
    //   .querySelectorAll(".sidebar-navigation li")
    //   [i].classList.add("active");
  };

  return (
    <motion.div
      initial="hidden"
      // animate="visible"
      variants={slideInFromRight(0.5)}
      ref={scope}
      className={`h-screen fixed top-0 right-0 w-[10vw] min-w-[35px] max-w-[60px] mr-2 md:-mr-0 flex text-center justify-end items-center sidebar-container2 z-2 z-${zIndex.sideBar}`}
    >
      <div className="sidebar-navigation">
        <ul>
          {navRoutes.map((nav, i) => (
            <li
              key={nav.id}
              path={nav.path}
              aria-label={nav.title}
              className={`${i == 0 ? "active" : ""}`}
              onClick={() => navClick(nav.path, i)}
            >
              <span className="text-xl lg:text-2xl side-menu-icon">
                <IconComp componentName={nav.icon} />
              </span>
              <span className="tooltip">
                <span className="menu-span-item-label">{nav.title}</span>
              </span>
            </li>
          ))}
          {/* <li class="active">
            <i class="fa fa-share-alt"></i>
            <span class="tooltip">Connections</span>
          </li>
          <li>
            <i class="fa fa-hdd-o"></i>
            <span class="tooltip">Devices</span>
          </li>
          <li>
            <i class="fa fa-newspaper-o"></i>
            <span class="tooltip">Contacts</span>
          </li>
          <li>
            <i class="fa fa-print"></i>
            <span class="tooltip">Fax</span>
          </li>
          <li>
            <i class="fa fa-sliders"></i>
            <span class="tooltip">Settings</span>
          </li> */}
        </ul>
      </div>
      {/* <div className="menu-bar flex flex-col">
        {navRoutes.map((nav) => {
          return (
            <a
              key={nav.id}
              aria-label={nav.title}
              // title={nav.title}
              onClick={() => customNav(nav.path)}
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
      </div> */}
      {/* <div className="w-full h-full absolute bg-white"></div> */}
      <div className="flex flex-col menu-wrapper"></div>
    </motion.div>
  );
}

export default SidebarV2;
