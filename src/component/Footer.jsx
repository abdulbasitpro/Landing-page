import React from "react";

const Footer = () => (
  <footer style={{ background: "#f8f9fa", padding: "40px 0 0 0" }}>
    <div className="container" style={{ textAlign: "center" }}>
      <div
        className="footer-bottom"
        style={{ color: "#6c757d", fontSize: "15px", marginBottom: "20px" }}
      >
        © 2023 Issaaf Kattan React Land Page Template. Design by{" "}
        <a href="https://templatewire.com" style={{ color: "#4361ee",textDecoration: "none"}}>
          TemplateWire
        </a>
      </div>
    </div>
    <div style={{ background: "#000", height: "40px", width: "100%" }}></div>
  </footer>
);

export default Footer;
