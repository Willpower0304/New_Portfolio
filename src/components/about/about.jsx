import React from "react";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.miniTitle}>ABOUT ME</p>
        <h1 className={styles.title}>Who am I?</h1>
        <p className={styles.paraContent}>
          University student studying software development in Panama. I have 0
          work experience, but 1000 experience in doing the best job.
        </p>
      </div>
    </section>
  );
};
