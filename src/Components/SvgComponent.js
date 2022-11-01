import React from "react";

function SvgComponent({ DSvg }) {
  return (
    <svg
      viewBox="0 0 98 96"
      fill="#1c1794"
      height="100px"
      width="100px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icons/misc/bag/outline">
        <path id="Mask" fillRule="evenodd" clipRule="evenodd" d={DSvg}></path>
      </g>
    </svg>
  );
}

export default SvgComponent;
