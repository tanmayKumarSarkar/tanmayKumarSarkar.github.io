import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [wrapperOffset, setWrapperOffset] = useState(0); //0 to height of div
  const [wrapperOffsetPct, setWrapperOffsetPct] = useState(0); //0 to height of div

  const wrapperPosition = () => {
    const wrapper = document
      .querySelector(".parallax-wrapper")
      ?.getBoundingClientRect();
    let wrapperScrollPos = 0;
    if (!!wrapper) {
      // wrapperScrollPos =   wrapper.height - wrapper.top;
      // if(wrapperScrollPos<0){
      //     wrapperScrollPos = 0
      // }if(wrapperScrollPos>wrapper.height){}
      wrapperScrollPos = Math.min(
        wrapper.height,
        Math.max(0, wrapper.height - wrapper.top)
      );
    }
    console.log(
      "wrapperScrollPos:::",
      wrapperScrollPos,
      wrapper.height,
      "Pct::",
      (wrapperScrollPos / wrapper.height) * 100,
      "% "
    );
    setWrapperOffset(wrapperScrollPos);
    setWrapperOffsetPct((wrapperScrollPos / wrapper.height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", wrapperPosition);
  }, []);

  useEffect(() => {
    let rocketGroup = document.querySelector(".rocket-group");
    let rocket = document.querySelector(".rocket");
    let wrapper = document
      .querySelector(".parallax-wrapper")
      ?.getBoundingClientRect();

    let rocketTop =
      wrapperOffset - (rocket.getBoundingClientRect().height + 50);

    if (rocketTop < 0) rocketTop = 0;
    let wrapperHeight = wrapper.height;
    if (wrapperHeight == wrapperOffset)
      rocketTop = wrapperOffset - (rocket.getBoundingClientRect().height + 10);

    // console.log("wrapperOffset::", wrapperOffset, "rocketTop", rocketTop);

    rocketGroup.style.top = rocketTop + "px";
  }, [wrapperOffset]);

  useEffect(() => {
    let rocketGroup = document.querySelector(".rocket-group");
    let rocket = document.querySelector(".rocket");
    let rocketFire = document.querySelector(".rocket-group .rocket-fire");
    let rocketSmoke = document.querySelector(".rocket-group .rocket-smoke");
    let wrapper = document
      .querySelector(".parallax-wrapper")
      ?.getBoundingClientRect();

    if (!!rocketSmoke && !!rocketFire) {
      if (wrapperOffsetPct < 90) {
        rocketSmoke.style.opacity = 0;
        rocketFire.style.opacity = 1;
      } else if (wrapperOffsetPct > 90) {
        rocketSmoke.style.opacity = 1;
        rocketFire.style.opacity = 0;
      }
      if (wrapperOffsetPct > 99) {
        console.log("---------------------------", wrapperOffsetPct);

        rocketSmoke.style.opacity = 0;
        rocketFire.style.opacity = 0;
      }
    }
  }, [wrapperOffsetPct]);

  return (
    <div className="contact-wrapper w-full min-h-screen">
      <div className="back -bottom-1 md:-bottom-8">
        <div className="sky"></div>
        <div className="ground ">
          <img className="" src="/assets/Contact/mars-sky-brown.png" alt="" />
        </div>
      </div>
      <div className="parallax-wrapper">
        <div className="prlx-elm satelite w-[30%] md:w-[25%]  ">
          <img src="/assets/Contact/satelite.png" alt="" />
        </div>
        <div className="prlx-elm planet-1 w-[20%] md:w-[8%]  ">
          <img src="/assets/Contact/planet-1.png" alt="" />
        </div>
        <div className="prlx-elm planet-2 w-[20%] md:w-[8%]  ">
          <img src="/assets/Contact/planet-2.png" alt="" />
        </div>
        <div className="prlx-elm planet-3 w-[20%] md:w-[8%]  ">
          <img src="/assets/Contact/planet-3.png" alt="" />
        </div>
        <div className="prlx-elm planet-4 w-[20%] md:w-[8%]  ">
          <img src="/assets/Contact/planet-4.png" alt="" />
        </div>
        <div className="prlx-elm planet-5 w-[20%] md:w-[8%]  ">
          <img src="/assets/Contact/planet-5.png" alt="" />
        </div>
        <div className="prlx-elm rocket-group ">
          <div className=" rocket ">
            <img src="/assets/Contact/rocket-4.png" alt="" />
          </div>
          <div className=" rocket-fire ">
            <img src="/assets/Contact/rocket-fire.png" alt="" />
          </div>
          <div className=" rocket-smoke ">
            <img src="/assets/Contact/rocket-smoke.png" alt="" />
          </div>
        </div>
        <div className="prlx-elm rover ">
          <img src="/assets/Contact/rover-2.png" alt="" />
        </div>
      </div>
      <div className="front"></div>
    </div>
  );
};

export default Contact;
