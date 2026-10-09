import React, { useState, useEffect, useCallback } from 'react';
import { ALL_GALLERY_PHOTOS } from '../data/mediaManifest';
import { GALLERY_ITEMS } from '../data/galleryData';
import { X, ZoomIn, ChevronLeft, ChevronRight, MapPin, Image as ImageIcon } from 'lucide-react';

export const DocumentationGallery = ({ activeModalImage, onCloseModalImage }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Combine site photos with archival schematics for a comprehensive gallery
  const combinedItems = [
    ...ALL_GALLERY_PHOTOS.map(p => ({ ...p, isPhoto: true })),
    ...GALLERY_ITEMS.map(g => ({ ...g, isSchematic: true, src: null }))
  ];

  const categories = [
    { id: 'all', label: 'All Curated Records' },
    { id: 'Sculptural Evidence', label: 'Sculptural Evidence' },
    { id: 'Architectural Complex', label: 'Monument & Drum Views' },
    { id: 'Site Interpretation', label: 'Site Signage & Map' },
    { id: 'Archival Plans & Sections', label: 'Archival Schematics (1882)' }
  ];

  const filteredItems = combinedItems.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'Architectural Complex') {
      return item.category === 'Architectural Complex' || item.category === 'Structural Masonry' || item.category === 'Landscape & Environment';
    }
    return item.category === selectedCategory;
  });

  const matchedExternalIndex = activeModalImage 
    ? filteredItems.findIndex(i => i.id === activeModalImage.id || i.src === activeModalImage.src) 
    : -1;

  const effectiveIndex = lightboxIndex !== null 
    ? lightboxIndex 
    : (matchedExternalIndex !== -1 ? matchedExternalIndex : null);

  const activeLightboxItem = effectiveIndex !== null && filteredItems[effectiveIndex] 
    ? filteredItems[effectiveIndex] 
    : activeModalImage;

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
    if (onCloseModalImage) onCloseModalImage();
  }, [onCloseModalImage]);

  const handlePrev = (e) => {
    e.stopPropagation();
    const curr = effectiveIndex !== null ? effectiveIndex : 0;
    setLightboxIndex((curr - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const curr = effectiveIndex !== null ? effectiveIndex : 0;
    setLightboxIndex((curr + 1) % filteredItems.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeLightboxItem) return;
      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowRight') {
        const curr = effectiveIndex !== null ? effectiveIndex : 0;
        setLightboxIndex((curr + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        const curr = effectiveIndex !== null ? effectiveIndex : 0;
        setLightboxIndex((curr - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxItem, effectiveIndex, filteredItems.length, handleCloseLightbox]);

  // Lock body scroll when lightbox modal is open
  useEffect(() => {
    if (activeLightboxItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLightboxItem]);

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <span className="section-kicker">Section 12 — Curated Visual Archive</span>
        <h2>Photographic & Documentary Gallery</h2>
        <p className="section-subtitle">
          Authentic field photographs of the Sopara Stupa and on-site stone carvings paired with nineteenth-century excavation plates and archival architectural schematics.
        </p>

        {/* Filter Categories Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map(c => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 600,
                padding: '0.45rem 1rem',
                borderRadius: '3px',
                border: selectedCategory === c.id ? '1px solid var(--terracotta)' : '1px solid var(--border-subtle)',
                backgroundColor: selectedCategory === c.id ? 'var(--terracotta)' : 'var(--bg-card)',
                color: selectedCategory === c.id ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '1.75rem'
        }}>
          {filteredItems.map((item, idx) => (
            <div
              key={item.id || idx}
              className="archive-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.25rem',
                cursor: 'pointer',
                backgroundColor: 'var(--bg-card)'
              }}
              onClick={() => setLightboxIndex(idx)}
            >
              <div>
                {/* Image Viewport */}
                <div style={{
                  height: '220px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '2px',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div style={{ padding: '1rem', textAlign: 'center' }}>
                      <ImageIcon size={32} color="var(--terracotta)" style={{ margin: '0 auto 0.5rem auto' }} />
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--stone)' }}>
                        {item.title}
                      </span>
                    </div>
                  )}

                  {/* GPS Tag overlay if photo */}
                  {item.lat && (
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      backgroundColor: 'rgba(28, 27, 26, 0.85)',
                      color: '#FAF7F0',
                      padding: '3px 8px',
                      borderRadius: '2px',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <MapPin size={10} color="#E8A388" />
                      <span>{item.lat}</span>
                    </div>
                  )}

                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    padding: '5px',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <ZoomIn size={14} color="var(--terracotta)" />
                  </div>
                </div>

                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>
                  {item.category}
                </span>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.18rem', marginTop: '0.2rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  {item.caption}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span>{item.date || "Field Documentation"}</span>
                <span style={{ fontStyle: 'italic' }}>
                  {item.isPhoto ? "Genuine Site Photo" : "Archival Schematic"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Lightbox / Image Viewer */}
        {activeLightboxItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 14, 14, 0.92)',
              backdropFilter: 'blur(8px)',
              zIndex: 350,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem'
            }}
            onClick={handleCloseLightbox}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-strong)',
                borderRadius: '4px',
                maxWidth: '920px',
                width: '100%',
                maxHeight: '92vh',
                overflowY: 'auto',
                boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Header Bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-secondary)'
              }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {activeLightboxItem.category} • Record {(effectiveIndex !== null ? effectiveIndex : 0) + 1} of {filteredItems.length}
                  </span>
                  <h3 id="lightbox-title" style={{ fontSize: '1.3rem', margin: '0.2rem 0 0 0' }}>
                    {activeLightboxItem.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={handlePrev}
                    style={{
                      background: 'none',
                      border: '1px solid var(--border-strong)',
                      borderRadius: '3px',
                      padding: '0.35rem 0.6rem',
                      cursor: 'pointer',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2px',
                      fontSize: '0.78rem'
                    }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} /> Prev
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    style={{
                      background: 'none',
                      border: '1px solid var(--border-strong)',
                      borderRadius: '3px',
                      padding: '0.35rem 0.6rem',
                      cursor: 'pointer',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2px',
                      fontSize: '0.78rem'
                    }}
                    aria-label="Next image"
                  >
                    Next <ChevronRight size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseLightbox}
                    style={{
                      background: 'none',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '3px',
                      padding: '0.35rem',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      marginLeft: '0.5rem'
                    }}
                    aria-label="Close image viewer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Lightbox Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Large Image Viewport */}
                <div style={{
                  backgroundColor: '#000000',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  maxHeight: '520px'
                }}>
                  {activeLightboxItem.src ? (
                    <img
                      src={activeLightboxItem.src}
                      alt={activeLightboxItem.title}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '520px',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                    />
                  ) : (
                    <div style={{ padding: '3rem', color: '#FFF', textAlign: 'center' }}>
                      <ImageIcon size={48} color="var(--terracotta)" style={{ margin: '0 auto 1rem auto' }} />
                      <p>{activeLightboxItem.title}</p>
                    </div>
                  )}
                </div>

                <p style={{ fontSize: '0.98rem', color: 'var(--text-primary)', lineHeight: 1.6, margin: 0 }}>
                  {activeLightboxItem.caption}
                </p>

                {/* Metadata Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '3px',
                  padding: '1rem 1.25rem',
                  fontSize: '0.85rem'
                }}>
                  {activeLightboxItem.lat && (
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'uppercase' }}>
                        GPS Verified Coordinate
                      </strong>
                      <span style={{ color: 'var(--text-primary)' }}>
                        {activeLightboxItem.lat}, {activeLightboxItem.lng}
                      </span>
                    </div>
                  )}

                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'uppercase' }}>
                      Category / Nature
                    </strong>
                    <span style={{ color: 'var(--text-primary)' }}>
                      {activeLightboxItem.category}
                    </span>
                  </div>

                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'uppercase' }}>
                      Site Jurisdiction
                    </strong>
                    <span style={{ color: 'var(--terracotta)' }}>
                      Gomesali / Gas, Nalasopara West (ASI Protected)
                    </span>
                  </div>

                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'uppercase' }}>
                      Research Aegis
                    </strong>
                    <span style={{ color: 'var(--text-primary)' }}>
                      University of Mumbai Research Documentation
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
