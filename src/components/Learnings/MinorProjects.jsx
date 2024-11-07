import React, { useEffect } from "react";
import "./MinorProjects.css";
import { profileDetails } from "../../utils";
import { FaGithub } from "react-icons/fa";
import IconComp from "../Common/IconComp";

const MinorProjects = () => {

  const mouseMoveEvent = (e)=> {
    let light = document.querySelector(".mp-light");
    let grid = document.querySelector(".minor-project-wrapper");
    if (light) {
      // console.log(
      //   e.clientX,
      //   e.clientY,
      //   grid.getBoundingClientRect().x,
      //   grid.getBoundingClientRect().y
      // );

      e.clientX ? (light.style.left = `${e.clientX}px`) : null;
      e.clientY
        ? (light.style.top = `${
            e.clientY - grid.getBoundingClientRect().y
          }px`)
        : null;
    }
  }
  useEffect(() => {
    // console.log("MinorProjects useeffect")
    const light = document.querySelector(".mp-light");
    const grid = document.querySelector(".minor-project-wrapper");

    grid?.addEventListener("mousemove", mouseMoveEvent);
    return () => document.removeEventListener("mousemove", mouseMoveEvent, true);
  }, []);

  return (
    <div className="minor-project-wrapper w-full">
      <div className="minor-project-bg">
        <div className="mp-container">
          <div className="mp-light"></div>
          <div className="mp-grid"></div>
        </div>
        <div className="hexagon"></div>
      </div>
      <div className="minor-project-content">
        <div className="text-white mt-4 mb-6 text-2xl">
          EDUCATIONAL/ PASSION PROJECTS
        </div>
        <div className="personal-project-container pb-6">
          {profileDetails.personal_projects.map((p, i) => (
            <div
              className="personal-project-item w-[calc(100%-32px)] md:w-[calc(50%-32px)] lg:w-[calc(33%-32px)]"
              key={p.name}
            >
              <div>
                <div className="flex justify-center text-6xl py-2 icn">
                  {p.icon && (
                    <IconComp componentName={p.icon.name} lib={p.icon.lib} />
                  )}
                </div>
                <div>{p.name}</div>
                <div className="text-xs mt-2">{p.description}</div>
              </div>
              <div className="text-xs mt-2 flex flex-wrap justify-center items-center h-full">
                {p.technologies?.map((t) => (
                  <div className="tech" key={t}>
                    {t}
                  </div>
                ))}
              </div>
              <div className="text-3xl mt-2 git">
                {p.git && <a href={p.git}>
                  <FaGithub></FaGithub>
                </a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinorProjects;
