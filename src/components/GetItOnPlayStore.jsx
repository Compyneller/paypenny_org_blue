import React from "react";
import image from "../assets/oie_mJOgJSC1KcvS.png";
const GetItOnPlayStore = () => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
      target="_blank"
    >
      <img src={image} className="w-100" height={80} alt="" />
    </a>
  );
};

export default GetItOnPlayStore;
