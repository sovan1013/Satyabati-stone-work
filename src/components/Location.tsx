export function Location() {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=SATYABATI+STONE+WORK,+Kendeijuri,+Deogarh,+Odisha+768121';

  return (
    <section id="location" className="section muted-section">
      <div className="container">
        <div className="section-heading center">
          <p className="section-tag">Location</p>
          <h2>Find Us</h2>
        </div>

        <div className="location-panel">
          <div className="location-copy">
            <h3>SATYABATI STONE WORK</h3>
            <p>Kendeijuri, Deogarh, Odisha – 768121, India</p>
            <a href={directionsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Get Directions
            </a>
          </div>

          <div className="map-frame" aria-label="Location map preview">
            <iframe
              title="SATYABATI STONE WORK map"
              src="https://www.google.com/maps?q=Kendeijuri%2C%20Deogarh%2C%20Odisha%20768121&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
