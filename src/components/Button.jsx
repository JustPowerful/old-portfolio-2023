import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-poppins bg-gradient-to-r from-cyan-400 to-purple-500 py-3 px-8 rounded-[20px] mt-6  hover:text-black hover:from-white hover:to-white"
    >
      {children}
    </button>
  );
};

export default Button;
