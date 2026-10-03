import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Location } from './components/Location';
import { Navbar } from './components/Navbar';
import { PlantProcess } from './components/PlantProcess';
import { Products } from './components/Products';
import { Quality } from './components/Quality';
import { WhatsAppButton } from './components/WhatsAppButton';
import { WhyChooseUs } from './components/WhyChooseUs';

function App() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SATYABATI STONE WORK',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kendeijuri, Deogarh',
      addressLocality: 'Deogarh',
      addressRegion: 'Odisha',
      postalCode: '768121',
      addressCountry: 'IN',
    },
    telephone: '+91 9437457722',
    areaServed: 'Deogarh, Odisha',
    description:
      'SATYABATI STONE WORK is a stone crusher and aggregate production plant located at Kendeijuri, Deogarh, Odisha.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <PlantProcess />
        <Products />
        <Quality />
        <Gallery />
        <WhyChooseUs />
        <Location />
        <Contact />

        <section className="section final-cta">
          <div className="container final-cta-box">
            <p className="section-tag">Need aggregates?</p>
            <h2>Looking for Reliable Stone Aggregates in Deogarh?</h2>
            <h3>SATYABATI STONE WORK</h3>
            <p>Kendeijuri, Deogarh, Odisha – 768121</p>
            <p className="final-call">Call: 9437457722</p>
            <div className="contact-actions">
              <a href="tel:+919437457722" className="btn btn-primary">
                Call Now
              </a>
              <a
                href="https://wa.me/919437457722?text=Hello%20SATYABATI%20STONE%20WORK%2C%20I%20would%20like%20to%20enquire%20about%20your%20stone%20aggregate%20products."
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                WhatsApp Us
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=SATYABATI+STONE+WORK,+Kendeijuri,+Deogarh,+Odisha+768121"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
