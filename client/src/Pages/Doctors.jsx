import React, { useEffect } from "react";
import { useAppointment } from "../context/AppointmentContext";
import { Star, Award, Heart, Sparkles } from "lucide-react";

export default function Doctors() {
  const { openModal } = useAppointment();

  // DOCTOR DATA
  const doctors = [
    {
      name: "Dr. Anand Chaudhary",
      title: "Chief Dental Surgeon & Director",
      img: "/Maledoc.webp",
      badges: ["Implantologist", "Endodontist", "Cosmetic Dentist"],
      exp: 12,
      treatments: 4500,
      happy: 4000,
    },
    {
      name: "Dr. Swati Chaudhary",
      title: "Dental Surgeon, Aesthetic Physician & Cosmetologist",
      img: "/Images/Femaledoc.webp",
      badges: ["Cosmetologist", "Facial Aesthetics Specialist"],
      exp: 10,
      treatments: 3800,
      happy: 3500,
    },
    {
      name: "Dr. Shagun Gupta",
      title: "Dental Surgeon",
      img: "👩‍⚕️",
      badges: ["Pediatric Dentist", "Conservative Dentistry"],
      exp: 6,
      treatments: 2100,
      happy: 2000,
    },
    {
      name: "Dr. Shashwat Kumar",
      title: "Dental Surgeon",
      img: "👨‍⚕️",
      badges: ["General Dentistry", "Root Canal Specialist"],
      exp: 4,
      treatments: 1500,
      happy: 1400,
    },
  ];

  // Fade-in animation
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade");
    fadeEls.forEach((el, i) =>
      setTimeout(() => el.classList.add("visible"), i * 200)
    );
  }, []);

  return (
    <div style={{ background: "#faf6ed", paddingTop: 110, minHeight: "100vh" }}>
      {/* ---------- PAGE TITLE ---------- */}
      <h1
        style={{
          textAlign: "center",
          fontSize: 38,
          fontWeight: 700,
          color: "#6f6048",
          marginBottom: 10,
        }}
      >
        Meet Our Expert Doctors
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: 17,
          maxWidth: 750,
          margin: "0 auto 40px",
          color: "#5d5446",
        }}
      >
        A team of experienced specialists dedicated to providing gentle,
        advanced, and ethical dental care.
      </p>

      {/* ---------- DOCTOR GRID ---------- */}
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 30,
          padding: "0 20px 70px",
        }}
      >
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="fade"
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: 20,
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
            }}
          >
            {/* IMAGE */}
            {doc.img.includes('👨‍⚕️') || doc.img.includes('👩‍⚕️') ? (
              <div
                style={{
                  width: "100%",
                  height: 340,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 120,
                  background: "linear-gradient(135deg, #f2ebe0 0%, #e8dcc6 100%)",
                  borderRadius: 16,
                  marginBottom: 15,
                }}
              >
                {doc.img}
              </div>
            ) : (
              <img
                src={doc.img}
                alt={doc.name}
                style={{
                  width: "100%",
                  height: 340,
                  objectFit: "cover",
                  borderRadius: 16,
                  marginBottom: 15,
                }}
              />
            )}

            {/* NAME */}
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#6f6048" }}>
              {doc.name}
            </h3>

            <p
              style={{
                fontSize: 15,
                marginTop: 6,
                color: "#5d5446",
                lineHeight: 1.4,
                marginBottom: 15,
              }}
            >
              {doc.title}
            </p>

            {/* ---------- SPECIALIST BADGES ---------- */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "center",
                marginBottom: 18,
              }}
            >
              {doc.badges.map((b, bi) => (
                <span
                  key={bi}
                  style={{
                    padding: "6px 12px",
                    background: "#f2ebe0",
                    borderRadius: 20,
                    fontSize: 12,
                    color: "#6f6048",
                    border: "1px solid #e0d4c0",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            {/* ---------- ANIMATED COUNTERS ---------- */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 10px 18px",
                marginBottom: 15,
                borderTop: "1px solid #eee",
              }}
            >
              <Counter icon={<Award size={20} color="#6f6048" />} label="Years" value={doc.exp} />
              <Counter icon={<Star size={20} color="#6f6048" />} label="Treatments" value={doc.treatments} />
              <Counter icon={<Heart size={20} color="#6f6048" />} label="Happy" value={doc.happy} />
            </div>

            {/* ---------- BUTTON ---------- */}
            <button
              onClick={openModal}
              style={{
                padding: "12px 24px",
                background: "#6f6048",
                color: "white",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "15px",
                transition: "0.25s ease",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#5b4f3d")}
              onMouseLeave={(e) => (e.target.style.background = "#6f6048")}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {/* ---------- ANIMATION CSS ---------- */}
      <style>
        {`
          .fade {
            opacity: 0;
            transform: translateY(20px);
            transition: all .8s ease;
          }
          .fade.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  );
}

/* ---------------- COUNTER COMPONENT ---------------- */
function Counter({ icon, label, value }) {
  // Format numbers
  const displayValue =
    value > 1000 ? `${(value / 1000).toFixed(1)}k+` : `${value}+`;

  return (
    <div style={{ textAlign: "center" }}>
      {icon}
      <div style={{ fontWeight: 700, fontSize: 16, color: "#6f6048" }}>
        {displayValue}
      </div>
      <div style={{ fontSize: 12, color: "#5d5446" }}>{label}</div>
    </div>
  );
}
