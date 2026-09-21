import React from "react";
import styles from "./worksCard.module.css";
import { getImageUrl } from "../../utils";

export const WorksCard = ({
  project: { title, imageSrc, description, demo, source },
}) => {
  const hasLinks = demo || source;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`image of ${title}`}
        className={styles.image}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {hasLinks && (
        <div className={styles.links}>
          {demo && (
            <a
              href={demo}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
          {source && (
            <a
              href={source}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          )}
        </div>
      )}
    </div>
  );
};