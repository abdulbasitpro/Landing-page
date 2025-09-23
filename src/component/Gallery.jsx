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

const Gallery = () => (
  <section className="gallery-section" id="gallery">
    <div className="container" style={{ textAlign: "center" }}>
      <h2
        className="gallery-title"
        style={{ fontWeight: "bold", fontSize: "2rem", marginTop: "40px" }}
      >
        GALLERY
      </h2>
      <div
        className="underline"
        style={{
          width: "80px",
          height: "4px",
          background: "#4361ee",
          margin: "10px auto 30px auto",
          borderRadius: "2px",
        }}
      ></div>
      <p style={{ color: "#6c757d", marginBottom: "30px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus
        leonec.
      </p>
      <div
        className="gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item"
            style={{ overflow: "hidden", borderRadius: "6px" }}
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
