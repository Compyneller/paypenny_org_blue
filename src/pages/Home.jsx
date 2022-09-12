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
          name="Send Money to India for free - Paypenny"
          content="Get the highest exchange rates with the coverage of 100+ private & national banks like icici, sbi, pnb and more. Send money to India 24/7 at zero charges."
        />
      </Helmet>
      <NavBarComp />
      <Hero />
      <SendMoney />

      <Section2 />
      <Section1 />
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
