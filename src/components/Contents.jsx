import React, { lazy } from "react";
// import ContentFragment from "./ContentFragment";
// import Intro from "./Intro/Intro3";
import ProfileSummary from "./Summary/ProfileSummary";
// import Projects from "./Projects/Projects";

const ContentFragment = lazy(() => import("./ContentFragment.jsx"));
const Intro = lazy(() => import("./Intro/Intro3.jsx"));
// const ProfileSummary = lazy(() => import("./Summary/ProfileSummary.jsx"));
const Projects = lazy(() => import("./Projects/Projects.jsx"));
const WorkExp = lazy(() => import("./Work/WorkExp.jsx"));

const Contents = () => {
  return (
    <div className="w-full z-[1]">
      <ContentFragment className="w-full h-screen">
        <Intro></Intro>
      </ContentFragment>
      <ContentFragment className="w-full h-screen bg-white py-5">
        <ProfileSummary></ProfileSummary>
      </ContentFragment>
      <ContentFragment className="w-full h-screen bg-amber-600 py-5">
        <WorkExp />
      </ContentFragment>
      <ContentFragment className="w-full h-screen bg-green-600 py-5">
        <Projects />
      </ContentFragment>
    </div>
  );
};

export default Contents;
