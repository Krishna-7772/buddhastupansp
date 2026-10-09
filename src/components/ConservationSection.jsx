import React from 'react';
import { CONSERVATION_DATA } from '../data/conservation';
import { SITE_MEDIA } from '../data/mediaManifest';
import { CitationTag } from './CitationTag';
import { EvidenceBadge } from './EvidenceBadge';
import { ShieldCheck, AlertTriangle, Eye, Wrench, Shield, CheckCircle2, ZoomIn } from 'lucide-react';

export const ConservationSection = ({ onSelectSource, onOpenImage }) => {
  const getCategoryIcon = (index) => {
    switch (index) {
      case 0: return <Eye size={18} color="var(--terracotta)" />;
      case 1: return <Wrench size={18} color="#214363" />;
      case 2: return <ShieldCheck size={18} color="#1E4E2E" />;
      default: return <AlertTriangle size={18} color="#783525" />;
    }
  };

  return (
    <section id="conservation" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <span className="section-kicker">Section 09 — Monument Preservation</span>
        <h2>Conservation and the Monument Today</h2>
        <p className="section-subtitle">
          Preserving two-thousand-year-old brickwork in an encroaching urban-rural fringe requires rigorous distinction between documented interventions, field observations, and visitor stewardship.
        </p>

        {/* Legal Status Banner */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-strong)',
          borderRadius: '4px',
          padding: '1.25rem 1.5rem',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <ShieldCheck size={18} color="var(--terracotta)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {CONSERVATION_DATA.status}
              </span>
              <EvidenceBadge type="primary" />
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
              Statutory Custody: <strong>{CONSERVATION_DATA.jurisdiction}</strong> | Governed by the <em>{CONSERVATION_DATA.legalProtection}</em>
            </p>
          </div>

          <CitationTag sourceId={CONSERVATION_DATA.sourceId} onSelectSource={onSelectSource} />
        </div>

        {/* Photographic Field Inspection Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {/* Photo 1: Conserved stepped terrace */}
          <div 
            className="archive-card"
            style={{
              padding: '1rem',
              cursor: onOpenImage ? 'pointer' : 'default',
              backgroundColor: 'var(--bg-card)'
            }}
            onClick={() => onOpenImage && onOpenImage(SITE_MEDIA.architecturalViews[2])}
          >
            <div style={{ position: 'relative', height: '220px', borderRadius: '2px', overflow: 'hidden', marginBottom: '0.75rem' }}>
              <img
                src={SITE_MEDIA.architecturalViews[2].src}
                alt={SITE_MEDIA.architecturalViews[2].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
                fontWeight: 600
              }}>
                ASI Masonry Stabilization
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
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginBottom: '0.35rem' }}>
              {SITE_MEDIA.architecturalViews[2].title}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {SITE_MEDIA.architecturalViews[2].caption}
            </p>
          </div>

          {/* Photo 2: Core stratigraphy & lateritic soil */}
          <div 
            className="archive-card"
            style={{
              padding: '1rem',
              cursor: onOpenImage ? 'pointer' : 'default',
              backgroundColor: 'var(--bg-card)'
            }}
            onClick={() => onOpenImage && onOpenImage(SITE_MEDIA.architecturalViews[3])}
          >
            <div style={{ position: 'relative', height: '220px', borderRadius: '2px', overflow: 'hidden', marginBottom: '0.75rem' }}>
              <img
                src={SITE_MEDIA.architecturalViews[3].src}
                alt={SITE_MEDIA.architecturalViews[3].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
                fontWeight: 600
              }}>
                Lateritic Soil & Core Stratigraphy
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
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginBottom: '0.35rem' }}>
              {SITE_MEDIA.architecturalViews[3].title}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {SITE_MEDIA.architecturalViews[3].caption}
            </p>
          </div>
        </div>

        {/* The Fourfold Distinction Matrix */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem' }}>
            The Fourfold Distinction in Site Documentation
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '750px' }}>
            To prevent unverified structural diagnoses, the archive categorizes information into four transparent tiers:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
            {CONSERVATION_DATA.distinctions.map((d, index) => (
              <div 
                key={index} 
                className="archive-card"
                style={{
                  backgroundColor: index === 3 ? 'var(--terracotta-light)' : 'var(--bg-card)',
                  borderColor: index === 3 ? 'var(--terracotta-border)' : 'var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    {getCategoryIcon(index)}
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                      {d.category}
                    </h4>
                  </div>

                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.85rem', fontStyle: 'italic' }}>
                    {d.nature}
                  </span>

                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {d.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'flex', gap: '0.45rem', alignItems: 'flex-start' }}>
                        <span style={{ color: index === 3 ? 'var(--terracotta)' : 'var(--stone)', fontWeight: 700 }}>•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Visitor & Research Guidelines */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '4px',
          padding: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Shield size={20} color="var(--terracotta)" />
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: 0 }}>
              Visitor Code of Conduct & Monument Protection
            </h4>
          </div>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            The Buddhist Stupa at Nala Sopara is a delicate ancient earthen and brick relic. All students, visitors, and field researchers are legally and ethically obligated to observe strict preservation guidelines:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
            {CONSERVATION_DATA.visitorEthics.map((rule, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '3px',
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'flex-start'
                }}
              >
                <CheckCircle2 size={16} color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                  {rule}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
