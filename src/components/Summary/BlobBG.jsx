import * as React from "react";
import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";

import styles from "./BlobStyle.module.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const BlobBG = () => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top }] = useMeasure();

  const handleMouseMove = (e) => {
    let clientX = 0,
      clientY = 0;
    if (e.type == "touchmove" && !!e.changedTouches?.length > 0) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    }
    if (e.type == "mousemove") {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    api.start({ xy: [clientX - left, clientY - top] });
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
          onMouseMove={handleMouseMove}
          onTouchMoveCapture={handleMouseMove}
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

export default BlobBG;
