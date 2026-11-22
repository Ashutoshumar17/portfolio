import { useScrollReveal } from '../hooks/useScrollReveal';

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
);
const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
);
const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default function Contact({ config }) {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section contact">
      <div className="container reveal-element" ref={ref}>
        <h2 className="section-title">
          <span className="section-number">05.</span> Get in Touch
        </h2>
        <p className="contact-intro">
          I'm currently seeking internship and placement opportunities in Software Development,
          Generative AI, and Core Electronics / VLSI Design. Let's connect!
        </p>

        <div className="contact-cards">
          {config.email && (
            <a href={`mailto:${config.email}`} className="contact-card">
              <MailIcon />
              <span className="contact-card-label">Personal Email</span>
              <span className="contact-card-value">{config.email}</span>
            </a>
          )}
          {config.collegeEmail && (
            <a href={`mailto:${config.collegeEmail}`} className="contact-card">
              <MailIcon />
              <span className="contact-card-label">College Email</span>
              <span className="contact-card-value">{config.collegeEmail}</span>
            </a>
          )}
          {config.phone && (
            <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="contact-card">
              <PhoneIcon />
              <span className="contact-card-label">Phone</span>
              <span className="contact-card-value">{config.phone}</span>
            </a>
          )}
          {config.github && (
            <a href={config.github} target="_blank" rel="noopener noreferrer" className="contact-card">
              <GitHubIcon />
              <span className="contact-card-label">GitHub</span>
              <span className="contact-card-value">Ashutoshkumar17</span>
            </a>
          )}
          {config.linkedin && (
            <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <LinkedInIcon />
              <span className="contact-card-label">LinkedIn</span>
              <span className="contact-card-value">ashutosh-kumar</span>
            </a>
          )}
          {config.location && (
            <div className="contact-card contact-card-static">
              <MapPinIcon />
              <span className="contact-card-label">Location</span>
              <span className="contact-card-value">{config.location}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
