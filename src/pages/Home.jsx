import Card from "../components/Card";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

import { useInRouterContext, useNavigate } from "react-router-dom";

// Images
import FrameworksImg from "../assets/images/frameworks.svg";
import codeblockImg from "../assets/images/codeblocks.svg";
import mkpImg from "../assets/images/markuptag.svg";
import { Trusted } from "../components/Trusted";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header className="pt-8" />
      <div className="flex flex-col items-center mb-9 px-8">
        <h1 className="text-center text-2xl md:text-5xl font-poppins mb-3">
          Full-Stack Development Services
        </h1>
        <p className="font-inter text-neutral-400 text-sm max-w-[920px] text-center">
          We create both backend and frontend. We specialize in react, angular
          and many more to make interfaces very interactive and lightweight for
          users to access, we also work with different backend frameworks like
          express, nest.js and full-stack frameworks like next.js.
        </p>
      </div>

      <div className="flex justify-center mx-5 md:mx-5 mb-20">
        <div className="grid md:grid-cols-3 gap-10 w-fit">
          <Card
            image={FrameworksImg}
            imageAlt="Different frameworks that we use"
            title="custom solutions"
            description="We study the best solutions for every project before creating it, for most teams this is essential for cooperative work with the client to provide a great result."
          />
          <Card
            image={codeblockImg}
            imageAlt="interactive code blocks"
            title="well-organized projects"
            description="Our projects are well organized, we study every aspect of the project before the development phase to ensure there’s no problem in the shipping later."
          />
          <Card
            image={mkpImg}
            imageAlt="A markup tag illustartions"
            title="custom development"
            description="Our projects can be customized following the client’s needs, we also do our researches and suggest better solutions that client might not encounter."
          />
          <script src="/js/tilt.js"></script>
        </div>
      </div>

      <Trusted />

      <div className="flex flex-col items-center justify-center mb-9 px-8 h-96">
        <h1 className="text-center text-2xl md:text-5xl font-poppins mb-3">
          Explore our software
        </h1>
        <p className="font-inter text-neutral-400 text-sm max-w-[920px] text-center">
          We also create software for small and big companies, we have
          professional software solutions that we create to cover the needs of
          different enterprises whether you have a startup or a corporate.
        </p>
        <Button
          onClick={() => {
            navigate("/solutions");
          }}
        >
          explore our new softwares
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
