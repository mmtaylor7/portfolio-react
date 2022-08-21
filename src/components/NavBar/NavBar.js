import "../NavBar/NavBar.js";
import React from "react";
import "./NavBar.css";
import { Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <span>
        <Link to="/" className="navBarFont" style={{ textDecoration: "none" }}>
          About Me
        </Link>
      </span>
      <span>
        <Link
          to="/portfolio"
          className="navBarFont"
          style={{ textDecoration: "none" }}
        >
          Portfolio
        </Link>
      </span>
      <span>
        <Link
          to="/contact"
          className="navBarFont"
          style={{ textDecoration: "none" }}
        >
          Contact
        </Link>
      </span>
      <span>
        <Link
          to="/resume"
          className="navBarFont"
          style={{ textDecoration: "none" }}
        >
          Resume
        </Link>
      </span>
    </div>
  );
}
