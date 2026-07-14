import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styles from "./styles.module.css";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// --- Main App ---
export default function Portfolio() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
