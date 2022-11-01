import React, { useEffect } from "react";
import "./CustomDropDown.css";

const CustomDropDown = ({ title, currState, setCurrState, drop, level }) => {
  return (
    <div
      className="dropdown-container"
      onClick={() => {
        if (currState === level) {
          setCurrState(null);
        } else {
          setCurrState(level);
        }
      }}
    >
      {title}
      {drop ? (
        <img
          className={currState === level ? `face-down` : `face-right`}
          src="https://frankdarling.com/assets/images/icons/chevron.svg"
          alt="Up-arrow"
        />
      ) : null}
    </div>
  );
};

export default CustomDropDown;
