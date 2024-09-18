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
    <div className="w-full z-[1] bg-white">
      <ContentFragment id="intro-section" className="w-full h-screen">
        <Intro></Intro>
      </ContentFragment>
      <ContentFragment id="profile-summary-section" className="w-full h-screen md:h-full lg-h-screen bg-[#ffffff10] pt-5 pb-3 mb-16">
        <ProfileSummary></ProfileSummary>
      </ContentFragment>
      <ContentFragment id="projects-section" className="w-full min-h-screen bg-black pb-5">
        <Projects />
      </ContentFragment>
      <ContentFragment id="work-experience-section" className="w-full min-h-screen bg-amber-600 py-5">
        <WorkExp />
      </ContentFragment>
      <ContentFragment id="skills-section" className="w-full min-h-screen bg-white py-5">
        Skills
      </ContentFragment>
      <ContentFragment id="technology-section" className="w-full min-h-screen bg-white py-5">
        Technology
      </ContentFragment>
      <ContentFragment id="contact-section" className="w-full min-h-screen bg-white py-5">
        Contact
      </ContentFragment>
      <ContentFragment id="footer-content-section" className="w-full min-h-screen bg-white py-5">
        Footer Content
      </ContentFragment>
    </div>
  );
};

export default Contents;
