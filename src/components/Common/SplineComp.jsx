import React, { lazy, Suspense } from "react";
import Spline from "@splinetool/react-spline";

const SplineComp = ({ scene, fallback }) => {
  return (
    <Suspense fallback={fallback}>
      <Spline scene={scene} />
    </Suspense>
  );
};

export default SplineComp;
