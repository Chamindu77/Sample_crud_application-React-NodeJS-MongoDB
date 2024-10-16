import React, { Fragment } from "react";
import HeroSection1 from "../components/Hero-Section/HeroSection1";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Footer from "../components/Footer/Footer";
import NavigationBar2 from "../components/Header/Navbarhome";

const Home = () => {
  

  return (
    <Fragment>
      <NavigationBar2 />
     
        <HeroSection1 />
        <AboutUs />
        <Courses />
        <ChooseUs />
        <FreeCourse />
        <Features />
        <Footer />
      
    </Fragment>
  );
};

export default Home;
