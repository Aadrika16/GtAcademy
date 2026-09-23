import React from "react";
import "./index.css";

const Hero = () => {
  const stats = [
    {
      icon: "👥",
      number: "500+",
      text: "Students Trained",
    },
    {
      icon: "📈",
      number: "90%",
      text: "Placement Support",
    },
    {
      icon: "⭐",
      number: "10+",
      text: "Industry Mentors",
    },
    {
      icon: "💼",
      number: "Real Projects",
      text: "Hands-on Learning",
    },
  ];

  const courses = [
    {
      icon: "📢",
      title: "Digital Marketing Foundation",
    },
    {
      icon: "📈",
      title: "SEO Mastery",
    },
    {
      icon: "🎯",
      title: "Social Media Marketing",
    },
    {
      icon: "📊",
      title: "Google Ads & Performance Marketing",
    },
  ];

  return (
    <section className="landing-section-wrapper">
      {/* ================= HERO ================= */}
      <section className="hero-section" id="home">
        {/* Background */}
        <div className="hero-bg-wrapper">
          <img
            src="/background_img/img2.png"
            alt=""
            className="hero-bg-file"
          />

          <div className="hero-bg-overlay"></div>
        </div>

        {/* Main Hero */}
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <p className="hero-badge">
              LEARN <span>|</span> PRACTICE <span>|</span> GROW
            </p>

            <h1 className="hero-title">
              Build Skills
              <br />
              Build Your <span className="highlight">Future</span>
            </h1>

            <p className="hero-subtitle">
              Industry-oriented digital marketing training with real-world
              projects, expert mentors and placement support.
            </p>

            <div className="hero-buttons">
              <button className="btn-explore">
                Explore Courses
                <span className="arrow">→</span>
              </button>

              <button className="btn-watch">
                <span className="play-icon">▶</span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image-container">
            

            <img
              src="/student_img/student.webp"
              alt="Student learning digital marketing"
              className="hero-main-img"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats-wrapper">
          <div className="hero-stats-card">
            {stats.map((item, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-icon">{item.icon}</div>

                <div className="stat-info">
                  <h3>{item.number}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="courses-section" id="courses">
        <div className="courses-header">
          <h2>Popular Courses</h2>

          <a href="#all-courses" className="view-all-link">
            View All Courses
            <span>→</span>
          </a>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <article className="course-card" key={index}>
              <div className="course-icon-box">
                {course.icon}
              </div>

              <h3>{course.title}</h3>

              <a href="#learn-more" className="course-link">
                Learn More
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;