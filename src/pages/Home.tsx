import { Hero } from '../components/Hero';
import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Education } from './Education';
import { Awards } from './Awards';
import { Contact } from './Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <div id='about'>
        <About />
      </div>
      <div id='experience'>
        <Experience />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='education'>
        <Education />
      </div>
      <div id='awards'>
        <Awards />
      </div>
      <Contact />
    </>
  );
};
