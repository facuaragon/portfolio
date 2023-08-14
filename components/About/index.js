"use client";
import styles from "./about.module.css";
import Skills from "./skills";
import { skills } from "@/utils/data";
import { useSelector } from "react-redux";
import { about } from "@/utils/data";

export default function About() {
  const language = useSelector((state) => state.languageReducer.value.language);
  const compareFn = (a, b) => {
    if (a.knowledge < b.knowledge) {
      return 1;
    } else if (a.knowledge > b.knowledge) {
      return -1;
    }
    return 0;
  };
  return (
    <div className={styles.container}>
      <div className={styles.tag}>{about.tag[language]}</div>
      <div className={styles.firstContainer}>
        <div className={styles.secondContainer}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.geometry}>
          <div className={styles.topLine}></div>
          <div className={styles.topLine}></div>
          <div className={styles.rightLine}></div>
        </div>
        <div className={styles.about}>
          <div className={styles.description}>
            <span>Full Stack Web Developer</span> {about.first[language]} <br />
            <br />
            {about.second[language]} <br />
            <br />
            {about.third[language]}
          </div>
          <div className={styles.skills}>
            {skills.sort(compareFn).map((skill) => {
              return (
                <div key={skill.name} className={styles.skill}>
                  <div className={styles.circles}>
                    <Skills knowledge={skill.knowledge} />
                  </div>
                  <div className={styles.technology}>{skill.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
