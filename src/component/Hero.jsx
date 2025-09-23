import React from "react";
import introBg from "./Images/intro-bg.jpg.jpeg";

const heroStyle = {
  backgroundImage: `url(${introBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "150px 0 100px",
  textAlign: "center",
};

const Hero = () => (
  <section className="hero" style={heroStyle}>
    <div className="container">
      <h1>We are a <br/> Landing Page</h1>
      <p>
        A modern React landing page template designed to help you create
        stunning web applications with ease and efficiency.
      </p>
      <div className="hero-buttons">
        <button className="cta-button" id="cta-btn1">LEARN MORE</button>
        {/* <button className="secondary-button">View Demo</button> */}
      </div>
    </div>
  </section>
);

export default Hero;
