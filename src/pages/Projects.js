import styles from "../styles.module.css";
import projects from "../data/projects"

export default function Projects() {
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