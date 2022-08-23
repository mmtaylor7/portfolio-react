import { Routes, Route, Link } from "react-router-dom";
import cuteMM from "../assets/headshotpicture.jpg";

import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="container body-div">
      {/* <img alt="Headshot" src="../assets/headshotpicture.jpeg" /> */}
      <img alt="Headshot" src={require("../assets/Headshot.png")} />
      <div>
        <div className="page-title">About Me</div>
        <div></div>
      </div>
    </div>
  );
}

export default AboutMe;
