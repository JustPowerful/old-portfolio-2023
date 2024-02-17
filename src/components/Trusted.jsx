import React from "react";

export const Trusted = () => {
  return (
    <div className="bg-[#2a2f34] py-14 px-10 md:px-0 ">
      <h3 className="text-center text-2xl md:text-3xl font-medium font-poppins">
        Trusted by
      </h3>
      <p className="font-inter text-neutral-400 text-sm  w-full text-center mb-5">
        we have been working with many companies
      </p>
      <div className="flex justify-center gap-4 ">
        <a href="https://www.houtafresh.com" target="_blank" className="anchor">
          <img src="/images/trusted/houtafresh.png" className="w-52 h-auto" />
        </a>
        <a
          href="https://github.com/JustPowerful/BrainyDocs"
          target="_blank"
          className="anchor"
        >
          <img src="/images/trusted/brainydocs.png" className="w-52 h-auto" />
        </a>
      </div>
    </div>
  );
};
