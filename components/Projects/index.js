"use client";
import { useState } from "react";
import styles from "./projects.module.css";

export default function Projects() {
  const projects = ["1", "2", "3", "4"];
  const [active, setActive] = useState(0);
  const [transformX, setTransformX] = useState(0);
  const sliderWidth = `${projects.length * 100}%`;
  const projectWidth = `${100 / projects.length}%`;
  const handleSlide = (e) => {
    setActive(Number(e.target.id));
    setTransformX(Number(e.target.id) * -(100 / projects.length));
  };
  const handleArrowSlide = (e) => {
    if (e.target.id === "arrowLeft" && active > 0) {
      const movement = active - 1;
      setActive(active - 1);
      setTransformX(movement * -(100 / projects.length));
    }
    if (e.target.id === "arrowRight" && active < projects.length - 1) {
      const movement = active + 1;
      setActive(active + 1);
      setTransformX(movement * -(100 / projects.length));
    }
  };
  return (
    <>
      <div className={styles.carrousel}>
        <div
          id="arrowLeft"
          onClick={handleArrowSlide}
          className={`${styles.arrow} ${styles.left} ${
            active == 0 ? styles.disabled : ""
          }`}
        >
          &#60;
        </div>
        <div
          className={styles.sliderContainer}
          style={{
            width: sliderWidth,
            transform: `translateX(${transformX}%)`,
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={styles.project}
              style={{ width: projectWidth }}
            >{`Proyecto ${project}`}</div>
          ))}
        </div>

        <ul className={styles.points}>
          {projects.map((project, i) => (
            <li
              id={i}
              key={i}
              onClick={handleSlide}
              className={`${styles.point} ${i == active ? styles.active : ""}`}
            ></li>
          ))}
        </ul>
        <div
          id="arrowRight"
          onClick={handleArrowSlide}
          onKeyDown={handleArrowSlide}
          className={`${styles.arrow} ${styles.right} ${
            active == projects.length - 1 ? styles.disabled : ""
          }`}
        >
          &#62;
        </div>
      </div>
    </>
  );
}
