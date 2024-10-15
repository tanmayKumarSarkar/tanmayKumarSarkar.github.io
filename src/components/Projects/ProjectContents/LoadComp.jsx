import React from "react";
import "./ProjectContent.css";
import SmartWeld from "./SmartWeld";
import Uhg from "./UHG";
import Infohub from "./Infohub";
import TeamsApp from "./TeamsApp";

const LoadComp = ({ name, project }) => {
  console.log(project);
  name = name.toLowerCase();
  if (name.includes("united") && name.includes("health"))
    return <Uhg project={project} />;
  if (name.includes("sustainability ") && name.includes("info"))
    return <Infohub project={project} />;
  if (name.includes("microsoft ") && name.includes("teams"))
    return <TeamsApp project={project} />;
  if (name.includes("smart") && name.includes("weld"))
    return <SmartWeld project={project} />;

  return "<></>";
};

export default LoadComp;
