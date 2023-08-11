"use client";
import GitHubMarkWhite from "../icons/GitHubMarkWhite";
import styles from "./projectCard.module.css";
import { useSelector } from "react-redux";

export default function ProjectCard({ project }) {
  const language = useSelector((state) => state.languageReducer.value.language);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>
          <GitHubMarkWhite height={60} width={60} fill={"black"} />
        </div>
        <div className={styles.name}>{project.title}</div>
        <div className={styles.description}>
          {project.shortDescription[language]}
        </div>
      </div>
    </>
  );
}
