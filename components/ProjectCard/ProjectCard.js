"use client";
import GitHubMarkWhite from "../icons/GitHubMarkWhite";
import styles from "./projectCard.module.css";
import { useSelector } from "react-redux";

export default function ProjectCard({ project }) {
  const language = useSelector((state) => state.languageReducer.value.language);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>{project.icon}</div>
        <div className={styles.name}>{project.title}</div>
        <div className={styles.description}>
          {project.shortDescription[language]}
        </div>
        <div className={styles.footer}>
          {language === "en" ? "(Click for More)" : "(Click para Ver Más)"}
        </div>
      </div>
    </>
  );
}
