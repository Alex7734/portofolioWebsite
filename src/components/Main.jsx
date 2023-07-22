import React, { useRef } from "react";
import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";


function Main() {
  const projectsSectionRef = useRef();
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProjectsSection ref={projectsSectionRef} />
      <ContactSection />
    </>
  );
}

export default Main;
