"use client";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import MenuIcon from "../icons/MenuIcon";
import { Link as ScrollLink, animateScroll as Scroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { spanish, english } from "@/redux/features/language-slice";
import { navbarMenu } from "@/utils/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.languageReducer.value.language);
  const navbarHeight = 0;

  const changeBg = () => {
    let scrollValue = window.scrollY;
    if (scrollValue > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener("scroll", changeBg);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  const toggleNav = (e) => {
    e.preventDefault();
    menu && setMenu(false);
    !menu && setMenu(true);
  };

  const setSpanish = () => {
    dispatch(spanish());
  };
  const setEnglish = () => {
    dispatch(english());
  };

  return (
    <>
      <header
        className={
          scrolled ? `${styles.header} ${styles.scrolled}` : styles.header
        }
      >
        <div className={styles.logo}>
          <ScrollLink
            activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            offset={navbarHeight}
            duration={800}
          >
            home
          </ScrollLink>
        </div>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <ScrollLink
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={navbarHeight}
                duration={800}
              >
                {navbarMenu.options.about[language]}
              </ScrollLink>
            </li>
            <div className={styles.down}></div>
            <li>
              <ScrollLink
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={navbarHeight}
                duration={800}
              >
                {navbarMenu.options.projects[language]}
              </ScrollLink>
            </li>
            <div className={styles.up}></div>
            <li>
              <ScrollLink
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={navbarHeight}
                duration={800}
              >
                {navbarMenu.options.contact[language]}
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div className={styles.order}>
          <a onClick={toggleNav} className={styles.menu} href="">
            <button className={styles.menuButton}>
              <MenuIcon width={25} height={25} fill="currentColor" />
            </button>
          </a>
          <div className={styles.languages}>
            <div
              className={styles.enLanguage}
              style={language === "en" ? { fontWeight: 900 } : {}}
              onClick={setEnglish}
            >
              EN
            </div>
            <div
              className={styles.esLanguage}
              style={language === "es" ? { fontWeight: 900 } : {}}
              onClick={setSpanish}
            >
              ES
            </div>
          </div>
        </div>
        <div
          className={styles.overlay}
          id={menu ? styles.mobileMenu : undefined}
        >
          <a onClick={toggleNav} href="" className={styles.close}>
            x
          </a>
          <div className={styles.overlayContent}>
            <ScrollLink
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={navbarHeight}
              duration={800}
              onClick={toggleNav}
            >
              {navbarMenu.options.about[language]}
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={navbarHeight}
              duration={800}
              onClick={toggleNav}
            >
              {navbarMenu.options.projects[language]}
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={navbarHeight}
              duration={800}
              onClick={toggleNav}
            >
              {navbarMenu.options.contact[language]}
            </ScrollLink>
          </div>
        </div>
      </header>
    </>
  );
}
