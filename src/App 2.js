import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap";
import "react-bootstrap";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <div className="routes">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
