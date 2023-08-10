"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "../Modal";
import ProjectCard from "../ProjectCard/ProjectCard";
import ArrowNext from "../icons/ArrowNext";
import ArrowPrev from "../icons/ArrowPrev";
import styles from "./projects.module.css";
import { useSelector } from "react-redux";

export default function Projects() {
  const projects = [1, 2, 3, 4, 5, 6];
  const count = projects.length - 1;
  const [windowWidth, setWindowWidth] = useState(0);
  const [projectsWidth, setProjectsWidth] = useState(0);
  const [movement, setMovement] = useState(0);
  const [transformX, setTransformX] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState();
  const language = useSelector((state) => state.languageReducer.value.language);

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

  const openModal = (project) => {
    setModalProject(project);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            setModalProject();
          }}
          project={modalProject}
        >
          Project {modalProject}
        </Modal>
      )}
      <div className={styles.container}>
        <div className={styles.firstContainer}></div>
        <div className={styles.secondContainer}></div>
        <div className={styles.tag}>
          {language == "en" ? "projects" : "proyectos"}
        </div>
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
            <div
              className={styles.project}
              key={i}
              onClick={() => openModal(project)}
            >
              <ProjectCard project={project} />
              {i < count && <div className={styles.separator}></div>}
            </div>
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
