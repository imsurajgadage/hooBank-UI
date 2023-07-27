import React from "react";
import { features } from "../constants/index";
import style, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] mb-6 last:mb-0 feature-card`}
  >
    <div className={`w-16 h-16 rounded-full ${style.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="Icon" className="object-contain w-1/2 h-1/2" />
    </div>
    <div className={`flex-1 flex flex-col ml-3 `}>
      <h4 className="font-poppins font-semibold text-white text-lg leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-base leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Bussiness = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${style.heading2}`}>
        You do the bussiness,
        <br className="hidden sm:block" /> we'll handle the money.
      </h2>
      <p className={`${style.paragraph} max-w-[470px] mt-1`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Bussiness;
