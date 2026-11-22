import { useScrollReveal } from '../hooks/useScrollReveal';

/* GitHub SVG icon */
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function Projects({ projects, roles, activeRole, setActiveRole }) {
  const ref = useScrollReveal();

  const visible =
    activeRole === 'all'
      ? projects
      : projects.filter((p) => p.category === activeRole);

  return (
    <section id="projects" className="section projects">
      <div className="container reveal-element" ref={ref}>
        <div className="section-header-flex">
          <h2 className="section-title">
            <span className="section-number">03.</span> Featured Projects
          </h2>

          {/* In-section Role Filter Controls */}
          <div className="section-role-filter" role="tablist" aria-label="Filter projects by category">
            {roles.map((r) => (
              <button
                key={r.id}
                role="tab"
                className={`section-role-pill${activeRole === r.id ? ' active' : ''}`}
                onClick={() => setActiveRole(r.id)}
                aria-selected={activeRole === r.id}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {visible.length === 0 && (
          <p className="projects-empty">No projects found in this category.</p>
        )}

        <div className="projects-grid">
          {visible.map((project, idx) => (
            <article
              key={project.title}
              className="project-card"
              style={{ '--i': idx }}
            >
              {/* Category indicator */}
              <div className="project-card-top">
                <span className={`project-cat-dot ${project.category}`} aria-hidden="true" />
                <span className="project-cat-label">
                  {project.category === 'software-ai' ? 'Software & GenAI' : 'ECE & Hardware'}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {project.bullets && project.bullets.length > 0 && (
                <ul className="project-bullets">
                  {project.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}

              <div className="project-tech">
                {project.technologies.map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>

              <div className="project-links">
                {project.repoUrl ? (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GitHubIcon /> GitHub
                  </a>
                ) : null}
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalIcon /> Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
