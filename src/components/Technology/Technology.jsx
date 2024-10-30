import React from "react";
import "./Technology.css";
import { profileDetails } from "../../utils";
import { AiFillProduct } from "react-icons/ai";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaLaptopCode, FaTools } from "react-icons/fa";
import { VscServerEnvironment } from "react-icons/vsc";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { GrTestDesktop } from "react-icons/gr";
import { SiAzurepipelines } from "react-icons/si";
import { IoHardwareChip } from "react-icons/io5";
import IconComp from "../Common/IconComp";

const Technology = () => {
  return (
  <div className="technology-container ">
    <div className="technology-back"></div>
    <div className="technology-front">
      <h2 className="mt-4 page-header">TECHNICAL SKILLS</h2>
      <div className="technical-skills-section px-10 md:px-16 pb-12">

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">
            <AiFillProduct />
            Featured
          </h3>
         <div className="items-container">
          {profileDetails.technical_skills.Featured.map(ele=>(
            <div key={ele.name} className="skill-item">
              <div className="skill-item-icon">
                {ele.icon && (
                    <IconComp componentName={ele.icon} lib={ele.lib} />
                  )}
                </div>
                <div className="skill-item-title">{ele.name}</div>
            </div>
          ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">
            <RiCodeBoxFill />
            Languages
          </h3>
         <div className="items-container">
          {profileDetails.technical_skills.languages.map(ele=>(
              <div key={ele.name} className="skill-item">
                <div className="skill-item-icon">
                  {ele.icon && (
                      <IconComp componentName={ele.icon} lib={ele.lib} />
                    )}
                  </div>
                <div className="skill-item-title">{ele.name}</div>
            </div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">
            <FaLaptopCode />
            Front-end
            </h3>
         <div className="items-container">
          {profileDetails.technical_skills.frontend.map(ele=>(
              <div key={ele.name} className="skill-item">
                <div className="skill-item-icon">
                  {ele.icon && (
                      <IconComp componentName={ele.icon} lib={ele.lib} />
                    )}
                  </div>
                <div className="skill-item-title">{ele.name}</div>
            </div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">
            <VscServerEnvironment />
            Back-end
          </h3>
         <div className="items-container">
          {profileDetails.technical_skills.backend.map(ele=>(
              <div key={ele.name} className="skill-item">
                <div className="skill-item-icon">
                  {ele.icon && (
                      <IconComp componentName={ele.icon} lib={ele.lib} />
                    )}
                  </div>
                <div className="skill-item-title">{ele.name}</div>
            </div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">
            <BsDatabaseFillCheck />
            Database
          </h3>
         <div className="items-container">
          {profileDetails.technical_skills.databases.map(ele=>(
              <div key={ele.name} className="skill-item">
                <div className="skill-item-icon">
                  {ele.icon && (
                      <IconComp componentName={ele.icon} lib={ele.lib} />
                    )}
                  </div>
                <div className="skill-item-title">{ele.name}</div>
            </div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">
            <GrTestDesktop />
            Testing
          </h3>
         <div className="items-container">
          {profileDetails.technical_skills.Testing.map(ele=>(
              <div key={ele.name} className="skill-item">
                <div className="skill-item-icon">
                  {ele.icon && (
                      <IconComp componentName={ele.icon} lib={ele.lib} />
                    )}
                  </div>
                <div className="skill-item-title">{ele.name}</div>
            </div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">
            <SiAzurepipelines />
            DevOps
          </h3>
         <div className="items-container">
          {profileDetails.technical_skills.devops.map(ele=>(
              <div key={ele.name} className="skill-item">
                <div className="skill-item-icon">
                  {ele.icon && (
                      <IconComp componentName={ele.icon} lib={ele.lib} />
                    )}
                  </div>
                <div className="skill-item-title">{ele.name}</div>
            </div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">
            <IoHardwareChip />
            Hardware
          </h3>
         <div className="items-container">
          {profileDetails.technical_skills.hardware.map(ele=>(
              <div key={ele.name} className="skill-item">
                <div className="skill-item-icon">
                  {ele.icon && (
                      <IconComp componentName={ele.icon} lib={ele.lib} />
                    )}
                  </div>
                <div className="skill-item-title">{ele.name}</div>
            </div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">
            <FaTools />
            Miscellaneous Tools
          </h3>
         <div className="items-container">
          {profileDetails.technical_skills.miscellaneous.map(ele=>(
              <div key={ele.name} className="skill-item">
                <div className="skill-item-icon">
                  {ele.icon && (
                      <IconComp componentName={ele.icon} lib={ele.lib} />
                    )}
                  </div>
                <div className="skill-item-title">{ele.name}</div>
            </div>
            ))}
         </div>
        </div>

      </div>
    </div>
  </div>
  );
};

export default Technology;
