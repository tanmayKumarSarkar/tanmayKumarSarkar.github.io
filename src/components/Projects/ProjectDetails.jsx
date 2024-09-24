import React, { lazy, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { profileDetails } from "../../utils";
import { HeaderContext, useHeaderMenuCtx } from "../../utils/Context.jsx";
import { PiCompassToolFill } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaGripfire } from "react-icons/fa";

import "./Projects.css";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const LoadComp = lazy(() => import("./ProjectContents/LoadComp.jsx"));

const ProjectDetails = (props) => {
  // console.log(props);
  const { projectid } = useParams();
  const exp = profileDetails.projects.find((p) => p.id == projectid);

  const [headerMenu, setHeaderMenu] = useHeaderMenuCtx();
  // const {showHeader, setShowHeader} = useContext(HeaderContext);
  useEffect(() => {
    setHeaderMenu(true);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="project-details-container min-h-[calc(100vh-49px)] bg-white">
      <div className="h-14 bg-[#040016]"></div>
      <div className=" flex justify-center items-center my-6">
        <div className="project-details-wrapper max-w-5xl px-10">
          <div className="text-left">
            <div className="text-xs font-medium  flex justify-between">
              <span className="text-xs font-medium ">{exp.Category}</span>
              <span>
                <a href="#" onClick={() => navigate(-1)} className="flex ">
                  <span className="flex justify-end items-center hover:bg-slate-100 px-1">
                    <MdKeyboardDoubleArrowLeft /> Back
                  </span>
                </a>
              </span>
            </div>
            <div className="text-3xl font-medium mt-2">{exp.Project}</div>
            <div className="mt-6 text-base font-semibold">At-A-Glance</div>
            <div className="mt-2">{exp.Description}</div>
          </div>

          <div className="drtr-container mt-6 grid grid-cols-2 md:grid-cols-4 md:text-start gap-6 ">
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

          <div className="flex justify-evenly sr-matrix-container mt-6">
            <div className="flex-grow max-w-[48%] md:max-w-[45%] p-2 md:px-8 text-left">
              <div className="font-semibold">Revenue</div>
              <div>{exp.Revenue}</div>
            </div>
            <div className="flex-grow max-w-[48%] md:max-w-[45%] p-2 md:px-8 text-left">
              <div className="font-semibold">Sales</div>
              <div>{exp.Sales}</div>
            </div>
          </div>

          <div className="mt-6 flex gap-4 justify-start items-center">
            <div className="shrink-0 grow-0 basis-[20vw] md:basis-[15vw] text-left font-semibold">
              THE WHAT
            </div>
            <div className="text-left">{exp.The_what}</div>
          </div>
          <div className="mt-6 flex gap-4 justify-start items-center">
            <div className="shrink-0 grow-0 basis-[20vw] md:basis-[15vw] text-left font-semibold">
              THE WHY
            </div>
            <div className="text-left">{exp.The_why}</div>
          </div>
          <div className="mt-6 flex gap-4 justify-start items-center">
            <div className="shrink-0 grow-0 basis-[20vw] md:basis-[15vw] text-left font-semibold">
              THE HOW
            </div>
            <div className="text-left">{exp.The_how}</div>
          </div>
          <div className="mt-6 flex gap-4 justify-start items-center">
            <div className="shrink-0 grow-0 basis-[20vw] md:basis-[15vw] text-left font-semibold">
              PROBLEM
            </div>
            <div className="text-left">{exp.Problem}</div>
          </div>
          <div className="mt-6 flex gap-4 justify-start items-center">
            <div className="shrink-0 grow-0 basis-[20vw] md:basis-[15vw] text-left font-semibold">
              SOLUTION
            </div>
            <div className="text-left">{exp.Solution}</div>
          </div>

          <div className="mt-6 external-details">
            <LoadComp name={exp.Project} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
