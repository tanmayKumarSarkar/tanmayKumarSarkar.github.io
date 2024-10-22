import React, { useEffect } from "react";
import "./MinorProjects.css";
import { profileDetails } from "../../utils";

const MinorProjects = () => {
  useEffect(() => {
    const light = document.querySelector(".mp-light");
    const grid = document.querySelector(".minor-project-wrapper");

    grid?.addEventListener("mousemove", function (e) {
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
    });
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
              <div>{p.name}</div>
              <div className="text-xs mt-2">{p.description}</div>
              <div className="text-xs mt-2">{p.technologies}</div>
              <div className="text-xs mt-2">
                <a href={p.git}>Git</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinorProjects;
