const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Plant', href: '#plant' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>SATYABATI STONE WORK</h3>
          <p>Kendeijuri, Deogarh, Odisha – 768121</p>
          <p>Phone: 9437457722</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 SATYABATI STONE WORK. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
