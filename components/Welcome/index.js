import styles from "./welcome.module.css";
import localFont from "next/font/local";
const neutra = localFont({
  src: [
    {
      path: "../Fonts/Neutra-Text-Light-Alt.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
export default function Welcome() {
  return (
    <>
      <section className={`${neutra.className} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.firstLine}>
            <div className={styles.horizontalLine}></div>
            <div className={styles.salute}>hi, my name is</div>
          </div>
          <div className={styles.secondLine}>
            <div className={styles.salute}>
              <div className={styles.firstName}>facundo</div>
              <div className={styles.lastName}>aragon</div>
            </div>
            <div className={styles.horizontalLine}></div>
          </div>
          <div className={styles.thirdLine}>
            full stack web developer based in argentina
          </div>
        </div>
      </section>
    </>
  );
}
