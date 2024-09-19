import React from "react";
import ProjectDetails from "./ProjectDetails";

function ExperienceDetails({ exp, index: i }) {
  return (
    <div className="relative px-3 md:px-6 py-4 exp-section shadow-sm hover:bg-slate-300 hover:bg-opacity-20 cursor-pointer">
      <div className="md:flex items-center md:space-x-4 mb-3">
        <div className="flex items-center space-x-8 md:space-x-2 md:space-x-reverse">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full outer-shadow md:order-1">
            <svg
              className="fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
            >
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
            </svg>
          </div>
          {/* Date */}
          <div className="flex w-8/12 flex-col items-center text-sm font-medium text-indigo-500 md:w-40 p-6 outer-shadow ">
            <div>{exp.duration}</div>
            <div>{exp.company}</div>
            <div>{exp.location}</div>
          </div>
        </div>

        {/* Card Right (Desktop & Tablet) */}
        <div className="hidden md:flex flex-col ">
          {exp.works.map((work, j) => (
            <ProjectDetails key={`work-${j}`} work={work} index={j} />
          ))}
          {/* <hr className="mt-5 text-slate-500 shadow-inner h-[2px]" /> */}
        </div>
      </div>
      {/* {exp.works.map((work, j) => (
      <div></div>
    ))} */}
      {/* Card Bellow (Mobile)*/}
      <div className="flex flex-col md:hidden">
        {exp.works.map((work, j) => (
          <ProjectDetails key={`work-${j}`} work={work} index={j} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceDetails;
