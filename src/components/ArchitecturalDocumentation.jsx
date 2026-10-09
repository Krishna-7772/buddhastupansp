import React, { useState } from 'react';
import { SITE_MEDIA } from '../data/mediaManifest';
import { ZoomIn, MapPin } from 'lucide-react';

export const ArchitecturalDocumentation = ({ onOpenImage }) => {
  const [activeTab, setActiveTab] = useState('structure'); // 'structure' | 'sculptures'

  return (
    <section id="architecture" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <span className="section-kicker">Section 05 — Architectural Documentation</span>
            <h2>Architectural & Sculptural Documentation</h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Direct photographic examination of the conserved brick drum, subsidiary votive stupas, and carved stone architectural fragments recovered at the Sopara site.
            </p>
          </div>

          {/* Tab Selector */}
          <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'var(--bg-primary)', padding: '4px', borderRadius: '4px', border: '1px solid var(--border-strong)', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setActiveTab('structure')}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                padding: '0.5rem 1rem',
                borderRadius: '3px',
                border: 'none',
                backgroundColor: activeTab === 'structure' ? 'var(--terracotta)' : 'transparent',
                color: activeTab === 'structure' ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Monumental Structure & Drum ({SITE_MEDIA.architecturalViews.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('sculptures')}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                padding: '0.5rem 1rem',
                borderRadius: '3px',
                border: 'none',
                backgroundColor: activeTab === 'sculptures' ? 'var(--terracotta)' : 'transparent',
                color: activeTab === 'sculptures' ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Stone Sculptures & Fragments ({SITE_MEDIA.sculptures.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Structural & Environmental Views */}
        {activeTab === 'structure' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '1.75rem'
          }}>
            {SITE_MEDIA.architecturalViews.map((item) => (
              <div
                key={item.id}
                className="archive-card"
                style={{
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-card)',
                  cursor: onOpenImage ? 'pointer' : 'default'
                }}
                onClick={() => onOpenImage && onOpenImage(item)}
              >
                <div>
                  <div style={{
                    position: 'relative',
                    height: '240px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    marginBottom: '0.85rem',
                    backgroundColor: 'var(--bg-secondary)'
                  }}>
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

                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      backgroundColor: 'rgba(28, 27, 26, 0.85)',
                      color: '#FAF7F0',
                      padding: '3px 8px',
                      borderRadius: '2px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <MapPin size={10} color="#E8A388" />
                      <span>{item.lat}</span>
                    </div>

                    {onOpenImage && (
                      <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        padding: '5px',
                        borderRadius: '2px'
                      }}>
                        <ZoomIn size={14} color="var(--terracotta)" />
                      </div>
                    )}
                  </div>

                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {item.category}
                  </span>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', margin: '0.25rem 0 0.5rem 0', color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Discovered Sculptures & Architectural Stone Members */}
        {activeTab === 'sculptures' && (
          <div>
            <div style={{
              backgroundColor: 'var(--bg-card)',
              borderLeft: '4px solid var(--terracotta)',
              padding: '1.25rem 1.5rem',
              borderRadius: '2px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                Archaeological Significance of Recovered Stone Members
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                In addition to the central brick stupa mound, multiple carved stone architectural members—including a weight-bearing Yaksha bracket, carved relief balustrade slabs with pillar motifs, and umbrella shaft socket stones—are preserved on site. These fragments provide tangible material evidence of decorative stone railings (vedika) and gateways associated with the complex.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '1.75rem'
            }}>
              {SITE_MEDIA.sculptures.map((item) => (
                <div
                  key={item.id}
                  className="archive-card"
                  style={{
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: 'var(--bg-card)',
                    cursor: onOpenImage ? 'pointer' : 'default'
                  }}
                  onClick={() => onOpenImage && onOpenImage(item)}
                >
                  <div>
                    <div style={{
                      position: 'relative',
                      height: '240px',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      marginBottom: '0.85rem',
                      backgroundColor: 'var(--bg-secondary)'
                    }}>
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

                      <div style={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        backgroundColor: 'rgba(28, 27, 26, 0.85)',
                        color: '#FAF7F0',
                        padding: '3px 8px',
                        borderRadius: '2px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <MapPin size={10} color="#E8A388" />
                        <span>{item.lat}</span>
                      </div>

                      {onOpenImage && (
                        <div style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          padding: '5px',
                          borderRadius: '2px'
                        }}>
                          <ZoomIn size={14} color="var(--terracotta)" />
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {item.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {item.date}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', margin: '0.2rem 0 0.5rem 0', color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
