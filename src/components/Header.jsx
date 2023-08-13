const Header = ({ className }) => {
  return (
    <div className={`header-background grid md:grid-cols-2 ${className}`}>
      <div className="flex justify-center pt-36">
        <div className="px-5">
          <h1 className="font-poppins text-4xl pb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Empowering Tomorrow:
            </span>{" "}
            <br /> Unleashing the Potential of <br />
            Next-Generation Software
            <br /> Solutions and Services
          </h1>
          <p className="font-poppins text-neutral-400 mt-2">
            My journey revolves around creating software solutions using
            different <br />
            types of full stacks like MERN, PERN and Frameworks like Next.js and
            Angular.{" "}
          </p>
          <button className="font-poppins bg-gradient-to-r from-cyan-400 to-purple-500 py-3 px-8 rounded-[20px] mt-6  hover:text-black hover:from-white hover:to-white">
            explore more
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="w-full"
          src="/images/header.png"
          alt="a man coding and select his own code resources."
        />
      </div>
    </div>
  );
};

export default Header;
