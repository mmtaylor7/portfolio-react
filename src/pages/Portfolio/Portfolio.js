import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../Portfolio/Portfolio.css";
import AppCard from "../../components/AppCard/AppCard";

function Portfolio() {
  return (
    <div className="portfolio-card-container">
      <AppCard></AppCard>
    </div>
  );
}

export default Portfolio;
