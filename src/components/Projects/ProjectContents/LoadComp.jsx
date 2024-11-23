import React from "react";
import "./ProjectContent.css";
import SmartWeld from "./SmartWeld";
import Uhg from "./UHG";
import Infohub from "./Infohub";
import TeamsApp from "./TeamsApp";
import EtransScoreCard from "./EtransScoreCard";
import { removeSidebarActivate } from "../../../utils";
import { useEffect } from "react";
import EtransRTracking from "./EtransRTracking";
import PeekHire from "./PeekHire";
import SmartPump from "./SmartPump";
import OIDM from "./OIDM";
import Aeromexico from "./Aeromexico";
import YTY from "./YTY";
import CWP from "./CWP";

const LoadComp = ({ name, project }) => {
  name = name.toLowerCase();
  useEffect(() => {
    console.log(project);
    removeSidebarActivate();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
  if (name.includes("real-time") && name.includes("vehicle tracking"))
    return <EtransRTracking project={project} />;
  if (name.includes("peekhire") && name.includes("hiring"))
    return <PeekHire project={project} />;
  if (name.includes("smart") && name.includes("pump"))
    return <SmartPump project={project} />;
  if (name.includes("oidm") && name.includes("oracle"))
    return <OIDM project={project} />;
  if (name.includes("aeromexico") && name.includes("baggage"))
    return <Aeromexico project={project} />;
  if (name.includes("yty") && name.includes("gloves"))
    return <YTY project={project} />;
  if (name.includes("cwp") && name.includes("telecommunications"))
    return <CWP project={project} />;

  return "<></>";
};

export default LoadComp;
