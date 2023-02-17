import React from "react";
import Sun from "/src/assets/sun.svg";

const Header = () => {
  return (
    <div className="flex mt-8 justify-between items-center text-white">
      <h1 className="font-bold text-[26px] leading-9">Devfinder</h1>
      <div className="flex gap-[18px]">
        <h2 className="font-bold text-[13px] leading-5 tracking-[2.5px]">
          LIGHT
        </h2>
        <img src={Sun} alt="sun-icon" />
      </div>
    </div>
  );
};

export default Header;
