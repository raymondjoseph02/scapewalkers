import HeroSection from "./Herosection";
import Services from "./Services";
import About from "./About";
import Profolio from "./Profolio";
import Testimonials from "./Testimonials";
import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
const Home = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Nav must be used within a ContextProvider");
  }
  const { servicesRef, IsServiceInview } = context;
  if (IsServiceInview) {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <HeroSection />
      <div ref={servicesRef}>
        <Services />
      </div>
      <About />
      <Profolio />
      <Testimonials />
    </>
  );
};

export default Home;
