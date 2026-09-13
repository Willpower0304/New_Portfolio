import React from "react";
import styles from "./notFound.module.css";
import { getImageUrl } from "../../utils";

export const NotFound = () => {
  return (
    <main className={styles.page}>
      <div className={styles.overlay} />
      <img
        className={styles.background}
        src={getImageUrl("Hero/bg.webp")}
        alt="background"
      />

      <div className={styles.content}>
        <p className={styles.eyebrow}>ERROR 404</p>
        <h2 className={styles.title}>Page not found</h2>
        <p className={styles.description}>
          The page you are looking for does not exist or has moved.
        </p>

        <div className={styles.actions}>
          <a href="/" className={styles.primaryButton}>
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
};
