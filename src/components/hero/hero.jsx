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
        <a href="https://github.com/Willpower0304" target="_blank">
          <img
            className={styles.imagenes}
            src={getImageUrl("Hero/git.svg")}
            alt="github-logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/william-espinoza-7687722ab/"
          target="_blank"
        >
          <img
            className={styles.imagenes}
            src={getImageUrl("Hero/linke.svg")}
            alt="linkedin-logo"
          />
        </a>
        <a href="https://x.com/willpower042" target="_blank">
          <img
            className={styles.imagenes}
            src={getImageUrl("Hero/x.svg")}
            alt="x-logo"
          />
        </a>
        <a href="https://www.instagram.com/willpower0304/" target="_blank">
          <img
            className={styles.imagenes}
            src={getImageUrl("Hero/insta.svg")}
            alt="instagram-logo"
          />
        </a>
      </div>
      <img className={styles.blob} src={getImageUrl("Hero/blob.svg")} alt="" />
    </div>
  );
};
