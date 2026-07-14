import styles from "../styles.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>
        Hi, I'm <span className={styles.accent}>Your Name</span>
      </h2>
      <p>
        Software Engineer with a background in education, focused on building
        intuitive, user-centered applications.
      </p>
      <p>
        Your background is a major asset. Architecture gives you a strong foundation in spatial design and complex systems, a Master’s in Education means you know how to learn efficiently, and your full-stack bootcamp supplies the practical coding foundations needed to skip repetitive introductory coursework.
      </p>
    </div>
  );
}