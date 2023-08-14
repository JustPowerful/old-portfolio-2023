import Card from "./components/Card";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header className="pt-8" />
      <div className="flex justify-center mx-5 md:mx-5">
        <div className="grid md:grid-cols-3 gap-10 w-fit">
          <Card
            image="/images/frameworks.svg"
            imageAlt="Different frameworks that we use"
            title="custom solutions"
            description="We study the best solutions for every project before creating it, for most teams this is essential for cooperative work with the client to provide a great result."
          />
          <Card
            image="/images/codeblocks.svg"
            imageAlt="interactive code blocks"
            title="well-organized projects"
            description="Our projects are well organized, we study every aspect of the project before the development phase to ensure there’s no problem in the shipping later."
          />
          <Card
            image="/images/markuptag.svg"
            imageAlt="A markup tag illustartions"
            title="custom development"
            description="Our projects can be customized following the client’s needs, we also do our researches and suggest better solutions that client might not encounter."
          />
          <script src="/js/tilt.js"></script>
        </div>
      </div>
    </>
  );
}

export default App;
