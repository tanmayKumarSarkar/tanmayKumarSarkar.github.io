import React from "react";

function ProjectDetails({ work, index: i }) {
  return (
    <div>
      <div className="text-slate-500 ml-7 md:ml-0 mt-2">
        <span className="text-slate-900 text-sm font-medium">
          {work.Project}
        </span>
      </div>
      <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-7 md:ml-0 flex flex-col justify-between items-start text-start text-sm">
        <div className="flex flex-col border border-white rounded-lg">
          {/* <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
            /> 
            <span className="block max-h-9 overflow-hidden transition-all duration-300 peer-checked/showLabel:max-h-52">*/}
          <div className="cursor-pointer relative">
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
          <div className="mt-0.5">
            <span className="text-slate-900 text-sm font-medium">
              Role:&nbsp;
            </span>
            {work.Role}
          </div>
          <div className="flex flex-row flex-wrap mt-0.5">
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
          <div className="flex flex-row flex-wrap mt-0.5">
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
