type Highlight = {
  title: string;
  text: string;
  icon: string;
};

const highlights: Highlight[] = [
  {
    title: 'Quality Aggregates',
    text: 'Consistent and reliable aggregate materials for construction requirements.',
    icon: '🏗️',
  },
  {
    title: 'Reliable Supply',
    text: 'Focused on dependable material availability and customer requirements.',
    icon: '🚚',
  },
  {
    title: 'Strategic Location',
    text: 'Located at Kendeijuri, Deogarh, Odisha.',
    icon: '📍',
  },
  {
    title: 'Customer Focus',
    text: 'Committed to maintaining quality and dependable service.',
    icon: '🤝',
  },
];

export function Highlights() {
  return (
    <section className="section muted-section">
      <div className="container">
        <div className="section-heading center">
          <p className="section-tag">Key Highlights</p>
          <h2>Built for dependable aggregate supply</h2>
        </div>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <div className="card-icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
