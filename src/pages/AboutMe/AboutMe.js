import { Routes, Route, Link } from "react-router-dom";

import "./AboutMe.css";

import { Button, Col, Row } from "react-bootstrap";

function AboutMe() {
  return (
    <div className="container body-div">
      <Row>
        <Col sm={12} lg={6}>
          <img
            className="img headshot"
            alt="Headshot"
            src={require("../assets/Headshot.png")}
          />
        </Col>
        <Col sm={12} lg={6}>
          <Row sm={12}>
            <div className="page-title">
              <div className="page-title">About Me</div>
              <div></div>
            </div>
          </Row>
          <Row sm={12}>
            <div className="about-text">
              <div className="about-text">
                Welcome to my page! I'm so glad you're here! My name is Mary
                Margaret Taylor, and I am an emerging web developer. In 2022, I
                left the world of teaching to dive into coding- and I'm loving
                it! I have experience in building front end, back end and full
                stack applications through the Georgia Tech Full Stack Coding
                Bootcamp. I am continuing to learn and develop my skills with
                the eventual goal of integrating the education and coding
                arenas. Please take a look around my page and enjoy!
              </div>
              <div></div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
