import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [wrapperOffset, setWrapperOffset] = useState(0); //0 to height of div
  const [wrapperOffsetPct, setWrapperOffsetPct] = useState(0); //0 to height of div
  const [formObj, setFormObj] = useState({
    name: "",
    email: "",
    phno: "",
    message: "",
  });

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
      "Pct::",
      (wrapperScrollPos / wrapper.height) * 100,
      "% "
    );
    setWrapperOffset(wrapperScrollPos);
    setWrapperOffsetPct((wrapperScrollPos / wrapper.height) * 100);

    updateObjectPosition((wrapperScrollPos / wrapper.height) * 100);
  };

  const updateObjectPosition = (wrapperOffsetPct) => {
    let scrollY = window.scrollY;
    let wrapper = document
      .querySelector(".parallax-wrapper")
      ?.getBoundingClientRect();

    let rocketGroup = document.querySelector(".rocket-group");
    let rocket = document.querySelector(".rocket");
    let rocketFire = document.querySelector(".rocket-group .rocket-fire");
    let rocketSmoke = document.querySelector(".rocket-group .rocket-smoke");
    let wrapperHeight = wrapper.height;
    let marsSkyBack = document.querySelector(".ground-wrap .mars-sky-back");
    let marsSkyFront = document.querySelector(".ground-wrap .mars-sky-front");
    let contactContents = document.querySelector(
      ".ground-wrap .contact-contents"
    );
    let planet1 = document.querySelector(".planet-1");
    let planet2 = document.querySelector(".planet-2");
    let planet3 = document.querySelector(".planet-3");
    let planet4 = document.querySelector(".planet-4");
    let planet5 = document.querySelector(".planet-5");
    let siteFooterCR = document
      .querySelector(".site-footer")
      .getBoundingClientRect();

    let wrapperOffset = (wrapperOffsetPct * wrapperHeight) / 100;
    let rocketTop =
      wrapperOffset - (rocket.getBoundingClientRect().height + 50);

    if (rocketTop < 0) rocketTop = 0;
    if (wrapperHeight == wrapperOffset)
      rocketTop = wrapperOffset - (rocket.getBoundingClientRect().height + 10);

    console.log("wrapperOffset::", wrapperOffset, "rocketTop", rocketTop);

    rocketGroup.style.top = rocketTop + "px";

    let rover = document.querySelector(".rover");
    let satelite = document.querySelector(".satelite");

    rover.style.left = (wrapperOffsetPct * 70) / 100 + "%";
    rover.style.scale = wrapperOffsetPct / 200 + 0.5;
    satelite.style.right = ((101 - wrapperOffsetPct) * 75) / 100 + "vw";
    satelite.style.top = (wrapperOffsetPct / 100) * 10 + "%";
    satelite.style.scale = Math.abs(wrapperOffsetPct / 100 - 0.5) + 0.5;

    // if (wrapperOffsetPct < 15) {
    // } else if (wrapperOffsetPct >= 15 && wrapperOffsetPct < 45) {
    // } else if (wrapperOffsetPct >= 45 && wrapperOffsetPct < 55) {
    // } else if (wrapperOffsetPct >= 55 && wrapperOffsetPct < 90) {
    // } else if (wrapperOffsetPct >= 90) {
    // }

    if (!!rocketSmoke && !!rocketFire) {
      if (wrapperOffsetPct < 90) {
        rocketSmoke.style.opacity = 0;
        rocketFire.style.opacity = 1;
      } else if (wrapperOffsetPct >= 90) {
        rocketSmoke.style.opacity = 1;
        rocketFire.style.opacity = 0;
      }
      if (wrapperOffsetPct > 99) {
        rocketSmoke.style.opacity = 0;
        rocketFire.style.opacity = 0;
      }
    }
    marsSkyBack.style.top = (wrapperHeight - wrapperOffset) * 0.8 + "px";
    marsSkyFront.style.top = (wrapperHeight - wrapperOffset) * 0.4 + "px";
    contactContents.style.top =
      siteFooterCR.top > window.innerHeight
        ? (wrapperHeight - wrapperOffset) * 0.1 + "px"
        : siteFooterCR.height / 2 -
          (wrapperHeight - wrapperOffset) * 0.8 +
          "px";
    // siteFooterCR.height / 2 - (wrapperHeight - wrapperOffset) * 0.1 + "px";
    planet1.style.top = wrapperOffsetPct * 0.2 + "%";
    planet2.style.top = wrapperOffsetPct * 0.2 + "%";
    // planet2.style.right = planet2.style.right + wrapperOffsetPct * 0.1 + "%";
    planet3.style.top = wrapperOffsetPct * 0.3 + "%";
    planet4.style.top = wrapperOffsetPct * 0.085 + "%";
    // planet4.style.top = wrapperOffsetPct * 0.15 + "%";
    planet5.style.top = wrapperOffsetPct * 0.15 + "%";
  };

  useEffect(() => {
    window.addEventListener("scroll", wrapperPosition);
    setTimeout(() => {
      wrapperPosition();
    }, 500);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Validate if the input is not empty
    if (!value.trim()) {
      setError("This field is required.");
    } else {
      setError("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      // Submit form
    }
  };

  /*
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

    console.log("wrapperOffset::", wrapperOffset, "rocketTop", rocketTop);

    rocketGroup.style.top = rocketTop + "px";
  }, [wrapperOffset]);
  */

  /*
  useEffect(() => {
    console.log("wrapperOffsetPct:: ", wrapperOffsetPct);

    let rocketGroup = document.querySelector(".rocket-group");
    let rocket = document.querySelector(".rocket");
    let rocketFire = document.querySelector(".rocket-group .rocket-fire");
    let rocketSmoke = document.querySelector(".rocket-group .rocket-smoke");
    let wrapper = document
      .querySelector(".parallax-wrapper")
      ?.getBoundingClientRect();

    let rover = document.querySelector(".rover");
    rover.style.left = (wrapperOffsetPct / 3) * 2 + "%";
    let satelite = document.querySelector(".satelite");
    satelite.style.left = (wrapperOffsetPct / 5) * 4 + "%";
    // satelite.style.scaleX = wrapperOffsetPct / 100;

    if (!!rocketSmoke && !!rocketFire) {
      if (wrapperOffsetPct < 90) {
        rocketSmoke.style.opacity = 0;
        rocketFire.style.opacity = 1;
      } else if (wrapperOffsetPct > 90) {
        rocketSmoke.style.opacity = 1;
        rocketFire.style.opacity = 0;
      }
      if (wrapperOffsetPct > 99) {
        rocketSmoke.style.opacity = 0;
        rocketFire.style.opacity = 0;
      }
    }
  }, [wrapperOffsetPct]);
  */

  return (
    <div className="contact-wrapper w-full min-h-screen">
      <div className="back -bottom-1 md:-bottom-8">
        <div className="sky"></div>
        <div className="ground ">
          <div className="ground-wrap">
            <img
              className="mars-sky-back"
              src="/assets/Contact/mars-sky-brown-back.webp"
              alt=""
            />
            <img
              className="mars-sky-front"
              src="/assets/Contact/mars-sky-brown-front.webp"
              alt=""
            />
            <div className="contact-contents">
              {/* // */}
              <div className="flex items-center">
                <div className="mx-auto">
                  <div className="max-w-md mx-auto contact-form-container p-5 rounded-md shadow-sm">
                    <div className="text-center">
                      <h1 className="my-3 text-3xl font-semibold text-gray-100">
                        Contact Me
                      </h1>
                      <p className="text-gray-400 dark:text-gray-400">
                        Fill up the form below to send me a message.
                      </p>
                    </div>
                    <div className="m-7">
                      <form
                        onSubmit={handleFormSubmit}
                        // action="https://api.web3forms.com/submit"
                        // method="POST"
                        id="contact-form"
                      >
                        <input
                          type="hidden"
                          name="access_key"
                          defaultValue="YOUR_ACCESS_KEY_HERE"
                        />
                        <input
                          type="hidden"
                          name="subject"
                          defaultValue="Contact Form Submission from My Portfolio"
                        />
                        <input
                          type="checkbox"
                          name="botcheck"
                          id=""
                          style={{ display: "none" }}
                        />
                        <div className="mb-6">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm text-white"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Doe"
                            required=""
                            className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm text-white"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="john@company.com"
                            required=""
                            className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="phone"
                            className="block mb-2 text-sm text-white"
                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="+1 (555) 1234-567"
                            required=""
                            className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm text-white"
                          >
                            Your Message
                          </label>
                          <textarea
                            rows={5}
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            className="w-full px-3 py-2 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                        <div className="mb-6">
                          <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 inline-block text-white no-underline hover:text-black py-4 px-4 rounded-sm focus:outline-none"
                          >
                            Send Message
                          </button>
                        </div>
                        <p
                          className="text-base text-center text-gray-400"
                          id="result"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* // */}
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-wrapper">
        <div className="prlx-elm planet-1 w-[20%] md:w-[8%]  ">
          <img src="/assets/Contact/planet-1.png" alt="" />
        </div>
        <div className="prlx-elm planet-2 w-[10%] md:w-[5%]  ">
          <img src="/assets/Contact/planet-2.png" alt="" />
        </div>
        <div className="prlx-elm planet-3 w-[10%] md:w-[6%]  ">
          <img src="/assets/Contact/planet-3.png" alt="" />
        </div>
        <div className="prlx-elm planet-4 w-[25%] md:w-[9%]  ">
          <img src="/assets/Contact/planet-4.png" alt="" />
        </div>
        <div className="prlx-elm planet-5 w-[15%] md:w-[7%]  ">
          <img src="/assets/Contact/planet-5.png" alt="" />
        </div>
        <div className="prlx-elm satelite w-[30%] md:w-[20%]  ">
          <img src="/assets/Contact/satelite.png" alt="" />
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
