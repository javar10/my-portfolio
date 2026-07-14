import styles from "../styles.module.css";

export default function Skills() {
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