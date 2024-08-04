import React from "react";
import { getimageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getimageUrl("about/aboutImage.png")}
          alt="Me  sitting with a laptop"
          className={styles.aboutimage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getimageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemtext}>
              <h1>Front-End Developer</h1>
              <p>
                I am a Front-end Developer.I have experiance in building
                websites and Optimizing sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getimageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemtext}>
              <h1>Back-End Developer</h1>
              <p>
                I also have experiance in building back-end systems and Api's
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getimageUrl("about/uiIcon.png")} alt="Ui icon" />
            <div className={styles.aboutItemtext}>
              <h1>Ui Designer</h1>
              <p>
                I also have a interest in Designing the Ui for the websites.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
