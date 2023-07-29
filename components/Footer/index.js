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
          <div className={styles.icons}>
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
          <div className={styles.copyright}> © {year} Facundo Aragon</div>
        </div>
      </footer>
    </>
  );
}
