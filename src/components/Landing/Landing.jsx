import React from "react";
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
    </section>
  );
}

export default Landing;