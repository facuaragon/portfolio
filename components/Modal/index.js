"use client";
import React, { useCallback, useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ArrowNext from "../icons/ArrowNext";
import ArrowPrev from "../icons/ArrowPrev";
import styles from "./modal.module.css";
import { useSelector } from "react-redux";
import Deploy from "../icons/Deploy";
import GitHubMarkWhite from "../icons/GitHubMarkWhite";

const Modal = ({ onClose, project }) => {
  const language = useSelector((state) => state.languageReducer.value.language);
  const [translate, setTranslate] = useState("0%");
  const [arrow, setArrow] = useState(0);
  const modalWrapperRef = useRef();
  const backDropHandler = useCallback((e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", backDropHandler);
    });
    console.log(project);
  }, []);
  useEffect(() => {
    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
    setTranslate("0%");
  };

  const handleTranslate = () => {
    setTranslate("-50%");
  };
  const handleTranslatePrev = () => {
    setTranslate("0%");
  };

  const modalContent = (
    <div className={styles.modalOverlay}>
      <div ref={modalWrapperRef} className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <a className={styles.close} href="#" onClick={handleCloseClick}>
              x
            </a>
            <div
              className={styles.arrowPrev}
              onClick={handleTranslatePrev}
              style={{ display: translate === "0%" ? "none" : "flex" }}
            >
              <ArrowPrev
                id="projectArrowPrev"
                width={40}
                height={40}
                fill={"#000"}
              />
            </div>
            <div
              className={styles.arrowNext}
              onClick={handleTranslate}
              style={{ display: translate === "-50%" ? "none" : "flex" }}
            >
              <ArrowNext
                id="projectArrowPrev"
                width={40}
                height={40}
                fill={"#000"}
              />
            </div>
            <div
              className={styles.content}
              style={{ transform: `translate(${translate})` }}
            >
              <div
                className={styles.forms}
                style={{ display: translate === "-50%" ? "none" : "block" }}
              ></div>
              <div
                className={styles.forms1}
                style={{ zIndex: translate === "-50%" ? "none" : "block" }}
              ></div>
              <div
                className={styles.forms2}
                style={{ zIndex: translate === "-50%" ? "none" : "block" }}
              ></div>
              <div className={styles.card}>
                <div className={styles.firstLine}>
                  <div className={styles.icon}>
                    {React.cloneElement(project.icon, {
                      width: 80,
                      height: 80,
                      fill: "#000",
                    })}
                  </div>
                  <div className={styles.info}>
                    <div className={styles.title}>{project.title}</div>
                    <div className={styles.type}>{project.type[language]}</div>
                  </div>
                </div>
                <div className={styles.shortDescription}>
                  {project.shortDescription[language]}
                </div>
                <div className={styles.technologies}>
                  <div>Technologies: </div>
                  <ul>
                    {project.techs.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.deploy}>
                  <Deploy width={30} height={30} fill={"#000"} />
                  <a href={project.deploy} target="_blank">
                    Deploy
                  </a>
                </div>
                <div className={styles.repository}>
                  <GitHubMarkWhite width={30} height={30} fill={"#000"} />
                  <a href={project.repository} target="_blank">
                    Repository
                  </a>
                </div>
              </div>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(/projects/${project.image})` }}
              ></div>
              <div className={styles.video}>
                <video
                  muted
                  controls
                  poster={`/projects/${project.image}`}
                  style={{ backgroundColor: "#fff" }}
                >
                  <source src={`/projects/${project.video}`} type="video/mp4" />
                  Tu navegador no admite el elemento <code>video</code>.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default Modal;
