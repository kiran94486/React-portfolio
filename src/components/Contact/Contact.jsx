import React from "react";
import styles from "./Contact.module.css";
import { getimageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getimageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:kiran.deep94486@gmail.com">
            kiran.deep94486@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getimageUrl("contact/linkedinIcon.png")} alt="Email Icon" />
          <a href="https://www.linkedin.com/in/kirandeep2000/">
            linkedin.com/kirandeep
          </a>
        </li>
        <li className={styles.link}>
          <img src={getimageUrl("contact/githubIcon.png")} alt="Email Icon" />
          <a href="https://github.com/kiran94486">github.com/kirandeep</a>
        </li>
      </ul>
    </footer>
  );
};
