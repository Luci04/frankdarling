import React from "react";
import "./AnimatedLink.css";

export const AnimatedLink = ({ Context }) => {
  return (
    <div className="link-container">
      <div className="show-rings text-sm">{Context}</div>
    </div>
  );
};
