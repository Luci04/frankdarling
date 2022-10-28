import React from "react";
import "./CustomDropDown.css";

const CustomDropDown = ({
  title,
  currState,
  setCurrState,
  drop = false,
  level,
}) => {
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
      {drop && (
        <img
          className={currState === level ? `face-down` : `face-right`}
          src="https://frankdarling.com/assets/images/icons/chevron.svg"
          alt="Up-arrow"
        />
      )}
    </div>
  );
};

export default CustomDropDown;
