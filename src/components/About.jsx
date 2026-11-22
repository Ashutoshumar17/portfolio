import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About({ config }) {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container reveal-element" ref={ref}>
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>

        <div className="about-grid">
          <div className="about-text">
            {config.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-value">6th</span>
              <span className="highlight-label">Semester</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-value">8+</span>
              <span className="highlight-label">Projects</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-value">3</span>
              <span className="highlight-label">Focus Areas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
