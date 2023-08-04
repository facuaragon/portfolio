import React, { useCallback, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import styles from "./modal.module.css";

const Modal = ({ onClose, children, title }) => {
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
  }, []);
  useEffect(() => {
    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className={styles.modalOverlay}>
      <div ref={modalWrapperRef} className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          {title && <h1>{title}</h1>}
          <div className={styles.modalBody}>{children}</div>
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
