import React from "react";
import { Helmet } from "react-helmet-async";
import EarnSec1 from "../components/EarnComponents/EarnSec1";
import EarnSec2 from "../components/EarnComponents/EarnSec2";
import EarnSec3 from "../components/EarnComponents/EarnSec3";
import EarnSec4 from "../components/EarnComponents/EarnSec4";
import EarnSec5 from "../components/EarnComponents/EarnSec4/EarnSec5";
import EarnSec6 from "../components/EarnComponents/EarnSec6";
import EarnHero from "../components/EarnHero/EarnHero";
import NavBarComp from "../components/NavBarComp/NavBarComp";

const Earn = () => {
  return (
    <>
      <Helmet>
        <title>PayPenny Earn</title>
        <link rel="canonical" href="https://www.paypenny.org/" />
        <meta
          name="description"
          value="Hundreds of thousands of NRIs trust Paypenny"
        />
      </Helmet>
      <NavBarComp position="absolute" />
      <EarnHero />
      <EarnSec1 />
      <EarnSec2 />
      <EarnSec3 />
      <EarnSec4 />
      <EarnSec5 />
      <EarnSec6 />
    </>
  );
};

export default Earn;
