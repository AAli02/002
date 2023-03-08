import React from "react";
import rocket from "../../assets/rocket.png";
import rocket2 from "../../assets/rocket.webp";
import rocky from "../../assets/rocky.png";

import "./Landing.css";

function Landing() {
  return (
    <section id="Landing">
      <div className="banner">
        <div className="banner__about banner__half">
          <h2 className="banner__title">From Concept to Reality</h2>
          <h3 className="banner__sub-title">
            Empowering businesses with innovative web solutions through expert
            development and design services.
          </h3>
          <div className="form__item">
            <input className="input" placeholder="Email" type="email" required></input>
            <button id="contact__submit" className="form__submit">Join</button>
          </div>
        </div>

        <div className="banner__contact banner__half">
          {/* <img className="banner__img" src={rocky} alt="" /> */}
        </div>
      </div>

      <a href="#about" className="scroll">
        <div className="scroll__icon"></div>
      </a>
    </section>
  );
}

export default Landing;

{
  /* <div className="banner__content">
          <div className="banner__description">
            <h1 className="banner__text">From Concept to Reality.</h1>

            <p className="banner__info">
              Empowering businesses with innovative web solutions through expert
              development and design services.
            </p>

            <div className="input__wrapper">
              <div className="btn__wrapper">
                <button className="mail__btn">Join!</button>
              </div>
              <input className="form__mail" type="Email" placeholder="Email" />
            </div>
          </div>
        </div>

        <div className="banner__right">
          <img className="banner__img" src={rocky} alt="" />
        </div> */
}
