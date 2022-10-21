import React from "react";
import HeroSection from "./Screens/HeroSection/HeroSection";
import EmailSection from "./Screens/EmailSection/EmailSection";

import TopNavbar from "./Components/Navbar/TopNavbar";

import "./App.css";

function App() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <EmailSection />
    </>
  );
}

export default App;
