import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            REACT LANDING PAGE
          </a>
          <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
            <li><a href="#features" onClick={closeMenu}>FEATURES</a></li>
            <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
            <li><a href="#services" onClick={closeMenu}>SERVICES</a></li>
            <li><a href="#gallery" onClick={closeMenu}>GALLERY</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>TESTIMONIALS</a></li>
            <li><a href="#team" onClick={closeMenu}>TEAM</a></li>
            <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
          </ul>
          <div className={`mobile-menu ${isMenuOpen ? 'menu-active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;