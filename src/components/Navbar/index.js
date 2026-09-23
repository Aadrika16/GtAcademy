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

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo/logo1.svg" alt="GT Apex Logo" />
        </a>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={
                  activeTab === item ? "nav-item active" : "nav-item"
                }
                onClick={() => {
                  setActiveTab(item);
                  closeMenu();
                }}
              >
                {item}
              </a>
            </li>
          ))}

          {/* Mobile Button */}
          <li className="mobile-cta-item">
            <button className="navbar-cta-btn">Enquire Now</button>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="desktop-cta">
          <button className="navbar-cta-btn">Enquire Now</button>
        </div>

        {/* Hamburger */}
        <button
          className={`menu-toggle ${isOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;