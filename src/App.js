import React from "react";
import HeroSection from "./Screens/HeroSection/HeroSection";
import EmailSection from "./Screens/EmailSection/EmailSection";
import Footer from "./Components/Footer/Footer";
import TopNavbar from "./Components/Navbar/TopNavbar";

import "./App.css";

function App() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <EmailSection />
      <Footer />
    </>
  );
}

export default App;
