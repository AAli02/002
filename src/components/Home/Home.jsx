import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="home">
      <nav>
      <figure>
        <h1 id="personal__logo">Web Forte</h1>
      </figure>
      <ul className="nav__link--list">
        <li  className="nav__link nav__1">
          <a href="#" className="nav__link--anchor link__hover-effect">
            About
          </a>
        </li>
        <li className="nav__link nav__2">
          <a href="#" className="nav__link--anchor link__hover-effect">
            Services
          </a>
        </li>
        <li className="nav__link nav__3">
          <a href="#" className="contact__me">
            Let's Chat!
          </a>
        </li>
      </ul>
    </nav>
      <div onMouseMove={handleMouseMove} className="home__container">
      <h1
          style={{ transform: `translate(${mousePos.x / 20}px, ${mousePos.y / 20}px)` }}
          className="home__title"
        >
        <span >from concept to reality</span>
      </h1>
     </div>
    </section>
  );
}

export default Home;

// onMouseMove={handleMouseMove}

// style={{transform: `translate(${mousePos.x / 80}px, ${mousePos.y / 80}px)`,}