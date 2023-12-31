import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => (
  <section className={`${styles.flexCenter}${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-col justify-start flex-1 mr-10">
        <img
          src={logo}
          alt="hooBank"
          className="w-[266px] h-[72px] object-contain "
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make payment easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            key={footerLink.key}
          >
            <h4 className="font-poppins font-medium text-lg leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="mt-4 list-none">
              {footerLink.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-base leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4 last:mb-0"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-lg text-center  leading-[27px] text-white">
        2023 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-5 h-5 object-contain cursor-pointer mr-6 last:mr-0`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
