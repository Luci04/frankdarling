import React from "react";
import { AnimatedLink } from "../Animatedlink/AnimatedLink";
import "./MobileOptionExpand.css";

function MobileOptionExpand({ index, Option, correctIndex }) {
  return (
    <div
      className={
        "mobile-options-container" + (index !== correctIndex ? " d-none" : "")
      }
    >
      {Option.map((ele, ind) => (
        <>
          <div
            key={ind}
            className={
              "mobile-options-section"
              //+ `${ele.removePadding ? " remove-padding" : ""}` +
              // `${ele.rightBorder ? " right-border" : ""}`
            }
          >
            <div className="mobile-option-first">
              <h3>{ele.mainTitle}</h3>
              <AnimatedLink Context={"View all"} />
            </div>
            <div
              className={
                "mobile-options-link-container " +
                `${ele.AddedClassName ? ele.AddedClassName : ""}`
              }
            >
              {ele["Options-link"].map((link, index) => (
                <a key={index} href={link.href}>
                  {link.isSvg ? (
                    <span>
                      <svg className="w-6 h-6" viewBox="0 0 49 70" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d={link.svg}
                          fill="#1c1794"
                        ></path>
                      </svg>
                    </span>
                  ) : null}
                  {link.isImg ? (
                    <span>
                      <img
                        src={link.imgScr}
                        className="w-6 h-6"
                        alt={link.title}
                      />
                    </span>
                  ) : null}

                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default MobileOptionExpand;
