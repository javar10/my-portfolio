import styles from "../styles.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <p>Email: your@email.com</p>
      <p>GitHub: github.com/yourname</p>
    </div>
  );
}