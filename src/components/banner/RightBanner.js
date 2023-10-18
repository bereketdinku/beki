import React from "react";
import { bannerImg } from "../../assets";

function RightBanner() {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        src={bannerImg}
        alt=""
        className="w-[300px] h-[250px] lgl:[300px] lgl:h-[480px] z-10"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center"></div>
    </div>
  );
}

export default RightBanner;
