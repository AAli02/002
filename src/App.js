import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import {
  Nav,
  Landing,
  About,
  Services,
  Footer,
  Home,
} from "./components";

import "aos/dist/aos.css";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const sectionRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const sections = sectionRefs.current;

    sections.forEach((section, i) => {
      const prevColor = i === 0 ? "#f15946" : sections[i - 1].dataset.bgColor;

      const bgColor = section.dataset.bgColor;

      const onEnter = () => {
        gsap.to("body", {
          backgroundColor: bgColor,
          duration: 0.2,
          overwrite: "auto",
        });
      };

      const onLeaveBack = () => {
        gsap.to("body", {
          backgroundColor: prevColor,
          duration: 0.2,
          overwrite: "auto",
        });
      };

      if (location.pathname === "/about" && i === 0) {
        onEnter();
      } else if (location.pathname === "/services" && i === 1) {
        onEnter();
      }

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true,
          snap: 1 / (sections.length - 1),
          onEnter,
          onLeaveBack,
        },
      });
    });
  }, [location]);

  return (
    <div className="body" data-init-bg-color="#55bf91">
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
      <Home />
      <a href="#one" className="scroll">
        <div className="scroll__icon"></div>
      </a>
      <section
        id="one"
        ref={(el) => (sectionRefs.current[0] = el)}
        className="o-section js-section"
        data-bg-color="#f15946"
      >
        <About />
      </section>
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="o-section js-section"
        data-bg-color="#004390"
      >
        <Services />
      </section>
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="o-section js-section"
        data-bg-color="#636567"
      >
      </section>
      <Footer />
    </div>
  );
};

export default App;
