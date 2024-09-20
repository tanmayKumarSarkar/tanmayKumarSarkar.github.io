import React from "react";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { profileDetails } from "../../utils";

function ProjectDetails({ work, index: i }) {
  // console.log(work.Project, profileDetails.projects);
  const prj = profileDetails.projects.find((p) => p.Project == work.Project);
  let prjId = prj ? prj.id : 0;
  return (
    <div>
      <div className="text-slate-500 ml-7 md:ml-0 mt-4 mb-2">
        <span className="text-slate-900 text-sm font-medium text-outer-shadow">
          {work.Project}
        </span>
      </div>
      <div className="p-4 text-slate-500 ml-7 md:ml-0 flex flex-col justify-between items-start text-start text-sm outer-shadow">
        <div className="flex flex-col border border-white rounded-lg w-full">
          {/* <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
            /> 
            <span className="block max-h-9 overflow-hidden transition-all duration-300 peer-checked/showLabel:max-h-52">*/}
          <div className="relative w-full">
            {work.Description}
            {/* <span className="absolute ">
                <svg
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
                </span> */}
          </div>
          <div className="flex justify-end">
            <span>
              <Link
                className="text-slate-900 text-lg font-medium px-6 py-2 flex inner-shadow-sm justify-center items-center"
                to={{
                  pathname: `/project/${prjId}`,
                  exp: work,
                  index: i,
                  pid: prjId,
                }}
              >
                <span className="text-sm">See More &nbsp;</span>
                <FaRegShareFromSquare />
              </Link>
            </span>
          </div>
          <div className="mt-0.5 hidden">
            <span className="text-slate-900 text-sm font-medium">
              Role:&nbsp;
            </span>
            {work.Role}
          </div>
          <div className="flex flex-row flex-wrap mt-0.5 hidden">
            <span className="flex flex-row flex-wrap">
              <span className="text-slate-900 text-sm font-medium">
                Tools/Technologies:&nbsp;
              </span>
              {work["Tools/Technologies"].map((t) => (
                <span
                  key={`tech-${i}-${t}`}
                  className="px-1 ml-1 mb-0.5 border border-gray-400 border-solid rounded-lg"
                >
                  {t}
                </span>
              ))}
            </span>
          </div>
          <div className="flex flex-row flex-wrap mt-0.5 hidden">
            <span className="flex flex-row flex-wrap">
              <span className="text-slate-900 text-sm font-medium">
                Responsibilities:&nbsp;
              </span>
              {work["Responsibilities"].map((t) => (
                <span
                  key={`tech-${i}-${t}`}
                  className="px-1 ml-1 mb-0.5 border border-gray-400 border-solid rounded-lg"
                >
                  {t}
                </span>
              ))}
            </span>
          </div>
          {/* </span>
          </label> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
