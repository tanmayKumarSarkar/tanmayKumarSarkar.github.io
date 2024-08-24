import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import { useTrail, animated, useSpring } from "@react-spring/web";

import styles from "./BlobStyle.module.css";
import { getRandomInt } from "../../utils";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

let intervalId = null;

const BlobBGMoving = () => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top, right, bottom }] = useMeasure();
  const ps_bg_elm = document
    .querySelector(".ps-background-elements")
    ?.getBoundingClientRect();

  const handleMouseMove = (e) => {
    // let clientX = 0,
    //   clientY = 0;
    // if (e.type == "touchmove" && !!e.changedTouches?.length > 0) {
    //   clientX = e.changedTouches[0].clientX;
    //   clientY = e.changedTouches[0].clientY;
    // }
    // if (e.type == "mousemove") {
    //   clientX = e.clientX;
    //   clientY = e.clientY;
    // }

    console.log("XY: ", e.clientX, e.clientY, "bg-elm: ", ps_bg_elm);
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };

  const [y, setY] = useSpring(() => ({
    from: { y: ref?.current?.scrollTop || 0 },
    onFrame: (props) => {
      // ref.current.scrollTop = props.y;
      // ref.current.scrollTop = props.y;
      api.start({
        xy: [(ps_bg_elm?.left + ps_bg_elm?.right) / 2 - left, props.y - top],
      });
    },
  }));

  useEffect(() => {
    if (ps_bg_elm) {
      console.log(
        ps_bg_elm,
        (ps_bg_elm?.left + ps_bg_elm?.right) / 2,
        (ps_bg_elm?.top + ps_bg_elm?.bottom) / 2
      );
      api.start({
        xy: [(ps_bg_elm?.left + ps_bg_elm?.right) / 2 - left, 30],
      });
    }
  });

  useEffect(() => {
    if (!!intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => moveBlob(), 1000);
  }, []);

  const moveBlob = () => {
    const ps_bg_elm = document
      .querySelector(".ps-background-elements")
      ?.getBoundingClientRect();
    if (ps_bg_elm) {
      let xPos = getRandomInt(-60, 60);
      let yPos = getRandomInt(-70, 70);
      let { top, left, bottom, right } = ps_bg_elm;
      console.log(
        "moveBlob ======>> left: ",
        left,
        " , top: ",
        top,
        ", xPos: ",
        xPos,
        ", yPos: ",
        yPos,
        ", trail: ",
        trail
      );
      trail.forEach((t) => {
        let oldXPos = t["xy"]["animation"]["fromValues"][0];
        let oldYPos = t["xy"]["animation"]["fromValues"][1];
        let newXPos = oldXPos + xPos;
        let newYPos = oldYPos + yPos;
        if (newXPos < left || newXPos > right) newXPos = oldXPos - xPos;
        if (newYPos < top || newYPos > bottom) newYPos = oldYPos - yPos;
        console.log(
          "xPos: ",
          xPos,
          ", yPos: ",
          yPos,
          ", oldXPos: ",
          oldXPos,
          ", oldYPos: ",
          oldYPos,
          ", newXPos: ",
          newXPos,
          ", newYPos: ",
          newYPos
        );
        api.start({
          xy: [newXPos, newYPos],
        });
      });
    }
  };

  return (
    <div className="w-full h-full background-elements absolute">
      <div className={styles.container}>
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="30"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </svg>
        <div
          ref={ref}
          className={styles.hooksMain}
          // onMouseMove={handleMouseMove}
          // onTouchMoveCapture={handleMouseMove}
        >
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={{ transform: props.xy.to(trans) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlobBGMoving;
