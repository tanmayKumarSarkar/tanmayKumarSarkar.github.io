import React from "react";
import "./ProjectContent.css";
import SmartWeld from "./SmartWeld";
import Uhg from "./UHG";
import Infohub from "./Infohub";
import TeamsApp from "./TeamsApp";
import EtransScoreCard from "./EtransScoreCard";
import { removeSidebarActivate } from "../../../utils";
import { useEffect } from "react";

const LoadComp = ({ name, project }) => {
  name = name.toLowerCase();
  useEffect(()=>{
    console.log(project);
    removeSidebarActivate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[]);

  if (name.includes("united") && name.includes("health"))
    return <Uhg project={project} />;
  if (name.includes("sustainability ") && name.includes("info"))
    return <Infohub project={project} />;
  if (name.includes("microsoft ") && name.includes("teams"))
    return <TeamsApp project={project} />;
  if (name.includes("smart") && name.includes("weld"))
    return <SmartWeld project={project} />;
  if (name.includes("scorecard") && name.includes("prediction"))
    return <EtransScoreCard project={project} />;

  return "<></>";
};

export default LoadComp;
