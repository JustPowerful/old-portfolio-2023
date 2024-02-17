import Button from "./Button";

import Image from "../assets/images/programmer.png";

const Header = ({ className }) => {
  return (
    <div className={`header-background grid md:grid-cols-2 ${className}`}>
      <div className="flex justify-center pt-36">
        <div className="px-5">
          <h1 className="font-poppins text-2xl pb-3 md:leading-tight md:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Empowering Tomorrow:
            </span>{" "}
            <br /> Unleashing the Potential of <br />
            Next-Generation Software
            <br /> Solutions and Services
          </h1>
          <p className="font-poppins text-neutral-400 mt-2">
            Our journey revolves around creating beautiful software solutions
            using different <br />
            types of web technologies. We are specialized in a lot of known
            frameworks and techs.
          </p>
          <Button>explore more</Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="w-full"
          src={Image}
          alt="a man coding and select his own code resources."
        />
      </div>
    </div>
  );
};

export default Header;
