import React, { lazy } from "react";

const MovingRectBG = lazy(() => import("./MovingRectBG.jsx"));
const SplineBG = lazy(() => import("../Common/SplineComp.jsx"));

const ProfileSummaryBG = () => {
  return (
    <div className="w-full h-full ps-background-elements absolute">
      {/* <SplineBG
        scene="https://prod.spline.design/xFUkzpdE3REc2B-g/scene.splinecode"
        fallback={<MovingRectBG />}
      /> */}
      {/* <SplineBG
        scene="https://prod.spline.design/IGRbOVoxPnHHbteh/scene.splinecode"
        fallback={<MovingRectBG />}
      /> */}
      {/* <SplineBG
        scene="https://prod.spline.design/6utEgQKBOjAUxuZS/scene.splinecode"
        fallback={<MovingRectBG />}
      /> */}
      {/* <img
        className="w-full h-full"
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWVmaWFoYTM4cmtyeWZqeXdoYWdvN2htdG9mMHkzcGduM2Y4dmVzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1H8sdPP3JDAR5iY0Yv/giphy.webp"
      /> */}
      {/* <img
        className="w-full h-full"
        src="https://i.giphy.com/5FM34bwCph7q4lnuhZ.webp"
      /> */}

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
