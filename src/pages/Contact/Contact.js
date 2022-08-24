import { Routes, Route, Link } from "react-router-dom";
import "./Contact.css";
import { Button, Col, Row } from "react-bootstrap";

function Contact() {
  return (
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
                  Lorem Ipsum asdkl;fjh askldjfh asdkjhefu djhlasd cat dog fish
                  elephant tiger mouse rat squirrel dog daisy tulip hydrangea bla
                  blah blah sarah sam mary margaret jim sally bryan mary doug
                  jimmy jack margot sydney michael campbell.
                </div>
                <div></div>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  );
}

export default Contact;
