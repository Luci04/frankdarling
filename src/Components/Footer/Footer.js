import React, { useState } from "react";
import Option from "../../Option.json";
import FooterBox from "../FooterBox/FooterBox";
import "./Footer.css";

function Footer() {
  const [index, setIndex] = useState(null);

  return (
    <div className="footer-container">
      <div className="footer-box-section">
        {Option.FooterOption.map((ele, ind) => {
          return (
            <FooterBox
              correctIndex={ind}
              index={index}
              setIndex={setIndex}
              key={ind}
              data={ele}
            />
          );
        })}
        <div className="lets-chat-container">
          <div className="lets-chat">
            <h3>LET'S CHAT</h3>
            <div className="book-us">
              <span>Book an Appointment</span>
              <img
                src="https://frankdarling.com/assets/images/footer/arrow.svg"
                class="h-2"
                alt="arror"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="avail-box">
        <div className="time-left">
          We're available by text and chat
          <br />
          every day, 10 a.m.- 6 p.m. ET.
        </div>
        <div className="time-right">
          <div>hello@frankdarling.com</div>
          <div>(646) 859-0718</div>
          <div className="time-right-icon">
            <a
              class="relative block"
              href="https://www.facebook.com/frankdarlingny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="w-100 relative block"
                src="https://frankdarling.com/assets/images/icons/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a
              class="relative block"
              href="https://www.instagram.com/frankdarling/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="w-100 relative block"
                src="https://frankdarling.com/assets/images/icons/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a
              class="relative block"
              href="https://twitter.com/frankdarlingny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="w-100 relative block"
                src="https://frankdarling.com/assets/images/icons/twitter.svg"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="brand-box">
        <img
          src="https://frankdarling.com/assets/images/icons/frank_darling.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
