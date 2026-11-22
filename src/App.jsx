import { useState } from 'react';
import CONFIG from './config';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeRole, setActiveRole] = useState('all');

  return (
    <div className="app">
      <Navbar
        roles={CONFIG.roles}
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        name={CONFIG.personal.name}
      />
      <main>
        <Hero config={CONFIG.personal} />
        <About config={CONFIG.about} />
        <Skills skills={CONFIG.skills} activeRole={activeRole} />
        <Projects
          projects={CONFIG.projects}
          roles={CONFIG.roles}
          activeRole={activeRole}
          setActiveRole={setActiveRole}
        />
        {CONFIG.experience.enabled && (
          <Experience experience={CONFIG.experience} activeRole={activeRole} />
        )}
        <Education
          education={CONFIG.education}
          certifications={CONFIG.certifications}
        />
        <Contact config={CONFIG.personal} />
      </main>
      <Footer config={CONFIG.personal} />
    </div>
  );
}
