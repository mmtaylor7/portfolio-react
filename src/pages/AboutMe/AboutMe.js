import { Routes, Route, Link } from "react-router-dom";
import "../Bg.css";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="container body-bg body-size">
      <span>This is my about me page</span>
      {/* <nav>
        <Link to="/about">About</Link>
      </nav> */}
    </div>
  );
}

export default AboutMe;
