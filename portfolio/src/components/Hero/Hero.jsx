import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alugubelli Harshitha</h1>
        <p className={styles.description}>I'm a Full-Stack developer</p>
        <a href="mailto:harshithareddyalugubelli@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img 
  src="/assets/hero/heroImage.jpg"
  alt="Hero image of me"
  className={styles.heroImg}
/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
  </section>
  );
};
