import { useState, useEffect } from 'react';

export default function Navbar({ roles, activeRole, setActiveRole, name }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { label: 'About',     href: '#about' },
    { label: 'Skills',    href: '#skills' },
    { label: 'Projects',  href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact',   href: '#contact' },
  ];

  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#" className="navbar-logo" aria-label="Back to top">
          {initials}
        </a>

        {/* Desktop + Mobile links */}
        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}

          {/* Role filter pills */}
          <div className="role-filter" role="group" aria-label="Filter by role">
            {roles.map((r) => (
              <button
                key={r.id}
                className={`role-pill${activeRole === r.id ? ' active' : ''}`}
                onClick={() => { setActiveRole(r.id); setMenuOpen(false); }}
                aria-pressed={activeRole === r.id}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`navbar-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
