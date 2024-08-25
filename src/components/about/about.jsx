import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="About">
      <div className={styles.titleContainer}>
        <p className={styles.miniTitle}>ABOUT ME</p>
        <h1 className={styles.title}>Who am I?</h1>
        <p className={styles.paraContent}>
          University student studying software development in Panama. I have 0
          work experience, but 1000 experience in doing the best job.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.borderCard}>
          <div></div>
          <h1 className={styles.tecno}>FrontEnd</h1>
          <p className={styles.desc}>
            It is one of my strengths, I have experience in making elegant web
            pages with their necessary functions.
          </p>
          <p className={styles.num}>01</p>
        </div>
        <div className={styles.borderCard}>
          <h1 className={styles.tecno2}>BackEnd</h1>
          <p className={styles.desc}>
            I know the basics and several libraries for database use as well.
          </p>
          <p className={styles.num}>02</p>
        </div>
        <div className={styles.borderCard}>
          <h1 className={styles.tecno3}>Database</h1>
          <p className={styles.desc}>
            Knowledge of databases such as PostgreSQL, MySQL and MongoDB.
          </p>
          <p className={styles.num}>03</p>
        </div>
        <div className={styles.borderCard}>
          <h1 className={styles.tecno4}>UX/UI Designer</h1>
          <p className={styles.desc}>
            I have experience in wireframe design research and interactive
            prototypes, always seeking to improve the user experience.
          </p>
          <p className={styles.num}>04</p>
        </div>
      </div>

      <div className={styles.logos}>
        <div className={styles.logosSlide}>
          <img src={getImageUrl("About/html.png")} alt="HTML" />
          <img src={getImageUrl("About/css.png")} alt="CSS" />
          <img src={getImageUrl("About/js.png")} alt="JS" />
          <img src={getImageUrl("About/react.png")} alt="REACT" />
          <img src={getImageUrl("About/node_js.png")} alt="NODE" />
          <img src={getImageUrl("About/mysql.png")} alt="MYSQL" />
          <img src={getImageUrl("About/python.png")} alt="PYTHON" />
          <img src={getImageUrl("About/git.png")} alt="GIT" />
          <img src={getImageUrl("About/figma.png")} alt="FIGMA" />
          <img src={getImageUrl("About/inkscape.png")} alt="INK" />
        </div>
        <div className={styles.logosSlide}>
          <img src={getImageUrl("About/html.png")} alt="HTML" />
          <img src={getImageUrl("About/css.png")} alt="CSS" />
          <img src={getImageUrl("About/js.png")} alt="JS" />
          <img src={getImageUrl("About/react.png")} alt="REACT" />
          <img src={getImageUrl("About/node_js.png")} alt="NODE" />
          <img src={getImageUrl("About/mysql.png")} alt="MYSQL" />
          <img src={getImageUrl("About/python.png")} alt="PYTHON" />
          <img src={getImageUrl("About/git.png")} alt="GIT" />
          <img src={getImageUrl("About/figma.png")} alt="FIGMA" />
          <img src={getImageUrl("About/inkscape.png")} alt="INK" />
        </div>
      </div>
    </section>
  );
};
