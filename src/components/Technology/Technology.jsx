import React from "react";
import "./Technology.css";
import { profileDetails } from "../../utils";

const Technology = () => {
  return (
  <div className="technology-container ">
    <div className="technology-back"></div>
    <div className="technology-front">
      <h2 className="mt-4">TECHNICAL SKILLS</h2>
      <div className="technical-skills-section px-10 md:px-16 pb-12">

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">Featured</h3>
         <div className="items-container">
          {profileDetails.technical_skills.Featured.map(ele=>(
              <div key={ele} className="skill-item">{ele}</div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">Languages</h3>
         <div className="items-container">
          {profileDetails.technical_skills.languages.map(ele=>(
              <div key={ele} className="skill-item">{ele}</div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">Front-end</h3>
         <div className="items-container">
          {profileDetails.technical_skills.frontend.map(ele=>(
              <div key={ele} className="skill-item">{ele}</div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">Back-end</h3>
         <div className="items-container">
          {profileDetails.technical_skills.backend.map(ele=>(
              <div key={ele} className="skill-item">{ele}</div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">Database</h3>
         <div className="items-container">
          {profileDetails.technical_skills.databases.map(ele=>(
              <div key={ele} className="skill-item">{ele}</div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">Testing</h3>
         <div className="items-container">
          {profileDetails.technical_skills.Testing.map(ele=>(
              <div key={ele} className="skill-item">{ele}</div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">DevOps</h3>
         <div className="items-container">
          {profileDetails.technical_skills.devops.map(ele=>(
              <div key={ele} className="skill-item">{ele}</div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">Hardware</h3>
         <div className="items-container">
          {profileDetails.technical_skills.hardware.map(ele=>(
              <div key={ele} className="skill-item">{ele}</div>
            ))}
         </div>
        </div>

        <div className="skills-container">
          <h3 className="items-header font-medium text-2xl mb-3 mt-4 text-center md:text-left">Miscellaneous</h3>
         <div className="items-container">
          {profileDetails.technical_skills.miscellaneous.map(ele=>(
              <div key={ele} className="skill-item">{ele}</div>
            ))}
         </div>
        </div>

      </div>
    </div>
  </div>
  );
};

export default Technology;
