import "../NavBar/NavBar.js";
import React from "react";
import "./NavBar.css";

import { Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <span>
        <Link to="/">About Me</Link>
      </span>
      <span>
        <Link to="/portfolio">Portfolio</Link>
      </span>
      <span>
        <Link to="/contact">Contact</Link>
      </span>
      <span>
        <Link to="/resume">Resume</Link>
      </span>
    </div>
  );
}
