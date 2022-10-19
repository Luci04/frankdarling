import React from "react";
import "./EmailSection.css";

const EmailSection = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className="container">
        <div className="text-container">
          <div className="text-left">
            In love? Darling, you need all the help
            <span className="mobile-hide" /> you can get.
          </div>
          <div className="text-right">
            Sign up for practical advice on the <span className="mobile-hide" />
            irrational matters of the heart.
          </div>
        </div>
        <div className="email-container">
          <form>
            <input placeholder="enter your email" />
            <div className="input-arrow">
              <img
                src="https://frankdarling.com/assets/images/newsletter/arrow.svg"
                alt="Submit-arrow"
              />
            </div>
            <div className="helper-message">
              Frank Darling doesn't spam, and neither should you.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
