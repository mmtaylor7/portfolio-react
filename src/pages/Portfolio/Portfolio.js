import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../Portfolio/Portfolio.css";
import AppCard from "../../components/AppCard/AppCard";
import { Row, Col } from "react-bootstrap";

function Portfolio() {
  return (
    <div className="portfolio-card-container">
      <Row>
        <Col>
          <AppCard></AppCard>
        </Col>
        <Col>
          <AppCard></AppCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <AppCard></AppCard>
        </Col>
        <Col>
          <AppCard></AppCard>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
