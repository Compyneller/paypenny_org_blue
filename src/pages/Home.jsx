import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Blog from "../components/Blog/Blog";
import BottomCard from "../components/BottomCard";
import Hero from "../components/Hero/Hero";
import NavBarComp from "../components/NavBarComp/NavBarComp";
import Qr from "../components/Qr/Qr";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import SendMoney from "../components/SendMoney/SendMoney";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PayPenny Home</title>
        <link rel="canonical" href="https://www.paypenny.org/" />
        <meta
          name="description"
          value="Hundreds of thousands of NRIs trust Paypenny"
        />
      </Helmet>
      <NavBarComp />
      <Hero />
      <SendMoney />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <Blog /> */}
      <Section6 />
      <Qr />
      <BottomCard />
      <br />
      <br />

      {/* <Footer /> */}
    </>
  );
};

export default Home;
