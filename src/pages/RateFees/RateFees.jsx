import React from "react";
import { Helmet } from "react-helmet-async";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import RateFeeContent from "../../components/RateFeeContent";
import RateFeeHero from "../../components/RateFeeHero/RateFeeHero";

const RateFees = () => {
  return (
    <>
      <Helmet>
        <title>PayPenny Rate Fees</title>
        <link rel="canonical" href="https://www.paypenny.org/" />
        <meta
          name="Send Money to India for free - Paypenny"
          content="Get the highest exchange rates with the coverage of 100+ private & national banks like icici, sbi, pnb and more. Send money to India 24/7 at zero charges."
        />
      </Helmet>
      <NavBarComp />
      <RateFeeHero />
      <RateFeeContent />
    </>
  );
};

export default RateFees;
