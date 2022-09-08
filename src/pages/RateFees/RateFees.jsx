import React from "react";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import RateFeeContent from "../../components/RateFeeContent";
import RateFeeHero from "../../components/RateFeeHero/RateFeeHero";

const RateFees = () => {
  return (
    <>
      <NavBarComp />
      <RateFeeHero />
      <RateFeeContent />
    </>
  );
};

export default RateFees;
