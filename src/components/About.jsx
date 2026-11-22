import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About({ config }) {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container reveal-element" ref={ref}>
        <h2 className="section-title">
          <span className="section-number">01.</span> Architectural Overview
        </h2>

        <div className="about-grid-clean">
          <div className="about-text">
            {config.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about-quick-specs">
            <div className="quick-spec-card">
              <span className="spec-label">Education</span>
              <span className="spec-value">B.Tech ECE, VIT Chennai</span>
            </div>
            <div className="quick-spec-card">
              <span className="spec-label">Graduation</span>
              <span className="spec-value">May 2028</span>
            </div>
            <div className="quick-spec-card">
              <span className="spec-label">Primary Domains</span>
              <span className="spec-value">GenAI · Software · VLSI</span>
            </div>
            <div className="quick-spec-card">
              <span className="spec-label">Location</span>
              <span className="spec-value">Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
