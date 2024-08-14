import React, { useState } from "react";
import styles from "./navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.leftcontainer}>
        <a href="/">
          <img
            className={styles.images}
            src={getImageUrl("Navbar/logoPortfolio.svg")}
            alt="my-logo"
          />
        </a>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("Navbar/closeIcon.png")
              : getImageUrl("Navbar/menuIcon.png")
          }
          alt="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(true)}
        >
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Works</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
