import "../NavBar/NavBar.js";
import React from "react";
import "./NavBar.css";
import { Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navSpacing">
      <div>
        <Link to="/" className="navBarFont" style={{ textDecoration: "none" }}>
          About Me
        </Link>
      </div>
      <div>
        <Link
          to="/portfolio"
          className="navBarFont"
          style={{ textDecoration: "none" }}
        >
          Portfolio
        </Link>
      </div>
      <div>
        <Link
          to="/contact"
          className="navBarFont"
          style={{ textDecoration: "none" }}
        >
          Contact
        </Link>
      </div>
      <div>
        <Link
          to="/resume"
          className="navBarFont"
          style={{ textDecoration: "none" }}
        >
          Resume
        </Link>
      </div>
    </div>
  );
}
