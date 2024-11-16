import React, { useEffect, useState } from "react";
import "./Contact.css";
import { titleCase } from "../../utils";

const Contact = () => {
  const [wrapperOffset, setWrapperOffset] = useState(0); //0 to height of div
  const [wrapperOffsetPct, setWrapperOffsetPct] = useState(0); //0 to height of div
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formObj, setFormObj] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState("");

  const itmp = "template_n5p9rdj";
  const isr = "service_h4j7ide";
  const kpuk = "YR5CtCu68nxmG1hP4";

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
      setWrapperOffset(wrapperScrollPos);
      setWrapperOffsetPct((wrapperScrollPos / wrapper.height) * 100);

      updateObjectPosition((wrapperScrollPos / wrapper.height) * 100);
    }
    // console.log(
    //   "wrapperScrollPos:::",
    //   wrapperScrollPos,
    //   "Pct::",
    //   (wrapperScrollPos / wrapper.height) * 100,
    //   "% "
    // );
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

    // console.log("wrapperOffset::", wrapperOffset, "rocketTop", rocketTop);

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
    // contactContents.style.top =
    //   siteFooterCR.top > window.innerHeight
    //     ? (wrapperHeight - wrapperOffset) * 0.1 + "px"
    //     : siteFooterCR.height / 2 -
    //       (wrapperHeight - wrapperOffset) * 0.8 +
    //       "px";
    let rawOffset = Math.max(0, wrapper.height - wrapper.top);
    // console.log(
    //   "wrapperOffset ; ",
    //   wrapperOffset,
    //   "(wrapperHeight - wrapperOffset):: ",
    //   wrapperHeight - wrapperOffset,
    //   "offset 2: ",
    //   wrapper.height,
    //   " - ",
    //   wrapper.top
    // );
    contactContents.style.top = -wrapper.top * 0.5 + "px";
    // contactContents.style.top =
    //   (rawOffset / 2) * 0.9 +
    //   (window.innerHeight - contactContents.getBoundingClientRect().height) /
    //     2 +
    //   "px";
    // contactContents.style.top =
    //   -(wrapperHeight - wrapperOffset) * 0.9 +
    //   (window.innerHeight - contactContents.getBoundingClientRect().height) /
    //     2 +
    //   "px";
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

    return () => document.removeEventListener("scroll", wrapperPosition, true);
  }, []);

  const handleInputChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    let isRequired = e.target.required;
    let err = "";
    // console.log(isRequired, " ", !fieldVal);

    if (isRequired && !fieldVal) {
      e.target.setCustomValidity("Please fill out this field.");
      err = "required";
    } else if (!!fieldVal && !checkFieldValid(e)) {
      console.log(fieldVal, "invalid");
      e.target.setCustomValidity("Please enter a valid input.");
      err = "invalid";
    } else {
      e.target.setCustomValidity("");
      err = "";
    }
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
    }
    setError((er) => ({ ...er, [fieldName]: err }));
  };

  const checkFieldValid = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    if (fieldName == "name") {
      const pattern = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
      console.log(fieldName, " field Valid? " + pattern.test(fieldVal));
      return pattern.test(fieldVal);
    }
    if (fieldName == "email") {
      const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      console.log(fieldName, " field Valid? " + pattern.test(fieldVal));
      return pattern.test(fieldVal);
    }
    if (fieldName == "phone") {
      const pattern =
        /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/;
      console.log(fieldName, " field Valid? " + pattern.test(fieldVal));
      return pattern.test(fieldVal);
    }
    if (fieldName == "message") {
      return fieldVal.length > 2;
      console.log(fieldName, " field Valid? " + pattern.test(fieldVal));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    setFormObj(formData);
    console.log(e.target.elements, " form submit ", formData);

    if (!error.name && !error.email && !error.message) {
      // Submit form

      // setSuccessMsg("Message sent successfully!!");
      sendEmail(formData);
      togglePopUp(e, "open");
      e.target.reset();
    }
  };

  const sendEmail = (formData) => {
    var data = {
      service_id: isr,
      template_id: itmp,
      user_id: kpuk,
      template_params: {
        to_name: titleCase(formData.name),
        to_email: formData.email,
      },
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      // .then((response) => response.json())
      .then((res) => {
        console.log("email res:: ", res);

        return res;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const togglePopUp = (e, type) => {
    var target = document.querySelector("#myPopup");
    target.classList.toggle("overlay-hide");
    var popup = document.querySelector("#myPopup .popup");
    popup.classList.toggle("hide");
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
                <div className="mx-auto flex flex-col justify-center items-center h-auto lg:max-h-[95vh]">
                  <div className="max-w-md md:max-w-3xl mx-auto contact-form-container px-5 py-10 md:py-5 rounded-md shadow-sm">
                    <div className="text-center">
                      <h1 className=" text-3xl font-semibold text-gray-100">
                        Contact Me
                      </h1>
                      <p className="text-gray-400 dark:text-gray-400">
                        Fill up the form below to send me a message.
                      </p>
                    </div>
                    <div className="mx-2">
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
                        <div className="">
                          <label
                            htmlFor="name"
                            className="block mt-1 text-sm text-white"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Doe"
                            required={true}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 h-10 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="email"
                            className="block mt-1 text-sm text-white"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="john@company.com"
                            required={true}
                            onChange={handleInputChange}
                            // pattern="^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                            className="w-full px-3 py-2 h-10 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="phone"
                            className="block mt-1 text-sm text-white"
                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="+1 (555) 1234-567"
                            required={false}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 h-10 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="message"
                            className="block mt-1 text-sm text-white"
                          >
                            Your Message
                          </label>
                          <textarea
                            rows={5}
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            className="w-full px-3 py-2 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                            required={true}
                            onChange={handleInputChange}
                            defaultValue={""}
                          />
                        </div>
                        <div className="">
                          <button
                            type="submit"
                            className={`w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-500 inline-block text-white no-underline hover:text-black disabled:text-black py-3 px-4 mt-3 rounded-sm focus:outline-none`}
                            disabled={successMsg}
                          >
                            Send Message
                          </button>
                          {/*<a className="button">Let me Pop up</a>
                           {successMsg && (
                            <p className="mt-2 -mb-8 text-white">
                              {successMsg}
                            </p>
                          )} */}
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
      <div>
        <div className="container">
          <button className="toggle button" data-target="myPopup">
            Toggle popup
          </button>
          <div id="myPopup" className="overlay overlay-hide">
            <div className="popup hide">
              <div className="popup-header">
                Alert !!
                <span
                  className="close toggle"
                  onClick={(e) => togglePopUp(e, "close")}
                  data-target="myPopup"
                >
                  close
                </span>
              </div>
              <div className="popup-body">
                <div className="popup-circle">✓</div>
                Your message has been sent successfully !!
              </div>
              <div className="popup-footer">
                <button
                  className="toggle button"
                  onClick={(e) => togglePopUp(e, "close")}
                  data-target="myPopup"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
