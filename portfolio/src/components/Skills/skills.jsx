import React from 'react';
import skillsData from "../../data/skills.json"; 
import styles from "./skills.module.css";

const Skills = () => { 
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {
            skillsData.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skills;
