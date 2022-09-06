import React from "react";
import AboutUs from "../../components/AboutUs";
import Mission from "../../components/Mission";
import NavBarComp from "../../components/NavBarComp/NavBarComp";

const About = () => {
  return (
    <>
      <NavBarComp background="#0054FF" />
      <AboutUs />
      <Mission />
    </>
  );
};

export default About;
