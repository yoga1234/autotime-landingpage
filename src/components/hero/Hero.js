import React from "react";
import "./Hero.css";

import { heroImage } from "../../assets";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="hero" />
      <div className="hero-text">
        <h1>FUTURE POWER</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet
          justo eu lectus condimentum elementum ultrices vel elit.
        </p>
        <button>GET A CAR</button>
      </div>
    </div>
  );
};

export default Hero;
