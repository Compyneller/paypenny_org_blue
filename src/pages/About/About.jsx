import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import AboutQuote from "../../components/AboutQuote/AboutQuote";
import AboutUs from "../../components/AboutUs";
import Mission from "../../components/Mission";
import NavBarComp from "../../components/NavBarComp/NavBarComp";

const About = () => {
  return (
    <>
      <Helmet>
        <title>PayPenny About</title>
        <link rel="canonical" href="https://www.paypenny.org/" />
        <meta
          name="Send Money to India for free - Paypenny"
          content="Get the highest exchange rates with the coverage of 100+ private & national banks like icici, sbi, pnb and more. Send money to India 24/7 at zero charges."
        />
      </Helmet>
      <NavBarComp background="#0054FF" />
      <br />
      <Container>{/* <AboutQuote /> */}</Container>
      <br />
      <AboutUs />
      <Mission />
    </>
  );
};

export default About;
