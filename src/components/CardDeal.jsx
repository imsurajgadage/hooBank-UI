import React from "react";
import { card } from "../assets";
import style, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={style.heading2}>
        Find a better card deal <br className="hidden sm:block" />
        in few easy steps.
      </h2>
      <p className={`${style.paragraph} max-w-[470px] mt-5`}>
        This is a dummy text please ignore it is for styling purpose only i am
        just writting more and more text to content should take more place and
        thats it.
      </p>
      <Button styles={" mt-10 "} />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="Card" className="w-full h-full" />
    </div>
  </section>
);

export default CardDeal;
