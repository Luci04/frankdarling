import React from "react";
import { AnimatedLink } from "../../Components/Animatedlink/AnimatedLink";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <video autoPlay loop muted id="video">
        <source
          src="https://frankdarling.com/assets/videos/Parker_Flipped.mov"
          type="video/mp4"
        />
      </video>
      <div className="overlay-section">
        <div className="left-section">
          <h1 className="left-main-heading text-sm">
            FIND THE
            <br />
            PERFECT RING
          </h1>
          <h2 className="left-main-heading text-sm head2">MAKE IT YOURS</h2>
          <p>Low profile rings for hands that do things.</p>
          <AnimatedLink />
        </div>
        <div className="right-section">
          <div className="right-image"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
