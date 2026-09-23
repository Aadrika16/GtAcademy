import React from "react";
import "./index.css";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About",
    "Placements",
    "Gallery",
    "Blogs",
    "Contact",
  ];

  const courseLinks = [
    "Digital Marketing",
    "SEO Mastery",
    "Social Media Marketing",
    "Google Ads",
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img
              src="/logo/logo1.svg"
              alt="GT Apex Logo"
              className="footer-logo"
            />

            <p>
              Build practical digital marketing skills with real projects,
              expert mentors and industry-focused training.
            </p>

            <div className="footer-socials">
              <a href="#instagram" aria-label="Instagram">
                IG
              </a>

              <a href="#facebook" aria-label="Facebook">
                FB
              </a>

              <a href="#linkedin" aria-label="LinkedIn">
                IN
              </a>

              <a href="#youtube" aria-label="YouTube">
                YT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="footer-column">
            <h3>Popular Courses</h3>

            <ul>
              {courseLinks.map((item) => (
                <li key={item}>
                  <a href="#courses">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <p>
              <span className="footer-contact-icon">📍</span>
              Hyderabad, Telangana
            </p>

            <p>
              <span className="footer-contact-icon">📞</span>
              +91 XXXXX XXXXX
            </p>

            <p>
              <span className="footer-contact-icon">✉️</span>
              info@gtapex.com
            </p>

            <button className="footer-enquire-btn">
              Enquire Now
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} GT Apex. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;