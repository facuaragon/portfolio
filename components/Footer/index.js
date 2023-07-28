import styles from "./footer.module.css";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className={styles.footer}>© {year} Facundo</footer>
    </>
  );
}
