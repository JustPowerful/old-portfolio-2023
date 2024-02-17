import React from "react";

import LogoImg from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-center bg-slate-900 p-5">
      <div className="flex flex-col">
        <img src={LogoImg} alt="footer logo" width={250} />
        <div className="flex gap-2 font-poppins">
          <a
            href="https://www.instagram.com/ahmed.amine.doudech/"
            className="anchor"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@ahmed.amine.doudech"
            target="_blank"
            className="anchor"
          >
            TikTok
          </a>
          <a
            href="https://www.linkedin.com/in/ahmedaminedoudech/"
            target="_blank"
            className="anchor"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
