import React from "react";
import styles from "./footer.module.css";

import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer>
      <img
        className={styles.logo}
        src={getImageUrl("Navbar/logoPortfolio.svg")}
        alt="logo"
      />
      <ul>
        <li>
          <a href="#Home">Home</a>
          <a href="#About">About Me</a>
          <a href="#Works">Works</a>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <hr className={styles.line} />
      <p className={styles.copyright}>Created by William Espinoza</p>
    </footer>
  );
};
