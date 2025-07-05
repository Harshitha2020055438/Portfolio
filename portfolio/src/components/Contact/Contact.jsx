import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";
const Contact = () => {
  return (
   <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src="/assets/contact/emailIcon.png" alt="Email icon" />
            <a href="mailto:harshithareddyalugubelli@gmail.com">harshithareddyalugubelli@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src="/assets/contact/linkedinIcon.png" alt="linkedin icon" />
            <a href="https://www.linkedin.com/in/alugubelli-harshitha-3b6b48287">linkedin.com</a>
        </li>
        <li className={styles.link}>
            <img src="/assets/contact/githubIcon.png" alt="github icon" />
            <a href="https://www.github.com/Harshitha202005438">github.com</a>
        </li>
    </ul>
   </footer>
  )
}

export default Contact
