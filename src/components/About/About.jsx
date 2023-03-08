import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";

import team from "../../assets/team.png";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import planet from "../../assets/planet.png";
import check from "../../assets/check.png";

import 'aos/dist/aos.css';
import "./About.css";



// const observer = new IntersectionObserver ((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show')
//     } else {
//       entry.target.classList.remove('show')
//     }

//   });
// });

// const hiddenElements = document.querySelectorAll('.hidden')
// hiddenElements.forEach((el) => observer.observe(el));


export const About = () => {

  useEffect(() => {
    Aos.init({duration: 300});
  }, [])

  return (
    <section id="about">
      <div className="about__wrapper">

      <div className="section__title">
        <h1 data-aos="fade-in" className="title__us">About Us</h1>
      </div>

      <div className="about__content">
        <div data-aos="fade-right" className="about__img">
          <img className="team__img" src={pic1} alt="" />
        </div>
        <div data-aos="fade-left" className="about__desc">
          <h3 className="heading__3">A team of passionate designers and developers</h3>
          <div className="p r__space">
            <strong className="bold__text">Creative digital agency </strong>with solid design and development expertise. 
            <br />
            <br />
            <strong>We create for you:</strong>
          </div>
          <ul role="list" className="list w__list-unstyled u__list">
            <li data-aos="fade-left" data-aos-easing="ease-in" data-aos-durration="700ms" className="list__item"><img className="check__img" src={check}/> Outshine the competition</li>
            <li data-aos="fade-left" data-aos-easing="ease-in" data-aos-durration="800ms" className="list__item"><img className="check__img" src={check}/> Accelerate your revenue</li>
            <li data-aos="fade-left" data-aos-easing="ease-in" data-aos-durration="900ms"className="list__item"><img className="check__img" src={check}/> Increase conversions</li>
            <li data-aos="fade-left" data-aos-easing="ease-in" data-aos-durration="1000ms" className="list__item"><img className="check__img" src={check}/> Improve your brand image</li>
          </ul>
        </div>
      </div>

      </div>
    </section>
  );
};

export default About;
