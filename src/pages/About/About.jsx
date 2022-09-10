import React from "react";
import { Container } from "react-bootstrap";
import AboutQuote from "../../components/AboutQuote/AboutQuote";
import AboutUs from "../../components/AboutUs";
import Mission from "../../components/Mission";
import NavBarComp from "../../components/NavBarComp/NavBarComp";

const About = () => {
  return (
    <>
      <NavBarComp background="#0054FF" />
      <br />
      <Container>
        <AboutQuote />
      </Container>
      <br />
      <AboutUs />
      <Mission />
    </>
  );
};

export default About;
