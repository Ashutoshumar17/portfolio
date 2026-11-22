import { useState, useEffect } from 'react';
import Lenis from 'lenis';
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

  // Silk Momentum Scrolling via Lenis (lerp: 0.075)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

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
