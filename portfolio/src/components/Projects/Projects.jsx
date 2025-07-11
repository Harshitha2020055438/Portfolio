import projectsData from "../../data/projects.json"; 
import ProjectCard from './ProjectCard';
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
             projectsData.map((project, id) => (
                <ProjectCard key={id} project={project} />
             ))
            }
        </div>
    </section>
  );
}

export default Projects;
