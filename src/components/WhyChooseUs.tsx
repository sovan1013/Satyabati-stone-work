const reasons = [
  'Quality-focused production',
  'Reliable material supply',
  'Professional operations',
  'Construction-focused aggregates',
  'Local presence in Odisha',
  'Customer-oriented service',
];

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading center">
          <p className="section-tag">Why Choose Us</p>
          <h2>Why Choose SATYABATI STONE WORK?</h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article key={reason} className="reason-card">
              <div className="reason-icon" aria-hidden="true">✓</div>
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
