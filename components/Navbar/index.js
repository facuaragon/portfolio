"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import { Link as ScrollLink, animateScroll as Scroll } from "react-scroll";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navbarHeight = -84;

  const toggleNav = (e) => {
    e.preventDefault();
    menu && setMenu(false);
    !menu && setMenu(true);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <ScrollLink
            activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            offset={navbarHeight}
            duration={800}
          >
            Facundo
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
            &times;
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
