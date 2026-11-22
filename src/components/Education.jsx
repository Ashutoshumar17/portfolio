import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education({ education, certifications }) {
  const ref = useScrollReveal();

  return (
    <section id="education" className="section education">
      <div className="container reveal-element" ref={ref}>
        <h2 className="section-title">
          <span className="section-number">04.</span> Education &amp; Certifications
        </h2>

        <div className="education-list">
          {education.map((edu, i) => (
            <div key={i} className="education-card">
              <div className="edu-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6"/>
                  <path d="M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 0 3 3 6 3s6-3 6-3v-5"/>
                </svg>
              </div>
              <div className="edu-info">
                <div className="edu-header">
                  <h3 className="edu-institution">{edu.institution}</h3>
                  {edu.gpa && (
                    <span className="edu-gpa-badge">
                      CGPA: <strong>{edu.gpa}</strong>
                    </span>
                  )}
                </div>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-period">{edu.period}</p>
                {edu.details && edu.details.length > 0 && (
                  <ul className="edu-details-list">
                    {edu.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {certifications && certifications.length > 0 && (
          <div className="certifications-block">
            <h3 className="certifications-heading">Certifications</h3>
            <div className="cert-cards">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cert-icon">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
