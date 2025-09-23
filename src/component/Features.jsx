import React from "react";
import { FaComments, FaBullhorn, FaUsers, FaMagic } from "react-icons/fa";

const features = [
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    icon: <FaComments size={40} color="#fff" />,
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    icon: <FaBullhorn size={40} color="#fff" />,
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    icon: <FaUsers size={40} color="#fff" />,
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
    icon: <FaMagic size={40} color="#fff" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">FEATURES</h2>
        <div className="underline"></div>
        <div className="features-grid">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
