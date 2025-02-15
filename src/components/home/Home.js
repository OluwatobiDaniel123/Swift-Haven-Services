import React from "react";
import About from "../articles/About";
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
      <Contact />
    </div>
  );
};

export default Home;
