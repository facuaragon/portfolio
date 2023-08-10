"use client";
import styles from "./welcome.module.css";
import { useSelector } from "react-redux";
import { welcome } from "@/utils/data";
export default function Welcome() {
  const language = useSelector((state) => state.languageReducer.value.language);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.firstLine}>
            <div className={styles.horizontalLine}></div>
            <div className={styles.salute}>{welcome.salute[language]}</div>
          </div>
          <div className={styles.secondLine}>
            <div className={styles.salute}>
              <div className={styles.firstName}>facundo</div>
              <div className={styles.lastName}>aragon</div>
            </div>
            <div className={styles.horizontalLine}></div>
          </div>
          <div className={styles.thirdLine}>
            {welcome.description[language]}
          </div>
        </div>
      </section>
    </>
  );
}
