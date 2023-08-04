"use client";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import MenuIcon from "../icons/MenuIcon";
import { Link as ScrollLink, animateScroll as Scroll } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
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
                About
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
                Projects
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
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <a onClick={toggleNav} className={styles.menu} href="">
          <button className={styles.menuButton}>
            <MenuIcon width={25} height={25} fill="currentColor" />
          </button>
        </a>
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
              About
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
              Projects
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
              Contact Me
            </ScrollLink>
          </div>
        </div>
      </header>
    </>
  );
}
