import styles from "../styles.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Your Name</h1>
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}