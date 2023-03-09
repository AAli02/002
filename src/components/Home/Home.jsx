import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="home">
      <div className="home__container" onMouseMove={handleMouseMove}>
        <h1
          style={{ transform: `translate(${mousePos.x / 40}px, ${mousePos.y / 40}px)` }}
          className="home__title"
        >
          From Concept To Reality.
        </h1>
        {/* <h2 className="home__bio">
        Empowering businesses with innovative web solutions.
      </h2> */}
      </div>
    </section>
  );
}

export default Home;
