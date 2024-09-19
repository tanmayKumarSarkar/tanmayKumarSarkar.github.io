import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { profileDetails } from "../../utils";
import { HeaderContext, useHeaderMenuCtx } from "../../utils/Context.jsx";

const ProjectDetails = (props) => {
  // console.log(props);
  const { projectid } = useParams();
  const exp = profileDetails.projects.find((p) => p.id == projectid);

  const [headerMenu, setHeaderMenu] = useHeaderMenuCtx();
  // const {showHeader, setShowHeader} = useContext(HeaderContext);
  useEffect(()=>{
    setHeaderMenu(true);
  },[])

  return (
    <div className="project-details-container min-h-[calc(100vh-49px)] bg-white">
      <div className="h-14 bg-[#040016]"></div>
      Project details
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
