import React from 'react'

import "./Nav.css"

function Nav() {
  return (
    <nav>
    <figure>
      {/* <img id="personal_logo"  alt="" /> */}
      <h1 id='personal_logo'>Web Forte</h1>
    </figure>
    <ul className="nav__link--list">
      <li className="nav__link">
        <a 
          href="#about"
          className="nav__link--anchor link__hover-effect">
        About
        </a>
      </li>
      {/* <li className="nav__link">
        <a 
          href="#services"
          className="nav__link--anchor link__hover-effect">
        Services
        </a>
      </li> */}
      <li className="nav__link">
        <a 
          href="#work"
          className="nav__link--anchor link__hover-effect">
        Work
        </a>
      </li>
      <li className="nav__link">
        <a 
          href="#chat"
          className="contact__me">
        Let's Chat!
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Nav



