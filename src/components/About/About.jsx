import React, { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
import "./About.css";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  return (
    <section id="about">
     <div id="AB1" className="about__container">
      <h1 className="about__title">
        <span>Empowering businesses with innovative web solutions</span>
      </h1>
     </div>
     <div className="features__container">
      <div data-aos="fade-left" data-aos-easing="ease-in" data-aos-durration="700ms" className="features__desc-container">
        <div className="features__title">
          <h1>Designing</h1>
        </div>
        <div className="features__text">
        <span>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-easing="ease-in" data-aos-durration="900ms" className="features__desc-container">
        <div className="features__title">
          <h1>Development</h1>
        </div>
        <div className="features__text">
        <span>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-easing="ease-in" data-aos-durration="1100ms" className="features__desc-container">
        <div className="features__title">
          <h1>Branding</h1>
        </div>
        <div className="features__text">
          <span>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
     </div>
    </section>
  );
};

export default About;


// NOTES

// Secure your business with a professional website

