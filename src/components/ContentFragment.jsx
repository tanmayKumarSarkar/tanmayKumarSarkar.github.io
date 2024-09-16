import React from "react";

function ContentFragment({ id, className, children }) {
  return <div id={id} className={`${className}`}>{children}</div>;
}

export default ContentFragment;
