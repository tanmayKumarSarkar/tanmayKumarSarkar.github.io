import React from "react";

const ProjectDetails = ({ exp, index: i }) => {
  return (
    <div>
      <div>{exp.Project}</div>
      <div>{exp.Description}</div>
      <div>{exp.Role}</div>
      <div>{exp.Responsibilities}</div>
      <div>{exp.Duration}</div>
      <div>{exp.Title}</div>
      <div>{exp.Description_2}</div>
      <div>{exp.Revenue}</div>
      <div>{exp.Sales}</div>
      <div>{exp.The_what}</div>
      <div>{exp.The_why}</div>
      <div>{exp.The_how}</div>
      <div>{exp.Problem}</div>
      <div>{exp.Solution}</div>
    </div>
  );
};

export default ProjectDetails;
