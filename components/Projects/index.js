"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ArrowNext from "../icons/ArrowNext";
import ArrowPrev from "../icons/ArrowPrev";
import styles from "./projects.module.css";

export default function Projects() {
  const projects = [1, 2, 3, 4, 5, 6];
  const count = projects.length - 1;
  const [windowWidth, setWindowWidth] = useState(0);
  const [projectsWidth, setProjectsWidth] = useState(0);
  const [movement, setMovement] = useState(0);
  const [transformX, setTransformX] = useState(0);

  useEffect(() => {
    const projectsContent = document.getElementById("projectsContent");
    const projectsContentWidth = projectsContent.offsetWidth;
    setProjectsWidth(projectsContentWidth);
    setMovement(projectsContentWidth / projects.length);
    setWindowWidth(window.innerWidth);
  }, []);

  const handleTranslateNext = () => {
    if (windowWidth - transformX + movement > projectsWidth) {
      let xMove = windowWidth - transformX + movement - projectsWidth;
      setTransformX(transformX - movement + xMove);
    } else {
      setTransformX(transformX - movement);
    }
  };

  const handleTranslatePrev = () => {
    if (-transformX - movement <= 0) {
      setTransformX(0);
    } else {
      setTransformX(transformX + movement);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.firstContainer}></div>
        <div className={styles.secondContainer}></div>
        <div className={styles.tag}> projects</div>
        <div className={styles.arrowLeft}>
          <div className={styles.arrow} onClick={handleTranslatePrev}>
            <ArrowPrev
              id="projectArrowPrev"
              width={40}
              height={40}
              fill={"#000"}
            />
          </div>
        </div>
        <div
          id="projectsContent"
          className={styles.content}
          style={{ transform: `translateX(${transformX}px)` }}
        >
          {projects.map((project, i) => (
            <React.Fragment key={i}>
              <ProjectCard project={project} />
              {i < count && <div className={styles.separator}></div>}
            </React.Fragment>
          ))}
        </div>
        <div className={styles.arrowRight}>
          <div className={styles.arrow} onClick={handleTranslateNext}>
            <ArrowNext
              id="projectArrowPrev"
              width={40}
              height={40}
              fill={"#000"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
