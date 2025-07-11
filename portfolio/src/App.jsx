import styles from './App.module.css';
import {Hero} from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'; // ✅ match case exactly

import Skills from "./components/Skills/skills";

import Projects from './components/Projects/Projects';
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
