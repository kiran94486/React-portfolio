import React from "react";
import { getimageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi , I'm Kiran Deep K</h1>
        <p className={styles.description}>
          I graduated in 2023 with an MCA degree. I am currently exploring
          different skills like data science and front-end development. Although
          I haven't secured a job yet, I am continuously learning and growing in
          these fields.
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:kiran.deep94486@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getimageUrl("hero/mypicbg.png")}
        alt="image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
