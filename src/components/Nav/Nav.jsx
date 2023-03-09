import React from "react";

import "./Nav.css";

function Nav() {
  return (
    <nav>
      <figure>
        <h1 id="personal_logo">Web Forte</h1>
      </figure>
      <ul className="nav__link--list">
        <li  className="nav__link nav__1">
          <a href="#about" className="nav__link--anchor link__hover-effect">
            About
          </a>
        </li>
        <li className="nav__link nav__2">
          <a href="#work" className="nav__link--anchor link__hover-effect">
            Services
          </a>
        </li>
        <li className="nav__link nav__3">
          <a href="#chat" className="contact__me">
            Let's Chat!
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
