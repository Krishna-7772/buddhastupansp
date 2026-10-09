import React, { useRef, useState } from 'react';
import { SITE_MEDIA } from '../data/mediaManifest';
import { EvidenceBadge } from './EvidenceBadge';

export const VideoExperience = () => {
  const videoRef = useRef(null);
  const [, setIsPlaying] = useState(false);

  return (
    <section id="video-tour" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <span className="section-kicker">Section 08 — On-Site Video Documentation</span>
        <h2>Cinematic Field Documentation: Video Experience</h2>
        <p className="section-subtitle">
          Direct moving-image footage captured on location at the Sopara Buddhist Stupa, documenting the spatial relationship between the main brick mound, the subsidiary votive plinths, and the serene Konkan landscape.
        </p>

        {/* Video Player Card */}
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-strong)',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)'
        }}>
          
          {/* Video Container */}
          <div style={{
            position: 'relative',
            backgroundColor: '#0F0E0E',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: '640px',
            overflow: 'hidden'
          }}>
            <video
              ref={videoRef}
              src={SITE_MEDIA.heroVideo.src}
              poster={SITE_MEDIA.heroVideo.poster}
              preload="metadata"
              controls
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              style={{
                width: '100%',
                maxHeight: '620px',
                objectFit: 'contain',
                display: 'block'
              }}
            >
              Your browser does not support HTML5 video playback.
            </video>
          </div>

          {/* Video Metadata & Context Panel */}
          <div style={{
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            backgroundColor: 'var(--bg-card)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--terracotta)' }}>
                  Field Recording
                </span>
                <EvidenceBadge type="primary" />
              </div>

              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {SITE_MEDIA.heroVideo.title}
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {SITE_MEDIA.heroVideo.caption}
              </p>
            </div>

            {/* Technical & Observational Details */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '3px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)'
            }}>
              <div>
                <strong>Location:</strong> Gomesali, Nalasopara West (Palghar District, Maharashtra)
              </div>
              <div>
                <strong>GPS Reference:</strong> Lat 19.414° N, Long 72.795° E
              </div>
              <div>
                <strong>Observational Note:</strong> Notice the circular terrace foundation, ancient brick masonry profile, and the alignment of surrounding votive stupas in the lawn.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
