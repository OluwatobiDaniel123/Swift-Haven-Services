import React from "react";
import About from "../articles/About";
// import Cards from "../articles/Cards";
import Banner from "../articles/Banner";
import Contact from "../articles/Contact";
import CompanyHighlights from "../articles/CountUp";
import Skills from "../articles/Skills";
import OurSkillsPage from "../articles/OurSkillsPage";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <OurSkillsPage />
      <CompanyHighlights />
      {/* <Cards /> */}
      <Contact />
    </div>
  );
};

export default Home;