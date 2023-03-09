import React, { useEffect } from "react";
import Aos from "aos";

import pic1 from "../../assets/pic1.png";
import check from "../../assets/check.png";

import "aos/dist/aos.css";
import "./About.css";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  return (
    <section id="about">
     <div className="about__container">
      <h1 className="about__title">
        <span>Empowering businesses with innovative web solutions</span>
      </h1>
     </div>
    </section>
  );
};

export default About;
