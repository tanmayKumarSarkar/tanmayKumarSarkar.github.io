import React from "react";
import "./ProjectContent.css";
import SmartWeld from "./SmartWeld";

const LoadComp = ({ name }) => {
  name = name.toLowerCase();
  if (name.includes("smart") && name.includes("weld")) return <SmartWeld />;

  return "<></>";
};

export default LoadComp;
