import React from "react";
import { FaWordpress, FaShoppingCart, FaCloud, FaLanguage, FaPaperPlane, FaChartPie } from "react-icons/fa";

const services = [
  {
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.",
    icon: <FaWordpress size={36} />,
  },
  {
    title: "Consectetur adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.",
    icon: <FaShoppingCart size={36} />,
  },
  {
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.",
    icon: <FaCloud size={36} />,
  },
  {
    title: "Consectetur adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.",
    icon: <FaLanguage size={36} />,
  },
  {
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.",
    icon: <FaPaperPlane size={36} />,
  },
  {
    title: "Consectetur adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.",
    icon: <FaChartPie size={36} />,
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">OUR SERVICES</h2>
        <div className="underline"></div>
        <p className="services-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
        </p>

        <div className="services-grid">
          {services.map((s, index) => (
            <div className="service-item" key={index}>
              <div className="icon-circle">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}