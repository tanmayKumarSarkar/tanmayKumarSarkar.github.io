import React from "react";

function ContentFragment({ className, children }) {
  return <div className={`${className}`}>{children}</div>;
}

export default ContentFragment;
