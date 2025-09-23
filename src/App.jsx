import React from "react";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Testimonials from "./component/Testimonials";
import About from "./component/About";
import Services from "./component/Services";
import Gallery from "./component/Gallery";
import Team from "./component/Team";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section id="features" className="features-section">
        <Features />
      </section>
      <section id="about" className="about-section">
        <About />
      </section>
      <section id="services" className="services-section">
        <Services />
      </section>
      <section id="gallery" className="gallery-section">
        <Gallery />
      </section>
      <section id="testimonials" className="testimonials-section">
        <Testimonials />
      </section>
      <section id="team" className="team-section">
        <Team />
      </section>
      <section id="contact" className="contact-section">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
