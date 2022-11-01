import React, { useState } from "react";
import "./FooterBox.css";

function FooterBox({ data, correctIndex }) {
  const handleOnClick = () => {
    if (index === correctIndex) {
      setIndex(null);
    } else {
      setIndex(correctIndex);
    }
  };

  const [index, setIndex] = useState(null);

  return (
    <div className="footer-box" onClick={handleOnClick}>
      <div className="title">
        {data.title}{" "}
        <img
          className={index === correctIndex ? `face-down` : `face-right`}
          src="https://frankdarling.com/assets/images/icons/chevron-white.svg"
          alt="Up-arrow"
        />{" "}
      </div>
      <div
        className={
          "footer-list" + `${index === correctIndex ? " d-list-mobile" : ""}`
        }
      >
        <ul>
          {data.DrowDownOptions.map((ele, index) => (
            <li>
              <a href="#">{ele}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterBox;
