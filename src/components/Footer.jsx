import React from "react";
import { zIndex } from "../utils";

const Footer = () => {
  return (
    <div
      className={`relative site-footer text-white bg-gray-950 w-full h-[8vh] z-3 z-${zIndex.footer}`}
    >
      Footer
    </div>
  );
};

export default Footer;
