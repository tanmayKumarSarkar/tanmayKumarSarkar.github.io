import React, { lazy, useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { profileDetails } from "../../utils";
import { HeaderContext, useHeaderMenuCtx } from "../../utils/Context.jsx";
import { PiCompassToolFill } from "react-icons/pi";
import { FaGripfire } from "react-icons/fa";

import "./Projects.css";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { TiArrowBack } from "react-icons/ti";
const Carousel = lazy(() => import("../Common/Carousel.jsx"));
const LoadComp = lazy(() => import("./ProjectContents/LoadComp.jsx"));

const ProjectDetails = (props) => {
  // console.log(props);
  const { projectid } = useParams();
  const exp = profileDetails.projects.find((p) => p.id == projectid);
  const allProjects = profileDetails.projects
    ?.filter((p) => p.visible)
    .sort((p1, p2) => p1.order - p2.order);
  const expIndex = allProjects.findIndex((p) => p.id == projectid);
  const prevId = expIndex > 0 ? allProjects[expIndex - 1].id : -2;
  const nextId =
    expIndex < allProjects.length - 1 ? allProjects[expIndex + 1].id : -1;

  const [headerMenu, setHeaderMenu] = useHeaderMenuCtx();
  // const {showHeader, setShowHeader} = useContext(HeaderContext);
  useEffect(() => {
    setHeaderMenu(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    window.addEventListener("keyup", keyUpHandler);
    AddSwipeEvent();

    return () => {
      window.removeEventListener("keyup", keyUpHandler);
      removeSwipeEvent();
    };
  });

  const keyUpHandler = (e) => {
    const key = e.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    if (e.key == "ArrowLeft") {
      document.querySelector(".prev-btn")?.click();
    }
    if (e.key == "ArrowRight") {
      document.querySelector(".next-btn")?.click();
    }
  };

  const navigate = useNavigate();

  /* Touch Swipe Logic*/
  let startX = 0,
    startY = 0;
  let endX = 0,
    endY = 0;
  let swipeDistanceThreshold = window.innerWidth / 5 || 50;

  const AddSwipeEvent = () => {
    const swipeArea = document.querySelector(".project-details-container");
    // Touch start event
    swipeArea.addEventListener("touchstart", touchStartHandler);
    // Touch end event
    swipeArea.addEventListener("touchend", touchEndHandler);
  };

  const removeSwipeEvent = () => {
    const swipeArea = document.querySelector(".project-details-container");
    swipeArea.removeEventListener("touchstart", touchStartHandler);
    swipeArea.removeEventListener("touchend", touchEndHandler);
  };

  const touchStartHandler = (e) => {
    startX = e.touches[0].clientX; // Starting X position
    startY = e.touches[0].clientY; // Starting Y position
  };
  const touchEndHandler = (e) => {
    endX = e.changedTouches[0].clientX; // Ending X position
    endY = e.changedTouches[0].clientY; // Ending Y position

    const diffX = endX - startX; // Horizontal movement
    const diffY = endY - startY; // Vertical movement

    // Check if the horizontal swipe is significant and larger than vertical movement
    const angle =
      Math.atan2(Math.abs(diffY), Math.abs(diffX)) * (180 / Math.PI);
    // console.log(
    //   "Angle: ",
    //   angle,
    //   ", Y-Dis: ",
    //   Math.abs(diffY),
    //   ", X-Dis: ",
    //   Math.abs(diffX),
    //   " Dis-Threshold: ",
    //   swipeDistanceThreshold
    // );
    if (
      Math.abs(diffX) > Math.abs(diffY) &&
      Math.abs(diffX) > swipeDistanceThreshold &&
      Math.abs(diffY) < swipeDistanceThreshold &&
      angle < 30
    ) {
      if (diffX > 0) {
        console.log("Swiped Right!", angle);
        document.querySelector(".prev-btn")?.click();
      } else {
        console.log("Swiped Left!", angle);
        document.querySelector(".next-btn")?.click();
      }
    }
  };
  /* */

  return (
    <div className="project-details-container min-h-[calc(100vh-49px)] text-white bg-[#040016] pb-4">
      <div className="h-14 bg-[#040016]"></div>
      <div className=" flex justify-center items-center mt-6">
        <div className="project-details-wrapper max-w-5xl px-10 ">
          <div className="text-left">
            <div className="text-xs font-medium flex justify-between items-center">
              <span className="text-xs font-medium ">{exp.Category}</span>
              <span className="flex">
                <a
                  href="#"
                  onClick={() => navigate(-1)}
                  className="flex mr-1 md:mr-24"
                >
                  <span className="flex justify-end items-center bg-[#20202070] hover:bg-[#33333390] rounded-md pl-1 pr-2 prv-nxt-btn">
                    <TiArrowBack /> &nbsp;Back
                  </span>
                </a>

                {prevId != -2 && (
                  <Link to={`/project/${prevId}`} className="flex ">
                    <span className="flex justify-end items-center bg-[#20202070] hover:bg-[#33333390] rounded-md pl-1 pr-2 prv-nxt-btn prev-btn">
                      <MdKeyboardDoubleArrowLeft /> Prev
                    </span>
                  </Link>
                )}
                {nextId != -1 && (
                  <Link to={`/project/${nextId}`} className="flex ml-1">
                    <span className="flex justify-end items-center bg-[#20202070] hover:bg-[#33333390] rounded-md pl-1 pr-2 prv-nxt-btn next-btn">
                      Next <MdKeyboardDoubleArrowRight />
                    </span>
                  </Link>
                )}
              </span>
            </div>
            <div className="text-3xl font-medium mt-2">{exp.Project}</div>
            <div className="mt-8 text-base font-semibold">At-A-Glance</div>
            <div className="mt-2">{exp.Description}</div>
          </div>

          <div className="mt-5">
            <div className="mt-8 mb-5 text-base font-semibold text-left">
              Screen Captures
            </div>
            {exp.AllScreens && (
              <Carousel
                imageSet={{
                  path: `/assets/Projects/${exp.Project}`,
                  images: exp.AllScreens,
                }}
              ></Carousel>
            )}
          </div>

          <div className="drtr-container mt-8 grid grid-cols-2 md:grid-cols-4 md:text-start gap-6 ">
            <div className="flex flex-col">
              <div className="text-base font-semibold">Duration: </div>
              <div className="mt-2 basis-full">{exp.Duration}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-base font-semibold">Role: </div>
              <div className="mt-2 basis-full ">{exp.Role}</div>
            </div>
            <div className="flex flex-col">
              <div className=" font-semibold">Tools/Technologies:</div>
              <ul className="mt-2 basis-full text-start">
                {exp["Tools/Technologies"].map((t) => (
                  <li className="flex" key={t}>
                    <PiCompassToolFill className="mr-3" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">Responsibilities: </div>
              <ul className="mt-2 basis-full text-start">
                {exp.Responsibilities.map((r) => (
                  <li className="flex" key={r}>
                    <FaGripfire className="mr-3" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between sr-matrix-container mt-10">
            <div className="flex-grow max-w-[48%] md:max-w-[45%] p-2 md:px-8 text-left">
              <div className="font-semibold">Revenue</div>
              {/* <div className="text-sm my-1">{exp.Revenue}</div> */}
              <div
                className="text-sm my-1"
                dangerouslySetInnerHTML={{ __html: exp.Revenue }}
              />
            </div>
            <div className="flex-grow max-w-[48%] md:max-w-[45%] p-2 md:px-8 text-left">
              <div className="font-semibold">Sales</div>
              {/* <div className="text-sm my-1">{exp.Sales}</div> */}
              <div
                className="text-sm my-1"
                dangerouslySetInnerHTML={{ __html: exp.Sales }}
              />
            </div>
          </div>

          <div className="mt-12 flex gap-4 justify-start items-center">
            <div className="shrink-0 grow-0 basis-[20vw] md:basis-[15vw] text-left font-semibold tw-pre-bar">
              THE WHAT
            </div>
            <div className="text-left">{exp.The_what}</div>
          </div>
          <div className="mt-6 flex gap-4 justify-start items-center">
            <div className="shrink-0 grow-0 basis-[20vw] md:basis-[15vw] text-left font-semibold tw-pre-bar">
              THE WHY
            </div>
            <div className="text-left">{exp.The_why}</div>
          </div>
          <div className="mt-6 flex gap-4 justify-start items-center">
            <div className="shrink-0 grow-0 basis-[20vw] md:basis-[15vw] text-left font-semibold tw-pre-bar">
              THE HOW
            </div>
            <div className="text-left">{exp.The_how}</div>
          </div>
          <div className="mt-6 flex gap-4 justify-start items-center">
            <div className="shrink-0 grow-0 basis-[20vw] md:basis-[15vw] text-left font-semibold tw-pre-bar">
              PROBLEM
            </div>
            <div className="text-left">{exp.Problem}</div>
          </div>
          <div className="mt-6 flex gap-4 justify-start items-center">
            <div className="shrink-0 grow-0 basis-[20vw] md:basis-[15vw] text-left font-semibold tw-pre-bar">
              SOLUTION
            </div>
            <div className="text-left">{exp.Solution}</div>
          </div>

          <div className="mt-10 external-details">
            <LoadComp name={exp.Project} project={exp}></LoadComp>
          </div>

          <div className="flex justify-end text-xs font-medium pt-5">
            <span className="flex">
              {prevId != -2 && (
                <Link to={`/project/${prevId}`} className="flex ">
                  <span className="flex justify-end items-center bg-[#20202070] hover:bg-[#33333390] rounded-md pl-1 pr-2 prv-nxt-btn">
                    <MdKeyboardDoubleArrowLeft /> Prev
                  </span>
                </Link>
              )}
              {nextId != -1 && (
                <Link to={`/project/${nextId}`} className="flex ml-1">
                  <span className="flex justify-end items-center bg-[#20202070] hover:bg-[#33333390] rounded-md pl-1 pr-2 prv-nxt-btn">
                    Next <MdKeyboardDoubleArrowRight />
                  </span>
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
