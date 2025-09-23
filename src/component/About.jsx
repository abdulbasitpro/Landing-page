import React from "react";
import aboutImg from "./Images/about.jpg.jpeg"; // replace with your image path

const AboutUs = () => {
  return (
    <section className="about section">
      <div className="about-container">
        {/* Left Side Image */}
        <div className="about-img">
          <img src={aboutImg} alt="About Us" />
        </div>

        {/* Right Side Content */}
        <div className="about-content">
          <h2 className="about-title">ABOUT US</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>

          <h3 className="about-subtitle">Why Choose Us?</h3>
          <div className="about-lists">
            <ul>
              <li> Lorem ipsum dolor</li>
              <li> Tempor incididunt</li>
              <li> Lorem ipsum dolor</li>
              <li> Incididunt ut labore</li>
            </ul>
            <ul>
              <li> Aliquip ex ea commodo</li>
              <li> Lorem ipsum dolor</li>
              <li> Exercitation ullamco</li>
              <li> Lorem ipsum dolor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
