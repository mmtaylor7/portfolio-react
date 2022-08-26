import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../Portfolio/Portfolio.css";
import AppCard from "../../components/AppCard/AppCard";
import { Row, Col } from "react-bootstrap";
import projects from "../../Projects";

function Portfolio() {
  return (
    <div>
      <div className="page-title">Portfolio</div>
      <Row>
        {projects.map((project) => {
          return (
            <Col>
              <AppCard project={project}></AppCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Portfolio;
