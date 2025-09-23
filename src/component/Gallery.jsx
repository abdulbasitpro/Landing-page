import React from "react";
import img1 from "./Images/01-large.jpg.jpeg";
import img2 from "./Images/02-large.jpg.jpeg";
import img3 from "./Images/03-large.jpg.jpeg";
import img4 from "./Images/04-large.jpg.jpeg";
import img5 from "./Images/05-large.jpg.jpeg";
import img6 from "./Images/06-large.jpg.jpeg";
import img7 from "./Images/07-large.jpg.jpeg";
import img8 from "./Images/08-large.jpg.jpeg";
import img9 from "./Images/09-large.jpg.jpeg";

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  return (
    <section id="gallery" style={{ padding: "40px 0" }}>
      <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>GALLERY</h2>
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#4361ee",
            margin: "10px auto 30px auto",
            borderRadius: "2px",
          }}
        ></div>
        <p style={{ color: "#6c757d", marginBottom: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
          }}
        >
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="gallery-box"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                  userSelect: "none",
                  WebkitUserDrag: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hover Gradient Overlay CSS */}
      <style>{`
        .gallery-box::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to right, rgba(99, 114, 255, 0.8) 0%, rgba(92, 169, 251, 0.8) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .gallery-box:hover img {
          transform: scale(1.1);
        }
        .gallery-box:hover::after {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
