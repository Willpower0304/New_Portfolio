import React from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <p className={styles.degree}>Software Developer & logo Designer</p>
      <h1 className={styles.name}>WILLIAM ESPINOZA</h1>
      <h1 className={styles.namebg}>WILLIAM ESPINOZA</h1>
      <div className={styles.imgContainer}>
        <a href="">
          <img
            className={styles.imagenes}
            src={getImageUrl("Hero/git.svg")}
            alt="github-logo"
          />
        </a>
        <a href="">
          <img
            className={styles.imagenes}
            src={getImageUrl("Hero/linke.svg")}
            alt="linkedin-logo"
          />
        </a>
        <a href="">
          <img
            className={styles.imagenes}
            src={getImageUrl("Hero/x.svg")}
            alt="x-logo"
          />
        </a>
        <a href="">
          <img
            className={styles.imagenes}
            src={getImageUrl("Hero/insta.svg")}
            alt="instagram-logo"
          />
        </a>
      </div>
    </div>
  );
};
