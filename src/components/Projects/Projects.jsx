import React, { Suspense, lazy, useEffect } from "react";
import "./Projects.css";
import { profileDetails } from "../../utils";
const ProjectItem = lazy(() => import("./ProjectItem.jsx"));

const Projects = () => {
  useEffect(() => {
    let projectCardContainer = document.querySelector(
      ".project-card-container"
    );
  }, []);

  const mouseMove = (e) => {
    let projectCardContainer = document.querySelector(
      ".project-card-container"
    );
    // console.log("Mouse Move: ", e, e.clientX, e.clientY);
    projectCardContainer.style.setProperty("--mx", e.clientX + "px");
    projectCardContainer.style.setProperty("--my", e.clientY + "px");
  };

  return (
    <div className="w-full h-full flex flex-row flex-wrap justify-evenly blue-scroll-cursor">
      <div className="w-full -mt-1 mb-4">
        {/* <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 130"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
              <stop stopColor="rgba(255, 251.118, 249.871, 1)" offset="0%" />
              <stop stopColor="rgba(82.284, 82.284, 82.284, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,26L40,26C80,26,160,26,240,34.7C320,43,400,61,480,71.5C560,82,640,87,720,80.2C800,74,880,56,960,58.5C1040,61,1120,82,1200,84.5C1280,87,1360,69,1440,60.7C1520,52,1600,52,1680,45.5C1760,39,1840,26,1920,17.3C2000,9,2080,4,2160,15.2C2240,26,2320,52,2400,54.2C2480,56,2560,35,2640,34.7C2720,35,2800,56,2880,71.5C2960,87,3040,95,3120,97.5C3200,100,3280,95,3360,86.7C3440,78,3520,65,3600,56.3C3680,48,3760,43,3840,47.7C3920,52,4000,65,4080,69.3C4160,74,4240,69,4320,71.5C4400,74,4480,82,4560,75.8C4640,69,4720,48,4800,49.8C4880,52,4960,78,5040,80.2C5120,82,5200,61,5280,49.8C5360,39,5440,39,5520,36.8C5600,35,5680,30,5720,28.2L5760,26L5760,130L5720,130C5680,130,5600,130,5520,130C5440,130,5360,130,5280,130C5200,130,5120,130,5040,130C4960,130,4880,130,4800,130C4720,130,4640,130,4560,130C4480,130,4400,130,4320,130C4240,130,4160,130,4080,130C4000,130,3920,130,3840,130C3760,130,3680,130,3600,130C3520,130,3440,130,3360,130C3280,130,3200,130,3120,130C3040,130,2960,130,2880,130C2800,130,2720,130,2640,130C2560,130,2480,130,2400,130C2320,130,2240,130,2160,130C2080,130,2000,130,1920,130C1840,130,1760,130,1680,130C1600,130,1520,130,1440,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"
          />
          <defs>
            <linearGradient id="sw-gradient-1" x1={0} x2={0} y1={1} y2={0}>
              <stop stopColor="rgba(255, 250.028, 248.432, 1)" offset="0%" />
              <stop stopColor="rgba(255, 255, 255, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
            fill="url(#sw-gradient-1)"
            d="M0,91L40,78C80,65,160,39,240,23.8C320,9,400,4,480,13C560,22,640,43,720,45.5C800,48,880,30,960,28.2C1040,26,1120,39,1200,52C1280,65,1360,78,1440,75.8C1520,74,1600,56,1680,56.3C1760,56,1840,74,1920,69.3C2000,65,2080,39,2160,26C2240,13,2320,13,2400,26C2480,39,2560,65,2640,78C2720,91,2800,91,2880,80.2C2960,69,3040,48,3120,39C3200,30,3280,35,3360,34.7C3440,35,3520,30,3600,28.2C3680,26,3760,26,3840,23.8C3920,22,4000,17,4080,13C4160,9,4240,4,4320,10.8C4400,17,4480,35,4560,45.5C4640,56,4720,61,4800,54.2C4880,48,4960,30,5040,36.8C5120,43,5200,74,5280,78C5360,82,5440,61,5520,52C5600,43,5680,48,5720,49.8L5760,52L5760,130L5720,130C5680,130,5600,130,5520,130C5440,130,5360,130,5280,130C5200,130,5120,130,5040,130C4960,130,4880,130,4800,130C4720,130,4640,130,4560,130C4480,130,4400,130,4320,130C4240,130,4160,130,4080,130C4000,130,3920,130,3840,130C3760,130,3680,130,3600,130C3520,130,3440,130,3360,130C3280,130,3200,130,3120,130C3040,130,2960,130,2880,130C2800,130,2720,130,2640,130C2560,130,2480,130,2400,130C2320,130,2240,130,2160,130C2080,130,2000,130,1920,130C1840,130,1760,130,1680,130C1600,130,1520,130,1440,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"
          />
        </svg> */}
        <div className="wave-container h-[30px] relative overflow-x-clip">
          <div className="wave-container-wrapper">
            <div className="wave1"></div>
            <div className="wave2"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white -mt-6 mb-6 text-2xl">
          ACCOMPLISHED PROJECTS
        </div>
      </div>
      <div
        className="w-full h-full flex flex-row flex-wrap justify-evenly project-card-container"
        onMouseMove={(e) => mouseMove(e)}
      >
        {profileDetails?.projects
          ?.filter((p) => p.visible)
          .sort((p1, p2) => p1.order - p2.order)
          ?.map((exp, i) => (
            <ProjectItem key={`exp-${i}`} exp={exp} index={i} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
