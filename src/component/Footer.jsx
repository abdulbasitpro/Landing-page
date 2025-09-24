import React from "react";

const Footer = () => (
  <footer style={{ background: "#f8f9fa", padding: "2rem 0 0 0" }}>
    <div className="container" style={{ 
      textAlign: "center", 
      maxWidth: "1200px", 
      margin: "0 auto",
      padding: "0 1rem"
    }}>
      <div
        className="footer-bottom"
        style={{ 
          color: "#6c757d", 
          fontSize: "0.9rem", 
          marginBottom: "1.5rem",
          lineHeight: "1.5"
        }}
      >
        © 2023 Issaaf Kattan React Land Page Template. Design by{" "}
        <a 
          href="https://templatewire.com" 
          style={{ 
            color: "#4361ee",
            textDecoration: "none",
            fontWeight: "500"
          }}
        >
          TemplateWire
        </a>
      </div>
    </div>
   

    <style>{`
      @media (max-width: 768px) {
        footer {
          padding: 1.5rem 0 0 0 !important;
        }
        
        .footer-bottom {
          font-size: 0.85rem !important;
          margin-bottom: 1rem !important;
        }
      }
      
      @media (max-width: 480px) {
        .footer-bottom {
          font-size: 0.8rem !important;
          padding: 0 0.5rem !important;
        }
      }
    `}</style>
  </footer>
);

export default Footer;