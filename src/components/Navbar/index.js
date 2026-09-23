import React, { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navLinks = [
    "Home",
    "About",
    "Placements",
    "Gallery",
    "Blogs",
    "Contact",
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (item) => {
    setActiveTab(item);
    closeMenu();
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => handleNavClick("Home")}
        >
          <img
            src="/logo/logo1.svg"
            alt="GT Apex Logo"
          />
        </a>

        {/* Desktop + Mobile Navigation */}
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={
                  activeTab === item
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={() => handleNavClick(item)}
              >
                {item}
              </a>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="mobile-cta-item">
            <button
              className="navbar-cta-btn"
              onClick={closeMenu}
            >
              Enquire Now
            </button>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="desktop-cta">
          <button className="navbar-cta-btn">
            Enquire Now
          </button>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className={`menu-toggle ${
            isOpen ? "is-active" : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`navbar-overlay ${
          isOpen ? "active" : ""
        }`}
        onClick={closeMenu}
      ></div>
    </nav>
  );
};

export default Navbar;