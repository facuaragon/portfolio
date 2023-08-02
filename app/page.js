import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <section id="welcome" className={styles.welcome}>
        <Welcome />
      </section>
      <section id="section1" className={styles.section1}>
        <About />
      </section>
      <section id="section2" className={styles.section2}>
        <Projects />
      </section>
      <section id="section3" className={styles.section3}>
        <Contact />
      </section>
    </>
  );
}
