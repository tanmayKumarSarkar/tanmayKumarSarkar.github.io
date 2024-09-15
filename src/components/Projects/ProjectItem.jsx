import React from "react";
import { Link } from "react-router-dom";

function ProjectItem({ exp, index: i }) {
  return (
    <div className="w-[calc(100%-32px)] md:w-[calc(50%-32px)] lg:w-[calc(33%-32px)] flex flex-col text-sm text-white project-card">
      <div className="my-6 mx-4 project-card-img flex justify-center items-center">
        <img
          // src={`public/assets/UnitedHealth Group Inc/UHG Home.png`}
          src={`public/assets/Projects/${exp.Project}/${
            exp.Screens ? exp.Screens[0] : ""
          }`}
          alt=""
          className="w-full "
        />
      </div>
      <div className="mx-4 my-2 text-left flex flex-col flex-grow justify-between">
        <div>
          <div className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
            {exp.Title}
          </div>
          <div className="mt-2 font-extralight text-xs">{exp.Description}</div>
        </div>
        <div className="mt-2 flex justify-end text-xs font-extralight">
          <span className="btn cursor-pointer hover:underline  text-[#d0ff00]">
            <Link
              to={{
                pathname: `/project/${exp.id}`,
                exp: exp,
                index: i,
                pid: exp.id,
              }}
            >
              {"Read More >>"}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
