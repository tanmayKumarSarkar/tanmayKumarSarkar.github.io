import React, { useEffect } from "react";

const ScrollIndicator = () => {
  //   console.log("scroll");
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("footer__progress_bar").style.width = scrolled + "%";
  document.getElementById("footer__progress_bar").innerHTML =
    Math.round(scrolled) + "%";
};

const PageScrollBar = () => {
  useEffect(() => {
    window.addEventListener("scroll", ScrollIndicator);
    return () => document.removeEventListener("scroll", ScrollIndicator, true);
  }, []);

  return (
    <div className="footer-progress-container">
      <div id="footer__progress_bar">0%</div>
    </div>
  );
};

export default PageScrollBar;
