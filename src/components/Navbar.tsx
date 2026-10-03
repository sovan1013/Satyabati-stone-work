import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Plant', href: '#plant' },
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="SATYABATI STONE WORK home">
          <img src="/images/logo.svg" alt="SATYABATI STONE WORK logo" className="brand-logo" />
          <span className="brand-text">SATYABATI STONE WORK</span>
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-group ${menuOpen ? 'is-open' : ''}`} id="mobile-nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>

          <a className="call-now-button" href="tel:+919437457722" onClick={closeMenu}>
            Call Now
          </a>
        </div>
      </nav>
    </header>
  );
}
