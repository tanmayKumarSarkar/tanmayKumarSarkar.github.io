import React, { useEffect, useRef, useState } from "react";

const SmartPump = ({ project }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    let video = document.querySelector(".video__player");
    let observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].intersectionRatio > 0.8) {
          startVideo();
          setPlaying(true);
        } else {
          pauseVideo();
          setPlaying(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );

    debounce(observer.observe(video), 200);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  const startVideo = () => {
    videoRef.current.play();
    // document.querySelector(".video__player")?.play();
    setPlaying(false);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    // document.querySelector(".video__player")?.pause();
    setPlaying(true);
  };

  const handleVideoPress = () => {
    if (playing) {
      startVideo();
    } else {
      pauseVideo();
    }
  };

  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback(...args);
      }, wait);
    };
  };

  return (
    <div>
      <div className="SmartPump-wrapper project-wrapper">
        <div>
          {/* <h2 className="mt-4">Demo</h2> */}
          <div className="flex items-center justify-center py-4">
            <video
              className="w-[99%] md:w-[80%] video__player"
              // autoPlay
              controls
              muted
              onClick={handleVideoPress}
              loop
              ref={videoRef}
              src={`/assets/Projects/${project.Project}/Smart Water Pump.mp4`}
            >
              {/* <source
                src={`/assets/Projects/${project.Project}/Smart Water Pump.mp4`}
                type="video/mp4"
              /> */}
              Your browser does not support the video tag.
            </video>
          </div>

          <h2 className="uppercase mt-4">USE CASE</h2>
          <h3 className="mt-4 capitalize">
            Solving Major Problems of Agriculture{" "}
          </h3>
          <ul className="text-left text-sm mt-2">
            <li>Water dependent Agriculture</li>
            <li>Scarcity of water</li>
            <li>
              Inefficient usage of water leads to inefficient irrigation -
              Depletion of ground water level
            </li>
            <li>Imagination based Irrigation leads to misuse of water</li>
            <li>
              Insufficient knowledge regarding irrigation schedule (crop wise)
            </li>
            <li>
              Reduction in the ground water level leads to the deterioration of
              the water quality
            </li>
            <li>
              Weather parameters ( Rain, humidity, temperature, storm) affect
              the crop yield
            </li>
          </ul>

          <h3 className="mt-4 capitalize">Solution Implementation</h3>
          <ul className="text-left text-sm mt-2">
            <li>
              Farmers can regulate their pump from Smart Phone Application
              remotely.
            </li>
            <li>
              Crop selection, farmland size and location selection gives
              Irrigation schedule and the pump can be used accordingly.
            </li>
            <li>Manual pump ON/OFF Option.</li>
            <li>
              Weather data(Temperature, Humidity , Wind Speed , Rainfall) in
              current and predictive form will help farmers to protect their
              crop from weather fluctuation.
            </li>
            <li>
              ALGORITHM based irrigation scheduling driven by IoT solution to
              save water in agriculture also reduce cost of Agriculture in the
              form of Electricity/Pump Fuel savings.
            </li>
          </ul>

          <h3 className="mt-4 capitalize">Components</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Hardware.png`}
              alt="Hardware"
            />
          </div>
          <ul className="text-left text-sm mt-2">
            <li>Arduino Uno</li>
            <li>GSM SIM900A Module</li>
            <li>Relay Module</li>
            <li>Node Js Server</li>
            <li>Mongo DB</li>
            <li>React & React Native UI</li>
          </ul>

          <h3 className="mt-4 capitalize">Benefits</h3>
          <ul className="text-left text-sm mt-2">
            <li>
              Estimated Water savings: 20% - 30% more than sprinkler or drip
              irrigation system
            </li>
            <li>
              Estimated Energy savings: cost of irrigation will be reduced by
              30%
            </li>
            <li>
              Reduced weather related risks as weather related information will
              be available in the application as current and future data
            </li>
            <li>
              Productive use of farmland (Example: One crop land can be
              converted to two crop land and two to three)
            </li>
            <li>
              Increased yield, increase in the farmer's income and water savings
            </li>
          </ul>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[60%] md:w-[40%]"
              src={`/assets/Projects/${project.Project}/Irrigation Schedule List.jpg`}
              alt="Irrigation Schedule"
            />
          </div>
          <h3 className="mt-4 capitalize">Key Technical Ideas</h3>
          <ul className="text-left text-sm mt-2">
            <li>
              ET(Evapotranspiration), Soil texture, crop based Irrigation
              Schedule calculation
            </li>
            <li>
              Based on data analytics pump regulation and alarm generation will
              be available in the mobile application using irrigation scheduling
            </li>
          </ul>
        </div>
        <div>
          <h2 className="my-4 uppercase">Features</h2>
          <ul className="text-left text-sm mt-2">
            <li>
              Irrigation Schedule on the Basis of Land Size, Pump Capacity, Crop
              ,Soil Texture in the Backend Software component
            </li>
            <li>
              Control Signal Come from Mobile application to Central Processing
              unit through Node MCU Module
            </li>
            <li>
              ON/OFF signal from Central processing unit to Intermediate Relay
            </li>
            <li>
              Intermediate Relay to Heavy Duty Three Phase or Single Phase Relay
            </li>
            <li>Relay to Pump</li>
            <li>Pump ON/OFF Functionality</li>
          </ul>
          {/* <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Features.jpg`}
              alt="Features"
            />
          </div> */}
          <ul className="text-left text-sm"></ul>

          <h2 className="mt-4">Architecture</h2>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Architecture.png`}
              alt="Architecture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPump;
