import React from "react";
import "./index.css";

const CareerSection = () => {
  const features = [
    {
      icon: "⚙️",
      title: "Practical Training",
    },
    {
      icon: "👥",
      title: "Expert Mentors",
    },
    {
      icon: "💼",
      title: "Live Projects",
    },
    {
      icon: "👜",
      title: "Placement Support",
    },
  ];

  return (
    <section className="career-section">
      <div className="career-container">
        {/* ================= CTA BANNER ================= */}
        <div className="career-banner">
          {/* Left Content */}
          <div className="career-banner-content">
            <h2>
              Your Journey to a Digital Career
              <br />
              Starts Here
            </h2>

            <p>
              Gain in-demand skills, work on live projects and get placed
              ahead of the competition.
            </p>

            <button className="career-btn">
              Enquire Now
              <span>→</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="career-banner-image-wrap">
            <img
              src="/student_img/student1.webp"
              alt="Digital marketing student working on laptop"
              className="career-banner-image"
            />
          </div>
        </div>

        {/* ================= HEADING ================= */}
        <div className="career-heading">
          <h2>What Makes Us Different?</h2>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="career-features-grid">
          {features.map((feature, index) => (
            <div className="career-feature-card" key={index}>
              <div className="career-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;