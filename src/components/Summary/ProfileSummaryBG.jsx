import React, { lazy } from "react";
const MovingRectBG = lazy(() => import("./MovingRectBG.jsx"));

const ProfileSummaryBG = () => {
  return (
    <div className="w-full h-full ps-background-elements absolute">
      <MovingRectBG />
      {/* <BlobBGMoving /> */}
      {/* <div className="triangle t1"></div>
      <div className="triangle t2"></div>
      <div className="triangle t1"></div>
      <div className="triangle t1"></div>
      <div class="ball b1"></div>
      <div class="ball b2"></div>
      <div class="ball b3"></div> */}
      {/* <div className="pendulum">
        <div className="pendulum_box">
          <div className="ball first"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball last"></div>
        </div>
      </div> */}
    </div>
  );
};

export default ProfileSummaryBG;
