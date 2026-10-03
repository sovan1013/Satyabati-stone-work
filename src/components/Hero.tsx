export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Stone Crusher & Aggregate Production</p>
          <h1>SATYABATI STONE WORK</h1>
          <h2>Quality Stone Aggregates for Construction & Infrastructure</h2>
          <p className="hero-description">
            Reliable stone aggregate production serving construction and infrastructure requirements from Deogarh, Odisha.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              View Our Products
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>

          <div className="hero-location" aria-label="Location information">
            <span aria-hidden="true">📍</span>
            <span>Kendeijuri, Deogarh, Odisha</span>
          </div>
        </div>
      </div>
    </section>
  );
}
