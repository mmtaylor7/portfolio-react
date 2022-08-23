import { Routes, Route, Link } from "react-router-dom";

import "./AboutMe.css";

import { Button, Col, Row } from "react-bootstrap";

function AboutMe() {
  return (
    <div className="container body-div">
      <Row>
        <Col sm={12} md={3}>
          <img
            className="img headshot"
            alt="Headshot"
            src={require("../assets/Headshot.png")}
          />
        </Col>
        <Col sm={12} md={3}>
          <div className="page-title sm-2">
            <div className="page-title sm-2">About Me</div>
            <div></div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="about-text sm-2">
            <div className="about-text sm-2">About Me</div>
            <div></div>
          </div>
        </Col>
      </Row>
      {/* <img alt="Headshot" src="../assets/headshotpicture.jpeg" /> */}
    </div>
  );
}

export default AboutMe;
