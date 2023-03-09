import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="home">
      <div className="home__container">
      <h1 className="home__title">
        <span>From Concept To Reality</span>
      </h1>
     </div>
    </section>
  );
}

export default Home;

// onMouseMove={handleMouseMove}

// style={{transform: `translate(${mousePos.x / 80}px, ${mousePos.y / 80}px)`,}