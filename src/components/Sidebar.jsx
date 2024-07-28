import React from "react";
import { zIndex } from "../utils";

function Sidebar() {
  return (
    <div
      className={`h-screen fixed top-0 right-0 bg-opacity-20 bg-slate-500 w-[10vw] min-w-[30px] max-w-[60px] flex text-center justify-center items-center z-2 z-${zIndex.sideBar}`}
    >
      Sidebar
    </div>
  );
}

export default Sidebar;
