import { useEffect, useMemo, useState } from 'react';
import { galleryImages } from '../data/galleryData';

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentImage = galleryImages[currentIndex];

  useEffect(() => {
    if (isPaused || galleryImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const counterLabel = useMemo(
    () => `${currentIndex + 1} / ${galleryImages.length}`,
    [currentIndex],
  );

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchStartX = event.touches[0].clientX;
    (event.currentTarget as HTMLDivElement).dataset.touchStartX = String(touchStartX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = Number((event.currentTarget as HTMLDivElement).dataset.touchStartX || 0);
    const diff = event.changedTouches[0].clientX - startX;

    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  };

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-heading center">
          <p className="section-tag">Plant Gallery</p>
          <h2>SATYABATI STONE WORK</h2>
        </div>

        <div className="gallery-wrapper">
          <div
            className="gallery-frame"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={currentImage.src}
              alt={currentImage.title}
              loading="lazy"
              className="gallery-image"
              onClick={() => setIsOpen(true)}
            />

            <div className="gallery-controls">
              <button type="button" aria-label="Previous image" onClick={prevImage}>
                ←
              </button>
              <span aria-live="polite">{counterLabel}</span>
              <button type="button" aria-label="Next image" onClick={nextImage}>
                →
              </button>
            </div>

            <div className="gallery-caption">
              <h3>{currentImage.title}</h3>
              <p>{currentImage.description}</p>
            </div>

            <button
              type="button"
              className="gallery-fullscreen"
              aria-label="Open image"
              onClick={() => setIsOpen(true)}
            >
              View Full Screen
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Plant gallery image viewer">
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close image"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <img src={currentImage.src} alt={currentImage.title} className="lightbox-image" />
          <div className="lightbox-caption">
            <h3>{currentImage.title}</h3>
            <p>{currentImage.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
