import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#main" className="nav-link">
        <span>Home</span>
      </a>
      <a href="#about" className="nav-link">
        <span>About</span>
      </a>
      <a href="#projects" className="nav-link">
        <span>Projects</span>
      </a>
      <a href="#contact" className="nav-link">
        <span>Contact</span>
      </a>
    </nav>
  );
}
