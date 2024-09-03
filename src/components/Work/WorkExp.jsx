import React, { useState } from "react";

import { profileDetails } from "../../utils";
import ExperienceDetails from "./ExperienceDetails";

function WorkExp() {
  const [workProfile, setWorkProfile] = useState(
    null
    // profileDetails?.experience[2]?.works
  );
  return (
    <div className="w-full h-full flex justify-center items-center">
      <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden antialiased">
        <div className="w-full mx-auto px-0 py-0">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-4xl mx-auto">
              {/* Vertical Timeline #3 */}
              <div className="space-y-0 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:ml-[10.16rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {/* Item #1 */}
                {profileDetails?.experience?.map((exp, i) => (
                  <ExperienceDetails key={`exp-${i}`} exp={exp} index={i} />
                ))}
              </div>
              {/* End: Vertical Timeline #3 */}
            </div>
          </div>
        </div>
      </section>

      <div className="flex-row hidden">
        <div className="flex flex-col justify-between">
          {profileDetails?.experience?.map((exp, i) => (
            <div
              key={exp.company}
              className="flex flex-col border border-white rounded-lg"
            >
              <div>{exp.duration}</div>
              <div>{exp.company}</div>
              <div>{exp.location}</div>
            </div>
          ))}
        </div>
        <div>x</div>
        <div className="flex flex-col justify-between items-start text-start">
          {workProfile?.map((work, i) => (
            <div
              key={`work-${i}`}
              className="flex flex-col border border-white rounded-lg"
            >
              <div>{work}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
