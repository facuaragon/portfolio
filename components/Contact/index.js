"use client";
import styles from "./contact.module.css";
import Form from "../Form/index";
import GitHubMarkWhite from "../icons/GitHubMarkWhite";
import LinkedIn from "../icons/LinkedIn";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";

export default function Contact() {
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
                  <a href="https://github.com/facuaragon">
                    <GitHubMarkWhite width={20} height={20} fill={"#000000"} />
                  </a>
                  <a href="https://www.linkedin.com/in/facundo-aragon-00919459/">
                    <LinkedIn width={20} height={20} fill={"#000000"} />
                  </a>
                  <a href="https://www.instagram.com/facuaragon/">
                    <Instagram width={20} height={20} fill={"#000000"} />
                  </a>
                  <a href="https://twitter.com/facundoaragon">
                    <Twitter width={20} height={20} fill={"#000000"} />
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
