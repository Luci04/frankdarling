import React, { useEffect } from "react";
import OptionExpand from "../OptionExpand/OptionExpand";
import "./MobileCustomDropDown.css";

const MobileCustomDropDown = ({
  title,
  currState,
  setCurrState,
  drop,
  level,
  option,
  mobile = false,
}) => {
  return (
    <div
      className="mobile-dropdown-container"
      onClick={() => {
        if (currState === level) {
          setCurrState(null);
        } else {
          setCurrState(level);
        }
        console.log(level);
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

export default MobileCustomDropDown;
