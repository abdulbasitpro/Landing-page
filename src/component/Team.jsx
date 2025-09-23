import React from "react";
import member1 from "./Images/Screenshot 2024-11-17 154953.png";
import member2 from "./Images/1729475436781.jpeg";
import member3 from "./Images/1752709795887.png";
import member4 from "./Images/a42efe6f-3b9a-4c1e-8ffb-b1eb05e152f9.webp";

const team = [
  {
    name: "Abdul Basit",
    role: "Director",
    image: member1,
  },
  {
    name: "Muawia",
    role: "Senior Designer",
    image: member2,
  },
  {
    name: "Ahmad",
    role: "Senior Designer",
    image: member3,
  },
  {
    name: "Karen Doe",
    role: "Project Manager",
    image: member4,
  },
];

const Team = () => (
  <section className="team-section" style={{ padding: "80px 0", background: "#fff" }}>
    <div className="container" style={{ textAlign: "center" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "2.2rem" }}>MEET THE TEAM</h2>
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
      <p style={{ color: "#6c757d", margin: "20px 0 40px 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
      </p>
      <div
        className="team-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {team.map((member, idx) => (
          <div key={idx} className="team-member" style={{ textAlign: "center" }}>
            <div
              style={{
                width: "240px",
                height: "240px",
                margin: "0 auto 20px auto",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                background: "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <h3 style={{ fontWeight: "bold", fontSize: "1.1rem", marginBottom: "6px" }}>{member.name}</h3>
            <p style={{ color: "#6c757d", fontSize: "1rem" }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;