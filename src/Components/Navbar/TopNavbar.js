import React, { useState } from "react";

import CustomDropDown from "../CustomDropDown/CustomDropDown";

import "./TopNavbar.css";

const TopNavbar = () => {
  const [sideBar, setsideBar] = useState(true);
  const [engagementDrop, setEngagementDrop] = useState(true);
  const [diamondsDrop, setDiamondsDrop] = useState(true);
  const [appointmentsDrop, setAppointmentsDrop] = useState(true);
  const [aboutDrop, setAboutDrop] = useState(true);

  return (
    <div className="nav-container">
      <div className="side-bar-btn" onClick={() => setsideBar(!sideBar)}>
        {sideBar ? (
          <img
            src="https://frankdarling.com/assets/images/header/hamburger.svg"
            alt="3-bar icon"
          />
        ) : (
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#1c1794"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        )}
      </div>
      <div className="main-heading">
        <a href="/">
          <img
            src="https://frankdarling.com/assets/images/header/logo.svg"
            alt="nav company tag"
          />
        </a>
      </div>
      <div className="dropdowm-section">
        <CustomDropDown
          title="Engagement"
          currState={engagementDrop}
          setCurrState={setEngagementDrop}
          drop={1}
        />
        <CustomDropDown title="Wedding" />
        <CustomDropDown
          title="Diamonds"
          currState={diamondsDrop}
          setCurrState={setDiamondsDrop}
          drop={1}
        />
        <CustomDropDown
          title="Appointments"
          currState={appointmentsDrop}
          setCurrState={setAppointmentsDrop}
          drop={1}
        />
        <CustomDropDown
          title="About"
          currState={aboutDrop}
          setCurrState={setAboutDrop}
          drop={1}
        />
        <CustomDropDown title="Etiquette" />
        <CustomDropDown title="Help" />
      </div>
      <div className="btn-section">
        <div>
          <svg
            viewBox="0 0 78 78"
            fill="#1c1794"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icons/misc/Heart/Outline">
              <path
                id="Mask"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M62.7758 7.74005C53.7123 4.06519 44.23 7.28152 38.2535 15.9344C32.2761 7.28152 22.7938 4.06233 13.7293 7.74005C5.22935 11.188 -2.46076 21.2384 0.742173 35.157C6.2625 59.1623 36.6032 71.6883 37.8922 72.2097C38.0082 72.2564 38.1309 72.2803 38.2535 72.2803C38.3762 72.2803 38.4989 72.2574 38.6148 72.2097C39.9039 71.6883 70.2417 59.1623 75.7649 35.157C78.9669 21.2384 71.2767 11.188 62.7758 7.74005ZM72.4773 34.9102C67.6903 55.7105 41.5819 67.6131 38.2535 69.0528C34.9242 67.6149 8.81577 55.7251 4.02972 34.9102C1.19453 22.5875 7.93696 13.7164 15.4008 10.6895C17.6627 9.77148 19.8289 9.36874 21.8737 9.36874C28.8682 9.36874 34.4291 14.0844 37.4686 19.0215C37.8026 19.5643 38.7026 19.5643 39.0385 19.0215C42.965 12.6428 51.0997 6.63291 61.1043 10.6895C68.5692 13.7164 75.3116 22.5875 72.4773 34.9102Z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <svg
            viewBox="0 0 98 96"
            fill="#1c1794"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icons/misc/bag/outline">
              <path
                id="Mask"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.1234 27.7676H28.7082H68.8353H69.3096L80.0243 91.8399H17.412L28.1234 27.7676ZM48.7714 3.99869C59.8199 3.99869 68.8104 12.791 68.8353 23.6076H28.7082C28.733 12.791 37.7235 3.99869 48.7714 3.99869ZM72.9173 23.6077C72.8925 10.5658 62.0916 0 48.7714 0C35.4519 0 24.651 10.5658 24.6262 23.6077H24.5158L12.4141 95.9994V96H85.0236L72.9173 23.6077Z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
