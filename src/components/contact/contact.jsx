import React from "react";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.contactMe}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h1 className={styles.title}>Lets Work Together</h1>
          <p className={styles.para}>
            I am available for any questions or if you want to work together.
            Dont hesitate.
          </p>
        </div>
        <div className={styles.rightContainer}>
          <a className={styles.btn} href="mailto:espinozaw657@gmail.com">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
