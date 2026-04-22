import React, { useEffect, useState } from "react";
import LeadForm from "../components/LeadForm";
import Hero from "../components/Hero/Hero";
import "./Home.css"; 
import {
  ShieldCheck,
  Users,
  HandHeart,
  Scan,
  Wallet,
  Smile
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <main>
      <Hero />

      {/* =========================================================
          MEET SENIOR DOCTORS
      ========================================================== */}
      <section className="core-doctors-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2>Meet Our Senior Doctors</h2>
            <p style={{ maxWidth: "760px", margin: "0 auto" }}>
              Our clinical leadership brings decades of experience and compassionate care.
            </p>
          </div>
          <div className="core-doctors-grid">
            <article className="core-doctor-card reveal-on-scroll">
              <div className="core-doctor-photo">
                <img src="/Maledoc.webp" alt="Dr Anand" />
              </div>
              <div className="core-doctor-body">
                <h3>Dr. Anand Chaudhary</h3>
                <p className="doctor-qualification">
                  BDS, MDS (Oral & Maxillofacial Surgery) — Chief Clinical Director
                </p>
                <p>
                  Dr. Anand brings over 22 years of surgical expertise, leading complex oral and maxillofacial procedures with an emphasis on patient safety and predictable outcomes.
                </p>
                <button className="doc-btn" onClick={() => setLeadOpen(true)}>Book a Consultation</button>
              </div>
            </article>

            <article className="core-doctor-card reveal-on-scroll">
              <div className="core-doctor-photo">
                <img src="/Images/Femaledoc.webp" alt="Dr Swati" />
              </div>
              <div className="core-doctor-body">
                <h3>Dr. Swati Chaudhary</h3>
                <p className="doctor-qualification">BDS, MDS (Orthodontics) — Head of Orthodontics</p>
                <p>
                  Dr. Swati leads our orthodontics program with a patient-first approach, offering modern alignment options and personalized treatment plans for all ages.
                </p>
                <button className="doc-btn" onClick={() => setLeadOpen(true)}>Book a Consultation</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================== */}
      <section className="why-choose-section" id="why-us">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2>Why Choose Crown Dental</h2>
            <p style={{ maxWidth: "680px", margin: "0 auto" }}>
              Your health and comfort are our top priorities.
            </p>
          </div>

          <div className="highlights-grid">

  <article className="highlight-card reveal-on-scroll">
    <ShieldCheck size={48} strokeWidth={1.4} className="why-icon" />
    <h3>Strict Sterilization</h3>
    <p>International protocols ensure complete safety.</p>
  </article>

  <article className="highlight-card reveal-on-scroll">
    <Users size={48} strokeWidth={1.4} className="why-icon" />
    <h3>Experienced Team</h3>
    <p>Dentists with 10+ years of specialized experience.</p>
  </article>

  <article className="highlight-card reveal-on-scroll">
    <HandHeart size={48} strokeWidth={1.4} className="why-icon" />
    <h3>Painless Procedures</h3>
    <p>Advanced anesthesia ensures pain-free treatments.</p>
  </article>

  <article className="highlight-card reveal-on-scroll">
    <Scan size={48} strokeWidth={1.4} className="why-icon" />
    <h3>Modern Technology</h3>
    <p>Digital X-rays, lasers, and 3D imaging equipment.</p>
  </article>

  <article className="highlight-card reveal-on-scroll">
    <Wallet size={48} strokeWidth={1.4} className="why-icon" />
    <h3>Transparent Pricing</h3>
    <p>No hidden charges. Clear & honest estimates.</p>
  </article>

  <article className="highlight-card reveal-on-scroll">
    <Smile size={48} strokeWidth={1.4} className="why-icon" />
    <h3>Friendly Staff</h3>
    <p>A warm and welcoming environment for all patients.</p>
  </article>

</div>

        </div>
      </section>

      {/* =========================================================
          SERVICES SECTION
      ========================================================== */}
      <section className="services-section" id="services">
  <div className="section-inner">
    <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
      <h2>Our Services</h2>
      <p style={{ maxWidth: "680px", margin: "0 auto" }}>
        Comprehensive dental care tailored to your unique needs, delivered by experienced professionals using state-of-the-art technology.
      </p>
    </div>

    <div className="services-grid">

      {/* 1 - General Dentistry */}
      <article className="card service-card reveal-on-scroll">
        <span className="service-icon">🦷</span>
        <h3>General Dentistry</h3>
        <p>Routine check-ups, cleanings, fillings, and preventive care.</p>
      </article>

      {/* 2 - Cosmetic Dentistry */}
      <article className="card service-card reveal-on-scroll">
        <span className="service-icon">✨</span>
        <h3>Cosmetic Dentistry</h3>
        <p>Teeth whitening, veneers, bonding, and smile makeovers.</p>
      </article>

      {/* 3 - Orthodontics */}
      <article className="card service-card reveal-on-scroll">
        <span className="service-icon">😬</span>
        <h3>Orthodontics</h3>
        <p>Traditional braces & clear aligners for bite correction.</p>
      </article>

      {/* 4 - Oral Surgery */}
      <article className="card service-card reveal-on-scroll">
        <span className="service-icon">🦷🪓</span>
        <h3>Oral Surgery</h3>
        <p>Wisdom tooth removal, extractions & surgical care.</p>
      </article>

      {/* 5 - Root Canal Treatment */}
      <article className="card service-card reveal-on-scroll">
        <span className="service-icon">🛠️</span>
        <h3>Root Canal Treatment</h3>
        <p>Pain-free endodontic care with modern tools.</p>
      </article>

      {/* 6 - Dental Implants */}
      <article className="card service-card reveal-on-scroll">
        <span className="service-icon">🦾</span>
        <h3>Dental Implants</h3>
        <p>Permanent, natural-looking tooth replacement solutions.</p>
      </article>

      {/* 7 - Pediatric Dentistry */}
      <article className="card service-card reveal-on-scroll">
        <span className="service-icon">👶🦷</span>
        <h3>Pediatric Dentistry</h3>
        <p>Specialized dental care for children of all ages.</p>
      </article>

      {/* 8 - Emergency Dental Care */}
      <article className="card service-card reveal-on-scroll">
        <span className="service-icon">⛑️</span>
        <h3>Emergency Dental Care</h3>
        <p>Immediate treatment for trauma, pain, or infection.</p>
      </article>

    </div>

    <div style={{ textAlign: "center", marginTop: "48px" }}>
     <Link to="/treatments" className="btn-secondary">
  View All Services
</Link>
    </div>
  </div>
</section>


     
      {/* =========================================================
    MEET OUR EXPERT DENTAL TEAM
========================================================== */}
<section className="doctors-section">
  <div className="section-inner">

    <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
      <h2>Meet Our Expert Dental Team</h2>
      <p style={{ maxWidth: "760px", margin: "0 auto" }}>
        Our experienced specialists are dedicated to providing you with exceptional care
        and lasting results.
      </p>
    </div>

    <div className="doctors-grid">
      
      <article className="doctor-card reveal-on-scroll">
        <div className="doctor-image-placeholder">👨‍⚕️</div>
        <h3>Dr. Rajesh Kumar</h3>
        <p className="doctor-qualification">BDS, MDS (Prosthodontics)</p>
        <p className="doctor-specialization">Dental Implants & Aesthetic Dentistry</p>
        <span className="doctor-experience">15+ Years Experience</span>
      </article>

      <article className="doctor-card reveal-on-scroll">
        <div className="doctor-image-placeholder">👩‍⚕️</div>
        <h3>Dr. Priya Sharma</h3>
        <p className="doctor-qualification">BDS, MDS (Orthodontics)</p>
        <p className="doctor-specialization">Certified Invisalign Provider</p>
        <span className="doctor-experience">12+ Years Experience</span>
      </article>

      <article className="doctor-card reveal-on-scroll">
        <div className="doctor-image-placeholder">👨‍⚕️</div>
        <h3>Dr. Amit Verma</h3>
        <p className="doctor-qualification">BDS, MDS (Endodontics)</p>
        <p className="doctor-specialization">Root Canal Specialist</p>
        <span className="doctor-experience">10+ Years Experience</span>
      </article>

      <article className="doctor-card reveal-on-scroll">
        <div className="doctor-image-placeholder">👩‍⚕️</div>
        <h3>Dr. Neha Patel</h3>
        <p className="doctor-qualification">BDS, MDS (Pediatric Dentistry)</p>
        <p className="doctor-specialization">Child Dental Care Expert</p>
        <span className="doctor-experience">8+ Years Experience</span>
      </article>

    </div>

    <div style={{ textAlign: "center", marginTop: "48px" }}>
      <a href="/doctors" className="btn-secondary">View All Doctors</a>
    </div>

  </div>
</section>


      {/* =========================================================
          TESTIMONIALS
      ========================================================== */}
     <section className="testimonials-section">
  <div className="section-inner">
    <div className="section-header" style={{ textAlign: "center", marginBottom: "16px" }}>
      <h2>What Our Patients Say</h2>
      <p style={{ maxWidth: "700px", margin: "0 auto" }}>
        Real experiences from people who trust us with their smiles.
      </p>
    </div>

    <div className="testimonials-grid">
      {/* CARD 1 */}
      <article className="testimonial-card reveal-on-scroll">
        <div className="quote-icon">❝</div>
        <p className="testimonial-text">
          The team at Crown Dental made my root canal completely painless.
          I was amazed at how comfortable the entire process was. Highly recommend!
        </p>

        <div className="author">
          <div className="author-avatar">🧑‍🦱</div>
          <div>
            <p className="author-name">Rahul Mehta</p>
            <div className="author-rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </article>

      {/* CARD 2 */}
      <article className="testimonial-card reveal-on-scroll">
        <div className="quote-icon">❝</div>
        <p className="testimonial-text">
          Dr. Priya's orthodontic treatment transformed my smile.
          The staff is so friendly and the clinic is spotless. Thank you Crown Dental!
        </p>

        <div className="author">
          <div className="author-avatar">🧑‍🦳</div>
          <div>
            <p className="author-name">Sneha Kapoor</p>
            <div className="author-rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </article>

      {/* CARD 3 */}
      <article className="testimonial-card reveal-on-scroll">
        <div className="quote-icon">❝</div>
        <p className="testimonial-text">
          My daughter was scared of dentists, but Dr. Neha made her feel so comfortable.
          Now she actually looks forward to her check-ups!
        </p>

        <div className="author">
          <div className="author-avatar">🧒</div>
          <div>
            <p className="author-name">Anjali Singh</p>
            <div className="author-rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>

      {/* =========================================================
          MODERN TECHNOLOGY
      ========================================================== */}
       <section className="facility-section">
  <div className="section-inner">
    <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
      <h2>Our Modern Facility</h2>
      <p style={{ maxWidth: "700px", margin: "0 auto" }}>
        Take a virtual tour of our state-of-the-art clinic designed for your comfort and safety.
      </p>
    </div>

    <div className="facility-grid">
      <div className="facility-card reveal-on-scroll">
        <div className="facility-icon">🏥</div>
        <p className="facility-title">Reception Area</p>
      </div>

      <div className="facility-card reveal-on-scroll">
        <div className="facility-icon">🪑</div>
        <p className="facility-title">Treatment Rooms</p>
      </div>

      <div className="facility-card reveal-on-scroll">
        <div className="facility-icon">🔬</div>
        <p className="facility-title">Modern Equipment</p>
      </div>

      <div className="facility-card reveal-on-scroll">
        <div className="facility-icon">🧼</div>
        <p className="facility-title">Sterilization Unit</p>
      </div>

      <div className="facility-card reveal-on-scroll">
        <div className="facility-icon">🖼️</div>
        <p className="facility-title">Waiting Lounge</p>
      </div>

      <div className="facility-card reveal-on-scroll">
        <div className="facility-icon">✨</div>
        <p className="facility-title">Cosmetic Suite</p>
      </div>
    </div>
  </div>
</section>
      {/* =========================================================
          TECHNOLOGY
      ========================================================== */}
    <section className="technology-section">
  <div className="section-inner">

    <div className="tech-header">
      <h2>Advanced Technology We Use</h2>
      <p>
        State-of-the-art equipment ensuring precision, safety, and comfort in every procedure.
      </p>
    </div>

    <div className="technology-grid">
      
      <article className="tech-card">
        <div className="tech-icon">📡</div>
        <h3>Digital X-Rays</h3>
        <p>90% less radiation exposure with instant high-resolution imaging for accurate diagnosis.</p>
      </article>

      <article className="tech-card">
        <div className="tech-icon">🔦</div>
        <h3>Laser Dentistry</h3>
        <p>Minimally invasive procedures with faster healing and reduced discomfort.</p>
      </article>

      <article className="tech-card">
        <div className="tech-icon">🎯</div>
        <h3>Intraoral Scanner</h3>
        <p>3D digital impressions eliminating messy traditional molds for precise results.</p>
      </article>

      <article className="tech-card">
        <div className="tech-icon">🧪</div>
        <h3>Autoclave Sterilization</h3>
        <p>Hospital-grade sterilization ensuring complete elimination of pathogens.</p>
      </article>

    </div>
  </div>
</section>

{leadOpen && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        background: "white",
        padding: 30,
        borderRadius: 14,
        width: "90%",
        maxWidth: 420,
        position: "relative",
      }}
    >
      <button
        onClick={() => setLeadOpen(false)}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          fontSize: 20,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ×
      </button>

      <h2 style={{ marginBottom: 16 }}>Book a Consultation</h2>

      <LeadForm
        source="Home Page - Consultation"
        onSuccess={() => setLeadOpen(false)}
      />
    </div>
  </div>
)}

    </main>
  );
}


export default Home;


