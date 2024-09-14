import React, { Suspense, lazy } from "react";
import "./Projects.css";
import { profileDetails } from "../../utils";
const ProjectItem = lazy(() => import("./ProjectItem.jsx"));

const Projects = () => {
  return (
    <div className="w-full h-full flex flex-row flex-wrap justify-evenly">
      {profileDetails?.projects?.map((exp, i) => (
        <ProjectItem key={`exp-${i}`} exp={exp} index={i} />
      ))}
    </div>
  );
};

export default Projects;
