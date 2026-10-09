import React from 'react';
import { LOCATION_DATA } from '../data/locationData';
import { SITE_MEDIA } from '../data/mediaManifest';
import { CitationTag } from './CitationTag';
import { EvidenceBadge } from './EvidenceBadge';
import { MapPin, Navigation, ExternalLink, Compass, Headphones, ZoomIn } from 'lucide-react';

export const LocationSection = ({ onSelectSource, onOpenImage }) => {
  return (
    <section id="location" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <span className="section-kicker">Section 11 — Geographical Setting & Visitor Orientation</span>
        <h2>The Stupa's Geographical Setting & Visitor Orientation</h2>
        <p className="section-subtitle">
          Located in Gas / Gomesali village, Nalasopara (West), Palghar District, Maharashtra. A practical guide for visitors, students, and heritage explorers.
        </p>

        {/* Location & Map Signboard Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
          marginBottom: '3rem'
        }}>
          
          {/* Left Column: Geographic Context & Transit */}
          <div>
            
            {/* Coordinates & Site Card */}
            <div className="archive-card" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--terracotta)' }}>
                  Verified Location Reference
                </span>
                <EvidenceBadge type="primary" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <MapPin size={20} color="var(--terracotta)" />
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: 0 }}>
                  {LOCATION_DATA.generalArea}
                </h3>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--stone)', marginBottom: '0.75rem' }}>
                <strong>GPS Site Marker:</strong> Lat 19.414° N, Long 72.795° E (Archaeological Reserve)
                <CitationTag sourceId="asi-mumbai-circle" onSelectSource={onSelectSource} />
              </p>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {LOCATION_DATA.geographicalContext}
              </p>

              {/* External Maps Links */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={LOCATION_DATA.externalLinks.osm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.82rem', padding: '0.5rem 0.85rem' }}
                >
                  <span>Open in OpenStreetMap</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={LOCATION_DATA.externalLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.82rem', padding: '0.5rem 0.85rem' }}
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Regional Transit & Access */}
            <div className="archive-card" style={{ backgroundColor: 'var(--bg-card)', marginBottom: '1.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                How to Reach the Stupa
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {LOCATION_DATA.connectivity.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <Navigation size={15} color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{c.mode}: </strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart Audio Guide Signboard Callout */}
            <div style={{
              backgroundColor: 'var(--terracotta-light)',
              border: '1px solid var(--terracotta-border)',
              borderRadius: '4px',
              padding: '1.25rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start'
            }}>
              <Headphones size={22} color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--terracotta-hover)', margin: '0 0 0.35rem 0', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  On-Site Trilingual Audio Guide
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--stone)', margin: 0, lineHeight: 1.55 }}>
                  The site precinct features an active smart audio guide (in Marathi, Hindi, and English) installed for visitors. You can scan the on-site QR codes displayed near the entrance to listen to guided commentary as you walk around the stupa drum.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Genuine On-Site Interpretive Map Signboard Photo */}
          <div>
            <div 
              className="archive-card" 
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '1.25rem',
                cursor: onOpenImage ? 'pointer' : 'default',
                marginBottom: '1.5rem'
              }}
              onClick={() => onOpenImage && onOpenImage(SITE_MEDIA.signageAndContext[0])}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  On-Site Interpretive Signage
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Gomesali Reserve
                </span>
              </div>

              <div style={{
                position: 'relative',
                borderRadius: '3px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '0.75rem'
              }}>
                <img
                  src={SITE_MEDIA.signageAndContext[0].src}
                  alt="Official on-site interpretive signboard map for audio guide at Sopara Stupa"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '340px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />

                {onOpenImage && (
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    padding: '5px',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--stone)'
                  }}>
                    <ZoomIn size={14} color="var(--terracotta)" />
                    <span>Inspect Signboard Map</span>
                  </div>
                )}
              </div>

              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', margin: '0 0 0.35rem 0' }}>
                {SITE_MEDIA.signageAndContext[0].title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {SITE_MEDIA.signageAndContext[0].caption}
              </p>
            </div>

            {/* Offline SVG Schematic Plan */}
            <div className="archive-card" style={{ backgroundColor: 'var(--bg-card)', padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--stone)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Precision Site Schematic
                </span>
                <Compass size={16} color="var(--stone)" />
              </div>

              <div style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '3px',
                padding: '0.75rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <svg viewBox="0 0 400 240" style={{ width: '100%', height: 'auto', maxHeight: '200px' }}>
                  <rect x="10" y="10" width="380" height="220" fill="#F7F3EB" stroke="#DDD6C9" strokeWidth="1.5" rx="3" />
                  <g transform="translate(355, 35)">
                    <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#CDC4B4" />
                    <path d="M 0 -10 L 3 0 L 0 10 L -3 0 Z" fill="#3D3935" />
                    <path d="M 0 -10 L 3 0 L 0 0 Z" fill="#A8482A" />
                    <text x="0" y="-12" textAnchor="middle" fontSize="8" fontWeight="700" fill="#A8482A">N</text>
                  </g>
                  <circle cx="190" cy="120" r="75" fill="#EAE1D1" stroke="#3D3935" strokeWidth="1.2" />
                  <circle cx="190" cy="120" r="50" fill="#DDD0BC" stroke="#3D3935" strokeWidth="1.5" />
                  <rect x="180" y="90" width="20" height="60" fill="#F4EDE4" stroke="#A8482A" strokeWidth="1.2" strokeDasharray="3 2" />
                  <circle cx="190" cy="120" r="5" fill="#C9982E" />
                  <text x="190" y="115" textAnchor="middle" fill="#2C2A28" fontSize="8" fontWeight="700">Main Stupa Drum</text>
                  <circle cx="100" cy="140" r="14" fill="#DDD0BC" stroke="#3D3935" strokeWidth="1" />
                  <circle cx="85" cy="115" r="12" fill="#DDD0BC" stroke="#3D3935" strokeWidth="1" />
                  <text x="75" y="95" fill="#5C554B" fontSize="7" fontWeight="600">Votive Stupas</text>
                  <path d="M 370 150 L 300 150" stroke="#736E66" strokeWidth="2" strokeDasharray="3 2" />
                  <text x="335" y="145" textAnchor="middle" fill="#3D3935" fontSize="7" fontWeight="600">Access Path</text>
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
