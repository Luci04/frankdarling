import React from "react";
import "./CustomDropDown.css";

const CustomDropDown = ({ title, currState, setCurrState, drop = false }) => {
  return (
    <div
      className="dropdown-container"
      onClick={() => setCurrState(!currState)}
    >
      {title}
      {drop && (
        <img
          className={currState ? `face-right` : `face-down`}
          src="https://frankdarling.com/assets/images/icons/chevron.svg"
          alt="Up-arrow"
        />
      )}
    </div>
  );
};

export default CustomDropDown;
