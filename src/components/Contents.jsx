import React, { lazy, useContext, useEffect, useState } from "react";
// import ContentFragment from "./ContentFragment";
// import Intro from "./Intro/Intro3";
import ProfileSummary from "./Summary/ProfileSummary";
import { HeaderContext, useHeaderMenuCtx } from "../utils/Context.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { customNav, sideNavActivate, resizeObserver } from "../utils/index.js";
// import Projects from "./Projects/Projects";

const ContentFragment = lazy(() => import("./ContentFragment.jsx"));
const Intro = lazy(() => import("./Intro/Intro3.jsx"));
// const ProfileSummary = lazy(() => import("./Summary/ProfileSummary.jsx"));
const Projects = lazy(() => import("./Projects/Projects.jsx"));
const WorkExp = lazy(() => import("./Work/WorkExp.jsx"));
const Skill = lazy(() => import("./Skills/Skill.jsx"));
const MinorProjects = lazy(() => import("./Learnings/MinorProjects.jsx"));
const Technology = lazy(() => import("./Technology/Technology.jsx"));
const Contact = lazy(() => import("./Contact/Contact.jsx"));

const Contents = () => {
  // const {showHeader, setShowHeader} = useContext(HeaderContext);
  const [headerMenu, setHeaderMenu] = useHeaderMenuCtx();
  const navigate = useNavigate();
  const location = useLocation();
  let observers = [];
  let observeh1 = null;

  const intersectionObserver = () =>{
    console.log(entries);
    /**/
    let targetSelector = '.fragment-content';
    observers = [];
    const options = {
      root: null,
      rootMargin: "100px 0px 100px 0px",
      threshold: [0,.25,.5,.75,1],
    };

    if(observeh1) observeh1.disconnect();
      //observeh1.unobserve(document.querySelector('#technology-section'));
    observeh1 = new IntersectionObserver(function(entries) {
      console.log(entries[0].intersectionRatio, entries[0]?.target, entries[0].isIntersecting, entries[0].isVisible);
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      if(entries[0].isIntersecting === true)
        console.log('Element has just become visible in screen');
    }, { threshold: [0, .2,1] });
    
    observeh1.observe(document.querySelector("#contact-section"));

    // if(observeh1) observeh1.unobserve(document.querySelector('#technology-section'));
    // observeh1 = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       console.log("entry: ", entry, "Intersection Ratio: ", entry.intersectionRatio)
    //       if (entry.isIntersecting) {
    //         console.log('h1 is in the viewport!');
    //         // entry.target.style.backgroundColor = '#3498db';
    //         // entry.target.style.fontSize = '4rem';
    //       } else {
    //         console.log('h1 is out of the viewport!');
    //         // entry.target.style.backgroundColor = '#2ecc71';
    //         // entry.target.style.fontSize = 'unset';
    //       }
    //     });
    //   },
    //   {
    //     root: null,
    //     rootMargin: '200px',
    //     threshold:[ 0.5],
    //   }
    // );
    
    // observeh1.observe(document.querySelector('#technology-section'));
    // let intersectionObserverObj = new IntersectionObserver(intersectionHandler, options);
    // intersectionObserverObj.observe(document.querySelector('#technology-section'));
    
    // document.querySelectorAll(targetSelector).forEach((i) => {
    //   console.log(i)
    //   if (i) {
    //     let intersectionObserverObj = new IntersectionObserver(intersectionHandler, options);
    //     //intersectionObserver(intersectionHandler);
    //     setTimeout(() => {
    //       intersectionObserverObj.observe(i);
    //     }, 5000);
    //     observers.push({observer: intersectionObserverObj, element: i});
    //   }
    // });
    console.log("Intersection Observers: ", observers)
    /**/
    
  }

  useEffect(() => {
    // setShowHeader(true);
    setHeaderMenu(true);
    resizeObserver.observe(document.body);
    /**/
    
    // console.log("subscribing to resizeObserver")
    if (location.hash) {
      customNav(location.hash, true);
      sideNavActivate(`/${location.hash}`);
      // console.log(`1:: ${location.pathname}${location.hash}`, document.querySelector(`a[href="${location.pathname}${location.hash}"]`))
      // let hashPath = document.querySelector(
      //   `a[href="${location.pathname}${location.hash}"]`
      // );
      // if (hashPath) {
      //   hashPath?.click();
      // } else {
      //   navigate("/#");
      // }
    }
    return () => {
      resizeObserver.unobserve(document.body);
      // observers.forEach((intersectionObserverObj) => {
      //     intersectionObserverObj.observer.unobserve(intersectionObserverObj.element);
      // });
    };
  }, []);

  const [hasError, setHasError] = useState(false);

  // useEffect(() => {
  //   const errorHandler = (event) => {
  //     setHasError(true);
  //     console.error("ErrorBoundary caught an error", event.error);
  //     navigate("/404");
  //     // window.location = "/404.html";
  //   };

  //   window.addEventListener("error", errorHandler);
  //   window.addEventListener("unhandledrejection", errorHandler);

  //   return () => {
  //     window.removeEventListener("error", errorHandler);
  //     window.removeEventListener("unhandledrejection", errorHandler);
  //   };
  // }, []);

  return (
    <div className="w-full z-[1] bg-white contents-container">
      <ContentFragment
        id="intro-section"
        className="fragment-content w-full min-h-screen md:h-screen"
      >
        <Intro></Intro>
      </ContentFragment>
      <ContentFragment
        id="profile-summary-section"
        className="fragment-content w-full h-auto lg:h-screen bg-[#ffffff10] pt-5 pb-3 mb-16"
      >
        <ProfileSummary></ProfileSummary>
      </ContentFragment>
      <ContentFragment
        id="projects-section"
        className="fragment-content w-full min-h-screen bg-black pb-5"
      >
        <Projects />
      </ContentFragment>
      <ContentFragment
        id="work-experience-section"
        className="fragment-content w-full min-h-screen bg-[#e0e0e0] py-5"
      >
        <WorkExp />
      </ContentFragment>
      <ContentFragment
        id="learnings-section"
        className="fragment-content w-full min-h-screen portrait:md:min-h-[125vh] landscape:lg:min-h-[150vh] portrait:lg:min-h-[125vh] minor-project-container "
      >
        <MinorProjects></MinorProjects>
      </ContentFragment>

      {/* <ContentFragment
        id="skills-section"
        className="w-full min-h-screen py-5 skill-container "
      >
        <Skill></Skill>
      </ContentFragment> */}
      <ContentFragment
        id="technology-section"
        className="fragment-content w-full min-h-screen technology-wrapper"
      >
        <Technology />
      </ContentFragment>
      <ContentFragment id="contact-section" className="fragment-content w-full min-h-screen">
        <Contact />
      </ContentFragment>
      {/* <ContentFragment
        id="footer-content-section"
        className="w-full min-h-screen bg-white py-5"
      >
        <Contact/>
      </ContentFragment> */}
    </div>
  );
};

export default Contents;
