import React, { useEffect } from "react";
import { getRandomInt } from "../utils";

// Night Sky Generator
const nightSky = document.createElement("div");

const starCount = 60;
// Generate stars
for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  if (i > starCount * 0.15) {
    star.style.left = `${getRandomInt(3, 75)}%`;
  } else {
    star.style.left = `${getRandomInt(87, 97)}%`;
  }
  //   star.style.left = `${getRandomInt(3, 97)}%`;
  star.style.top = `${getRandomInt(11, 30)}%`;

  star.style.width = `${getRandomInt(4, 6.5)}px`;
  //   star.style.width = `${getRandomInt(1, 2.5)}px`;
  star.style.height = star.style.width;
  let starColor = ["white", "#dcfaff", "#ffd5d5", "#fff8cd"][
    getRandomInt(0, 3)
  ];
  let backgroundImageUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid meet' viewBox='0 0 20 20' %3E%3Cpath d='M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218' fill='${starColor.replace(
    "#",
    "%23"
  )}' fillRule='nonzero' /%3E%3C/svg%3E")`;
  star.style.backgroundImage = backgroundImageUrl;
  //   star.style.borderRadius = "50%";
  //   star.style.animation = `twinkle ${getRandomInt(1, 4)}s infinite alternate`;
  star.style.animationName = "twinkle";
  star.style.animationDuration = `${getRandomInt(1, 5)}s`;
  star.style.animationDelay = `${getRandomInt(0, 2)}s`;
  star.style.animationIterationCount = `infinite`;
  star.style.animationDirection = "alternate-reverse";
  star.style.animationTimingFunction = [
    "ease",
    "linear",
    "ease-in",
    "ease-out",
    "ease-in-out",
  ][getRandomInt(0, 4)];
  star.classList.add("sky-star");
  nightSky.appendChild(star);
}

// Generate comet
for (let i = 0; i < 5; i++) {
  const comet = document.createElement("div");
  comet.classList.add("comet");
  comet.style.top = `${getRandomInt(-15, -5)}%`;
  comet.style.left = `${getRandomInt(25, 90)}%`;
  comet.style.animationDuration = `${getRandomInt(3, 5)}s`;
  comet.style.animationDelay = `${
    [2, 4, 6, 9, 11, 13, 15, 17][getRandomInt(0, 7)]
  }s`;
  console.log(comet.style.cssText);
  nightSky.append(comet);
}

// Twinkle animation
const style = document.createElement("style");

function NightSky() {
  useEffect(() => {
    document.querySelector(".night-sky-bg")?.appendChild(nightSky);
  }, []);

  return (
    <div className="night-sky-bg w-full h-full">
      <div className="moon"></div>
    </div>
  );
}

export default NightSky;
