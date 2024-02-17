import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 fixed top-0 w-full backdrop-blur-md">
      <Link to="/" className="anchor">
        <div className="logoTitle text-2xl select-none"> {"</DOUDECH>"} </div>
      </Link>

      <ul className="hidden gap-4 p-1 md:flex">
        <Link to="/services" className="anchor">
          services
        </Link>
        <Link to="/solutions" className="anchor">
          solutions
        </Link>
        <Link to="/contact" className="anchor">
          contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
