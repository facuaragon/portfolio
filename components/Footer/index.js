import GitHubMarkWhite from "../icons/GitHubMarkWhite";
import Instagram from "../icons/Instagram";
import LinkedIn from "../icons/LinkedIn";
import Twitter from "../icons/Twitter";
import styles from "./footer.module.css";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.copyright}> © {year} Facundo Aragon</div>
        </div>
      </footer>
    </>
  );
}
