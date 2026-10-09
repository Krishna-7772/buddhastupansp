import React, { useState } from 'react';
import { RELIC_ASSEMBLAGE } from '../data/relicAssemblage';
import { CitationTag } from './CitationTag';
import { EvidenceBadge } from './EvidenceBadge';
import { Layers, ChevronRight, Landmark } from 'lucide-react';

export const RelicAssemblage = ({ onSelectSource }) => {
  const [selectedObjectId, setSelectedObjectId] = useState(RELIC_ASSEMBLAGE[0].id);

  const activeObject = RELIC_ASSEMBLAGE.find(o => o.id === selectedObjectId) || RELIC_ASSEMBLAGE[0];

  return (
    <section id="relics" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <span className="section-kicker">Section 06 — Sacred Assemblage</span>
        <h2>The Relic Assemblage of the Central Stone Coffer</h2>
        <p className="section-subtitle">
          Discovered in April 1882 deep within the core of the brick stupa. An extraordinary multi-tiered Buddhist reliquary preserved intact since antiquity.
        </p>

        {/* Essential Custody Disclaimer Banner */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-strong)',
          borderLeft: '4px solid var(--terracotta)',
          padding: '1.25rem 1.5rem',
          borderRadius: '4px',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem'
        }}>
          <Landmark size={22} color="var(--terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--text-primary)' }}>
              Current Custodial Repository Notice
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
              The entire relic assemblage—including the stone coffer, bronze sculptures, and precious metal caskets—is preserved under the custodial care of <strong>The Asiatic Society of Mumbai</strong> at Town Hall, Fort, Mumbai. <strong>None of these artefacts are kept at the open-air archaeological site in Nala Sopara today.</strong>
              <CitationTag sourceId="asiatic-society" onSelectSource={onSelectSource} />
            </p>
          </div>
        </div>

        {/* Master-Detail Editorial Catalogue */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2rem'
        }}>
          
          {/* Object Selector List (Left Column) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
              Catalogue Inventory (6 Verified Categories)
            </span>

            {RELIC_ASSEMBLAGE.map((obj) => {
              const isSelected = obj.id === selectedObjectId;

              return (
                <button
                  key={obj.id}
                  type="button"
                  onClick={() => setSelectedObjectId(obj.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    backgroundColor: isSelected ? 'var(--bg-card)' : 'var(--bg-elevated)',
                    border: isSelected ? '1px solid var(--terracotta)' : '1px solid var(--border-subtle)',
                    borderLeft: isSelected ? '4px solid var(--terracotta)' : '1px solid var(--border-subtle)',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--terracotta-hover)' : 'var(--text-primary)',
                      display: 'block'
                    }}>
                      {obj.name}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {obj.category} • {obj.material.split(',')[0]}
                    </span>
                  </div>

                  <ChevronRight size={16} color={isSelected ? "var(--terracotta)" : "var(--text-light)"} />
                </button>
              );
            })}
          </div>

          {/* Active Object Detail Panel (Right Column) */}
          <div className="archive-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)', backgroundColor: 'var(--bg-card)' }}>
            
            {/* Top metadata */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--terracotta)' }}>
                  {activeObject.category}
                </span>
                <h3 style={{ fontSize: '1.65rem', marginTop: '0.25rem', color: 'var(--text-primary)' }}>
                  {activeObject.name}
                </h3>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', display: 'block' }}>
                  {activeObject.marathiName}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                <EvidenceBadge type={activeObject.evidenceType} />
                <CitationTag sourceId={activeObject.sourceId} onSelectSource={onSelectSource} />
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {activeObject.description}
            </p>

            {/* Structured Specifications Table */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '3px',
              padding: '1rem',
              marginBottom: '1.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '0.85rem'
            }}>
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                  Material
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  {activeObject.material}
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                  Recorded Dimensions
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  {activeObject.dimensionsHistorical}
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                  Archaeological Findspot
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  {activeObject.findContext}
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                  Custodial Location
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--terracotta)' }}>
                  {activeObject.custody}
                </span>
              </div>
            </div>

            {/* Nested layers interactive breakdown if inspecting the caskets */}
            {activeObject.nestedLayers && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Layers size={16} color="var(--terracotta)" />
                  The Five Concentric Nested Vessels (Outer to Inner)
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeObject.nestedLayers.map(l => (
                    <div 
                      key={l.layer}
                      style={{
                        padding: '0.65rem 0.85rem',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.75rem'
                      }}
                    >
                      <span style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--terracotta-light)',
                        color: 'var(--terracotta)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {l.layer}
                      </span>
                      <div>
                        <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{l.material}: </strong>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{l.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed analytical bullet points */}
            {activeObject.details && (
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {activeObject.details.map((detail, idx) => (
                  <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--terracotta)', fontWeight: 700 }}>•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Image Placeholder & Rights Note */}
            <div style={{
              marginTop: '1.5rem',
              padding: '0.85rem 1rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px dashed var(--border-strong)',
              borderRadius: '3px',
              fontSize: '0.78rem',
              color: 'var(--text-muted)'
            }}>
              <strong>Documentary Image Status:</strong> Institutional clearance from The Asiatic Society of Mumbai required for direct museum object photography reproduction under Indian copyright regulations.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
