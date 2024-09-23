import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { profileDetails } from "../../utils";
import { HeaderContext, useHeaderMenuCtx } from "../../utils/Context.jsx";
import { PiCompassToolFill } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaGripfire } from "react-icons/fa";

import "./Projects.css";

const ProjectDetails = (props) => {
  // console.log(props);
  const { projectid } = useParams();
  const exp = profileDetails.projects.find((p) => p.id == projectid);

  const [headerMenu, setHeaderMenu] = useHeaderMenuCtx();
  // const {showHeader, setShowHeader} = useContext(HeaderContext);
  useEffect(() => {
    setHeaderMenu(true);
  }, []);

  return (
    <div className="project-details-container min-h-[calc(100vh-49px)] bg-white">
      <div className="h-14 bg-[#040016]"></div>
      <div className=" flex justify-center items-center my-6">
        <div className="project-details-wrapper max-w-5xl px-10">
          <div className="text-left">
            <div className="text-xs font-medium">{exp.Category}</div>
            <div className="text-3xl font-medium mt-2">{exp.Project}</div>
            <div className="mt-6 text-base font-semibold">At-A-Glance</div>
            <div className="mt-2">{exp.Description}</div>
          </div>

          <div className="drtr-container mt-6 grid grid-cols-2 md:grid-cols-4 md:text-start gap-6 ">
            <div>
              <div className="text-base font-semibold">Duration: </div>
              <div>{exp.Duration}</div>
            </div>
            <div className="">
              <div className="text-base font-semibold">Role: </div>
              <div>{exp.Role}</div>
            </div>
            <div className="">
              <div className="text-base font-semibold">Tools/Technologies:</div>
              <ul className=" text-start">
                {exp["Tools/Technologies"].map((t) => (
                  <li className="flex" key={t}>
                    <PiCompassToolFill className="mr-3" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <div className="text-base font-semibold">Responsibilities: </div>
              <ul className=" text-start">
                {exp.Responsibilities.map((r) => (
                  <li className="flex" key={r}>
                    <FaGripfire className="mr-3" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-evenly sr-matrix-container mt-6">
            <div className="flex-grow max-w-[45%] md:max-w-[40%] p-2 md:p-8">
              {exp.Revenue}
            </div>
            <div className="flex-grow max-w-[45%] md:max-w-[40%] p-2 md:p-8">
              {exp.Sales}
            </div>
          </div>
          <div>{exp.The_what}</div>
          <div>{exp.The_why}</div>
          <div>{exp.The_how}</div>
          <div>{exp.Problem}</div>
          <div>{exp.Solution}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
