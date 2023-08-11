"use client";
import styles from "./contact.module.css";
import Form from "../Form/index";
import GitHubMarkWhite from "../icons/GitHubMarkWhite";
import LinkedIn from "../icons/LinkedIn";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
import CV from "../icons/CV";
import CV2 from "../icons/CV2";
import { useSelector } from "react-redux";

export default function Contact() {
  const language = useSelector((state) => state.languageReducer.value.language);

  const handleDownload = () => {
    if (language === "es") {
      const pdfFileName = "CV-Facundo-Aragon (Español).pdf"; // Replace with your actual PDF file name
      const downloadLink = `../../${pdfFileName}`;
      window.open(downloadLink, "_blank");
    } else {
      const pdfFileName = "CV-Facundo-Aragon (English).pdf"; // Replace with your actual PDF file name
      const downloadLink = `../../${pdfFileName}`;
      window.open(downloadLink, "_blank");
    }
  };
  return (
    <>
      <section className={styles.section}>
        <div className={styles.background}>
          <div className={styles.firstCover}>
            <div className={styles.lineDown}></div>
          </div>
          <div className={styles.secondCover}>
            <div className={styles.viewForm}>
              <Form />
            </div>
            <div className={styles.borderRight}>
              <div className={styles.boxes}></div>
              <div className={styles.boxes}></div>
              <div className={styles.footer}>
                <div className={styles.footerLeft}>
                  <a href="https://github.com/facuaragon" target="_blank">
                    <GitHubMarkWhite width={20} height={20} fill={"#000000"} />
                    <p>GitHub</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/facundo-aragon-00919459/"
                    target="_blank"
                  >
                    <LinkedIn width={20} height={20} fill={"#000000"} />
                    <p>LinkedIn</p>
                  </a>
                  <a
                    href="https://www.instagram.com/facuaragon/"
                    target="_blank"
                  >
                    <Instagram width={20} height={20} fill={"#000000"} />
                    <p>Instagram</p>
                  </a>
                  <a href="https://twitter.com/facundoaragon" target="_blank">
                    <Twitter width={20} height={20} fill={"#000000"} />
                    <p>X</p>
                  </a>
                  <a onClick={handleDownload} className={styles.cv}>
                    <CV2 width={20} height={20} fill={"#000000"} />
                    <p>CV / Resume</p>
                  </a>
                </div>
                <div className={styles.footerRight}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
