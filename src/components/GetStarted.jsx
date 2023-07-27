import React from "react";
import style from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div
      className={`${style.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer`}
    >
      <div
        className={`${style.flexCenter} flex-col bg-primary w-full h-[100%] rounded-full`}
      >
        <div className={`${style.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-lg leading-[23px] mr-0.5">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-lg leading-[23px] ">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
