import React from "react";
import ContentFragment from "./ContentFragment";
import Intro from "./Intro2";

const Contents = () => {
  return (
    <div className="w-full z-[1]">
      <ContentFragment className="w-full h-screen">
        <Intro></Intro>
      </ContentFragment>
      <ContentFragment className="w-full h-screen bg-slate-600 py-5">
        Container
      </ContentFragment>
      <ContentFragment className="w-full h-screen bg-amber-600 py-5">
        Container
      </ContentFragment>
      <ContentFragment className="w-full h-screen bg-green-600 py-5">
        Container
      </ContentFragment>
    </div>
  );
};

export default Contents;
