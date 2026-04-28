import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./styles.module.css";
import projects from "./data/projects";

// --- Navbar ---
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Your Name</h1>
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

// --- Pages ---
function Home() {
  return (
    <div className={styles.home}>
      <h2>
        Hi, I'm <span className={styles.accent}>Your Name</span>
      </h2>
      <p>
        Software Engineer with a background in education, focused on building
        intuitive, user-centered applications.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt="project preview"
              className={styles.projectImage}
            />

            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.tags}>
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <a href={project.link}>View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.card}>
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>HTML/CSS</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>APIs</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Other</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Git/GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <p>Email: your@email.com</p>
      <p>GitHub: github.com/yourname</p>
    </div>
  );
}

// --- Main App ---
export default function Portfolio() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
