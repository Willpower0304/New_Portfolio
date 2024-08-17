import React from "react";
import styles from "./works.module.css";
import projects from "../../data/projects.json";
import { WorksCard } from "./worksCard";
import { getImageUrl } from "../../utils";

export const Works = () => {
  return (
    <section className={styles.container} id="Works">
      <h1 className={styles.title}>My Works</h1>
      <p className={styles.miniTitle}>Websites</p>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <WorksCard key={id} project={project} />;
        })}
      </div>
      <div className={styles.logosContainer}>
        <p className={styles.miniTitle2}>Logos Designs</p>
        <div className={styles.parent}>
          <img
            src={getImageUrl("works/Gardens.svg")}
            alt="works"
            className={styles.gallery}
          />
          <img
            src={getImageUrl("works/PowerStroke.svg")}
            alt="works"
            className={styles.gallery2}
          />
          <img
            src={getImageUrl("works/YinYan.svg")}
            alt="works"
            className={styles.gallery3}
          />
          <img
            src={getImageUrl("works/logos-Nombre.svg")}
            alt="works"
            className={styles.gallery4}
          />
        </div>
      </div>
    </section>
  );
};
