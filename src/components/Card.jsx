import React from "react";

import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  glare: true,
  maxGlare: 1,
};

const Card = ({ image, imageAlt, title, description }) => {
  return (
    <Tilt options={defaultOptions}>
      <div className="card py-5 max-w-sm" data-tilt={true}>
        <img src={image} alt={imageAlt} width={120} height={120} />
        <h3 className="font-poppins text-xl pt-2 text-center">{title}</h3>
        <p className="text-sm mx-5 my-2 text-center font-normal text-neutral-400 font-inter">
          {description}
        </p>
      </div>
    </Tilt>
  );
};

export default Card;
