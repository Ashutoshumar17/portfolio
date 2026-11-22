import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience({ experience, activeRole }) {
  const ref = useScrollReveal();

  const visible =
    activeRole === 'all'
      ? experience.items
      : experience.items.filter((e) => e.category === activeRole);

  if (visible.length === 0) return null;

  return (
    <section id="experience" className="section experience">
      <div className="container reveal-element" ref={ref}>
        <h2 className="section-title">
          <span className="section-number">04.</span> Experience
        </h2>

        <div className="experience-timeline">
          {visible.map((exp, i) => (
            <div key={i} className="experience-card">
              <div className="exp-dot" aria-hidden="true" />
              <div className="exp-content">
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-period">{exp.period}</p>
                {exp.bullets && (
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
