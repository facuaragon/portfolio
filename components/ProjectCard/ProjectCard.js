import GitHubMarkWhite from "../icons/GitHubMarkWhite";
import styles from "./projectCard.module.css";

export default function ProjectCard({ project }) {
  const name = "dogs";
  const description = "projecto individual del bootcamop de soy henry";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>
          <GitHubMarkWhite height={60} width={60} fill={"black"} />
        </div>
        <div className={styles.name}>{project}</div>

        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </>
  );
}
