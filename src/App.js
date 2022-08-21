import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <nav>
        <Link to="/">About</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/contact">contact</Link>
        <Link to="/resume">resume</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
