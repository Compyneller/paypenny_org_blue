import React from "react";
import AboutQuote from "../../components/AboutQuote/AboutQuote";
import AboutUs from "../../components/AboutUs";
import Mission from "../../components/Mission";
import NavBarComp from "../../components/NavBarComp/NavBarComp";

const About = () => {
  return (
    <>
      <NavBarComp background="#0054FF" />
      <br />
      <AboutQuote />
      <br />
      <AboutUs />
      <Mission />
    </>
  );
};

export default About;
