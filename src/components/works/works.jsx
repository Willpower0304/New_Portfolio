import React from "react";
import styles from "./works.module.css";
import projects from "../../data/projects.json";
import { WorksCard } from "./worksCard";

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
    </section>
  );
};
