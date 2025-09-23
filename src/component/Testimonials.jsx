import React from "react";
import avatar1 from "./Images/01.jpg.jpeg";
import avatar2 from "./Images/02.jpg.jpeg";
import avatar3 from "./Images/03.jpg.jpeg";
import avatar4 from "./Images/04.jpg.jpeg";
import avatar5 from "./Images/05.jpg.jpeg";
import avatar6 from "./Images/06.jpg.jpeg";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    name: "John Doe",
    avatar: avatar1,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    name: "Johnathan Doe",
    avatar: avatar2,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    name: "John Doe",
    avatar: avatar3,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    name: "John Doe",
    avatar: avatar4,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    name: "Johnathan Doe",
    avatar: avatar5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    name: "John Doe",
    avatar: avatar6,
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="testimonials"
    style={{ background: "#f8f9fa", padding: "80px 0" }}
  >
    <div className="container">
      <div
        className="section-title"
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "2.2rem" }}>
          WHAT OUR CLIENTS SAY
        </h2>
        <div
          className="underline"
          style={{
            width: "120px",
            height: "4px",
            background: "#4361ee",
            margin: "10px auto 0 auto",
            borderRadius: "2px",
          }}
        ></div>
      </div>
      <div
        className="testimonials-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card"
            style={{
              background: "transparent",
              boxShadow: "none",
              textAlign: "left",
              display: "flex",
              alignItems: "flex-start",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                flexShrink: 0,
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div>
              <p
                className="testimonial-text"
                style={{
                  fontStyle: "italic",
                  color: "#444",
                  marginBottom: "12px",
                }}
              >
                &quot;{testimonial.text}&quot;
              </p>
              <div
                className="testimonial-author"
                style={{ fontWeight: "bold", color: "#222" }}
              >
                - {testimonial.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
