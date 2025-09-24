import React from "react";
import member1 from "./Images/Screenshot 2024-11-17 154953.png";
import member2 from "./Images/1729475436781.jpeg";
import member3 from "./Images/1752709795887.png";
import member4 from "./Images/IMG_3725.jpg";

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
    name: "Abdul Basit",
    role: "Project Manager",
    image: member4,
  },
];

const Team = () => (
  <section className="team-section">
    <div className="container" style={{ textAlign: "center", maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "2rem", marginBottom: "0.5rem" }}>MEET THE TEAM</h2>
      <div
        className="underline"
        style={{
          width: "80px",
          height: "4px",
          background: "#4361ee",
          margin: "0 auto 2rem auto",
          borderRadius: "2px",
        }}
      ></div>
      <p style={{ color: "#6c757d", margin: "0 auto 3rem auto", maxWidth: "600px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
      </p>
      <div
        className="team-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {team.map((member, idx) => (
          <div key={idx} className="team-member" style={{ textAlign: "center" }}>
            <div
              style={{
                width: "200px",
                height: "200px",
                margin: "0 auto 1.5rem auto",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                background: "#f8f9fa",
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
            <h3 style={{ fontWeight: "600", fontSize: "1.1rem", marginBottom: "0.5rem" }}>{member.name}</h3>
            <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .team-section {
          padding: 2rem 0 !important;
        }
        
        .team-grid {
          gap: 1.5rem !important;
        }
        
        .team-member div {
          width: 160px !important;
          height: 160px !important;
          margin-bottom: 1rem !important;
        }
      }
      
      @media (max-width: 480px) {
        .team-section {
          padding: 1.5rem 0 !important;
        }
        
        .team-grid {
          grid-template-columns: 1fr !important;
          max-width: 300px !important;
          margin: 0 auto !important;
        }
        
        .team-member div {
          width: 180px !important;
          height: 180px !important;
        }
      }
    `}</style>
  </section>
);

export default Team;