import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            REACT LANDING PAGE
          </a>
          <ul className="nav-links">
            <li><a href="#features">FEATURES</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#testimonials">TESTIMONIALS</a></li>
            <li><a href="#team">TEAM</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
          <div className="mobile-menu">☰</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
