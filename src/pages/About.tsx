import React from "react";
import AboutHero from "../components/about_ui/AboutHero";
import OurNumbers from "../components/about_ui/OurNumbers";
import Mission from "../components/about_ui/Mission";
import WhatDriveUs from "../components/about_ui/WhatDriveUs";
import Award from "../components/about_ui/Award";

function About() {
  return (
    <section>
      <AboutHero />
      <OurNumbers />
      <Mission />
      <WhatDriveUs />
      <Award />
    </section>
  );
}

export default About;
