import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 fixed top-0 w-full">
      <div className="logoTitle text-2xl select-none"> {"</DOUDECH>"} </div>
      <ul className="hidden gap-4 p-1 md:flex">
        <a href="#" className="anchor">
          courses
        </a>
        <a href="#" className="anchor">
          consulting
        </a>
        <a href="#" className="anchor">
          solutions
        </a>
        <a href="#" className="anchor">
          services
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
