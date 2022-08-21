import "../NavBar/NavBar.js";
import { Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <Link to="/" id="len1" class="hoverable">
              About Me
            </Link>
            <Link to="/portfolio" id="len1" class="hoverable">
              Portfolio
            </Link>
            <Link to="/contact" id="len1" class="hoverable">
              Contact
            </Link>
            <Link to="/resume" id="len1" class="hoverable">
              Resume
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
