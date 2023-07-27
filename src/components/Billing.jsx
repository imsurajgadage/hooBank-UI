import React from "react";
import { apple, bill, google } from "../assets";
import style, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-full h-full relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={`${style.heading2}`}>
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          This is a dummy text for invoicing so please ignore this instructions
          for now it is just written for making UI More informative
        </p>
        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img src={apple} alt="apple_store" className="w-[128px] h-11 object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[128px] h-11 object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
