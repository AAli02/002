import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav, Landing, About, Services, Footer, Test } from "./components";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const sections = sectionRefs.current;

    sections.forEach((section, i) => {
      const prevColor = i === 0 ? "#f15946" : sections[i - 1].dataset.bgColor;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          markers: true,
          start: "top center+=25%",
          onEnter: () =>
            gsap.to("body", {
              backgroundColor: section.dataset.bgColor,
              duration: 0.5,
              overwrite: "auto",
            }),
          onLeaveBack: () =>
            gsap.to("body", {
              backgroundColor: prevColor,
              duration: 0.5,
              overwrite: "auto",
            }),
        },
      });
    });
  }, []);

  return (
    <div className="body" data-init-bg-color="#55bf91">
      <Router>
        <Routes></Routes>
      </Router>
        <Nav />
        <Landing />
        <About />
        <Services />      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="o-section"
      >
        <h1></h1>
      </section>
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="o-section js-section"
        data-bg-color="#f15946"
      >
        <h3></h3>
      </section>
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="o-section js-section"
        data-bg-color="#81a5ce"
      >
        <h3></h3>
      </section>
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="o-section js-section"
        data-bg-color="#636567"
      ></section>
        <Footer />
    </div>
  );
};

export default App;
