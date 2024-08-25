import React from "react";
import styles from "./worksCard.module.css";
import { getImageUrl } from "../../utils";

export const WorksCard = ({
  project: { title, imageSrc, description, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`image of ${title}`}
        className={styles.image}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank">
          Demo
        </a>
        <a href={source} className={styles.link} target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};
