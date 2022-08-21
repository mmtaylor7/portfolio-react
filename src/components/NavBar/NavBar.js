import "../NavBar/NavBar.js";
import { Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <Link to="/">About Me</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
