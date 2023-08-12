"use client";
import React, { useCallback, useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ArrowNext from "../icons/ArrowNext";
import styles from "./modal.module.css";
import { useSelector } from "react-redux";

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

  const modalContent = (
    <div className={styles.modalOverlay}>
      <div ref={modalWrapperRef} className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            {/* <div className={styles.forms}></div>
            <div className={styles.forms2}></div> */}
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
            <div
              className={styles.arrow}
              onClick={handleTranslate}
              style={{ display: translate === "-50%" ? "none" : "block" }}
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
              <div className={styles.card}>
                <div className={styles.firstLine}>
                  <div className={styles.icon}>
                    {React.cloneElement(project.icon, {
                      width: 80,
                      height: 80,
                      fill: "#000",
                    })}
                  </div>
                  <div className={styles.title}>{project.title}</div>
                </div>
                <div className={styles.type}>{project.type[language]}</div>
                <div className={styles.shortDescription}>
                  {project.shortDescription[language]}
                </div>
                <div className={styles.technologies}>
                  <span>technologies:&nbsp;</span>
                  {project.techs.join(", ")}
                </div>
                <div className={styles.repository}>repository</div>
                <div className={styles.deploy}>deploy</div>
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

              {/* <div className={styles.description}>
                {project.description[language]}
              </div> */}
              {/* <video
                autoPlay
                muted
                controls
                style={{ backgroundColor: "#fff" }}
              >
                <source src={`/projects/${project.video}`} type="video/mp4" />
                Tu navegador no admite el elemento <code>video</code>.
              </video> */}
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
