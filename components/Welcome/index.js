import styles from "./welcome.module.css";
import { welcome } from "@/utils/data";

export default function Welcome() {
  return (
    <>
      <section className={styles.section}>
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
