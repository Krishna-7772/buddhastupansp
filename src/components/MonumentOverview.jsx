import React from 'react';
import { AT_A_GLANCE, UNDERSTANDING_MONUMENT } from '../data/monumentOverview';
import { SITE_MEDIA } from '../data/mediaManifest';
import { CitationTag } from './CitationTag';
import { EvidenceBadge } from './EvidenceBadge';
import { CheckCircle2, AlertCircle, Layers, Compass, MapPin, ZoomIn } from 'lucide-react';

export const MonumentOverview = ({ onSelectSource, onOpenEvidenceKey, onOpenImage }) => {
  return (
    <section id="overview" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Editorial Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <span className="section-kicker">Section 02 — Monument Overview</span>
              <h2>The Physical Monument at Nala Sopara</h2>
            </div>
            <button
              onClick={onOpenEvidenceKey}
              type="button"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--terracotta)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.25rem 0'
              }}
            >
              <span>Evidence Verification Key</span>
              <Compass size={14} />
            </button>
          </div>

          <p className="section-subtitle">
            A physical monument in Gas village, Nalasopara West, preserving two millennia of Buddhist architectural history along the ancient Konkan maritime trade network.
          </p>
        </div>

        {/* Feature Visual Grid: Monument Photograph on Left, Primary Records on Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(2rem, 4vw, 3.5rem)',
          alignItems: 'start',
          marginBottom: '4.5rem'
        }}>
          
          {/* Left: Authentic Site Photograph with Caption & GPS */}
          <div>
            <div 
              style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid var(--border-strong)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                backgroundColor: 'var(--bg-secondary)',
                cursor: onOpenImage ? 'pointer' : 'default'
              }}
              onClick={() => onOpenImage && onOpenImage(SITE_MEDIA.monumentOverview.primary)}
            >
              <img
                src={SITE_MEDIA.monumentOverview.primary.src}
                alt="Panoramic view of the circular brick stupa at Nala Sopara with votive stupa plinths in the foreground"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '480px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                loading="eager"
              />
              
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                backgroundColor: 'rgba(28, 27, 26, 0.8)',
                color: '#FAF7F0',
                padding: '4px 10px',
                borderRadius: '2px',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <MapPin size={12} color="#E8A388" />
                <span>GPS: {SITE_MEDIA.monumentOverview.primary.lat}, {SITE_MEDIA.monumentOverview.primary.lng}</span>
              </div>

              {onOpenImage && (
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '6px',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--stone)'
                }}>
                  <ZoomIn size={14} color="var(--terracotta)" />
                  <span>Enlarge Photo</span>
                </div>
              )}
            </div>

            <div style={{ marginTop: '0.85rem' }}>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                <strong>Site Survey Documentation:</strong> {SITE_MEDIA.monumentOverview.primary.caption}
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
                Archaeological Reserve, Gomesali / Gas Village, Nalasopara West • October 2026 Documentation
              </span>
            </div>
          </div>

          {/* Right: At A Glance Factual Matrix */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--terracotta)' }}>
                Documentary Baseline
              </span>
              <EvidenceBadge type="primary" />
            </div>

            <h3 style={{ fontSize: '1.45rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
              Primary Architectural & Historical Data
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '0.85rem'
            }}>
              {AT_A_GLANCE.map((item, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '0.85rem 1.15rem',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderLeft: '3px solid var(--stone)',
                    borderRadius: '2px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                      {item.label}
                    </span>
                    <EvidenceBadge type={item.evidenceType} />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {item.value}
                    </span>
                    <CitationTag sourceId={item.sourceId} onSelectSource={onSelectSource} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <hr className="section-divider" style={{ marginBottom: '4rem' }} />

        {/* Section 03: Understanding the Monument Context */}
        <div>
          <span className="section-kicker">Section 03 — Archaeological Context</span>
          <h2>Understanding the Stupa in Ancient Surparaka</h2>
          <p className="section-subtitle">
            Connecting architectural physical remains with regional maritime history while maintaining strict distinction between documented facts and speculative comparisons.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            
            {/* Box 1: Typology */}
            <div className="archive-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Layers size={18} color="var(--terracotta)" />
                <h3 style={{ fontSize: '1.25rem' }}>{UNDERSTANDING_MONUMENT.typology.title}</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                {UNDERSTANDING_MONUMENT.typology.content}
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <EvidenceBadge type={UNDERSTANDING_MONUMENT.typology.evidenceType} />
                <CitationTag sourceId={UNDERSTANDING_MONUMENT.typology.sourceId} onSelectSource={onSelectSource} />
              </div>
            </div>

            {/* Box 2: Significance */}
            <div className="archive-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Compass size={18} color="var(--terracotta)" />
                <h3 style={{ fontSize: '1.25rem' }}>{UNDERSTANDING_MONUMENT.significance.title}</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                {UNDERSTANDING_MONUMENT.significance.content}
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <EvidenceBadge type={UNDERSTANDING_MONUMENT.significance.evidenceType} />
                <CitationTag sourceId={UNDERSTANDING_MONUMENT.significance.sourceId} onSelectSource={onSelectSource} />
              </div>
            </div>

            {/* Box 3: What is visible today */}
            <div className="archive-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--terracotta)" />
                <h3 style={{ fontSize: '1.25rem' }}>{UNDERSTANDING_MONUMENT.documentedToday.title}</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                {UNDERSTANDING_MONUMENT.documentedToday.content}
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <EvidenceBadge type={UNDERSTANDING_MONUMENT.documentedToday.evidenceType} />
                <CitationTag sourceId={UNDERSTANDING_MONUMENT.documentedToday.sourceId} onSelectSource={onSelectSource} />
              </div>
            </div>

            {/* Box 4: Architectural Limitations & Caveats */}
            <div className="archive-card" style={{ borderColor: 'var(--terracotta-border)', backgroundColor: 'var(--terracotta-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <AlertCircle size={18} color="var(--terracotta)" />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--terracotta-hover)' }}>
                  {UNDERSTANDING_MONUMENT.architecturalLimitations.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--stone)' }}>
                {UNDERSTANDING_MONUMENT.architecturalLimitations.content}
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <EvidenceBadge type={UNDERSTANDING_MONUMENT.architecturalLimitations.evidenceType} />
                <CitationTag sourceId={UNDERSTANDING_MONUMENT.architecturalLimitations.sourceId} onSelectSource={onSelectSource} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
