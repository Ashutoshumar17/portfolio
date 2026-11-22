import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills({ skills, activeRole }) {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container reveal-element" ref={ref}>
        <h2 className="section-title">
          <span className="section-number">02.</span> Skills &amp; Tools
        </h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([groupName, group]) => {
            const faded =
              activeRole !== 'all' && group.category !== activeRole;

            return (
              <div
                key={groupName}
                className={`skills-group${faded ? ' faded' : ''}`}
              >
                <h3 className="skills-group-title">
                  <span
                    className={`skills-dot ${group.category}`}
                    aria-hidden="true"
                  />
                  {groupName}
                </h3>
                <div className="skills-tags">
                  {group.items.map((s) => (
                    <span key={s.name} className="skill-tag">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
