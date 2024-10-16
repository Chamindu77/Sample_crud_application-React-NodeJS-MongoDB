import React, { Fragment } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import Footer from "../components/Footer/Footer";
import NavigationBarSignUp from "../components/Header/Navbarsignup";

const FrontPage = () => {
 

  return (
    <Fragment>
      <NavigationBarSignUp />
     
        <HeroSection />
        <AboutUs />
        <ChooseUs />
        <Features />
        <Footer />
     
    </Fragment>
  );
};

export default FrontPage;
