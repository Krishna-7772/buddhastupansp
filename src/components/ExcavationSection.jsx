import React from 'react';
import { EXCAVATION_DATA } from '../data/excavation';
import { SITE_MEDIA } from '../data/mediaManifest';
import { CitationTag } from './CitationTag';
import { EvidenceBadge } from './EvidenceBadge';
import { BookOpen, Quote, ZoomIn } from 'lucide-react';

export const ExcavationSection = ({ onSelectSource, onOpenImage }) => {
  return (
    <section id="excavation" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <span className="section-kicker">Section 04 — Landmark Archaeological Event</span>
        <h2>The 1882 Excavation by Bhagvanlal Indraji</h2>
        <p className="section-subtitle">
          The systematic opening of the Nala Sopara stupa in April 1882 marked a pivotal milestone in the history of Indian field archaeology and epigraphy.
        </p>

        {/* Visual Comparison: Modern Trench Cut vs 1882 Drawing */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Photo: Modern view of the 1882 excavation trench in the brick mound */}
          <div 
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-strong)',
              borderRadius: '4px',
              overflow: 'hidden',
              cursor: onOpenImage ? 'pointer' : 'default'
            }}
            onClick={() => onOpenImage && onOpenImage(SITE_MEDIA.monumentOverview.excavationCut)}
          >
            <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
              <img
                src={SITE_MEDIA.monumentOverview.excavationCut.src}
                alt="Modern site view of the 1882 excavation cut into the brick stupa core"
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
                top: '10px',
                left: '10px',
                backgroundColor: 'rgba(28, 27, 26, 0.85)',
                color: '#FAF7F0',
                padding: '3px 8px',
                borderRadius: '2px',
                fontSize: '0.72rem',
                fontWeight: 600
              }}>
                Current Site Documentation (2026)
              </div>
              {onOpenImage && (
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '5px',
                  borderRadius: '2px'
                }}>
                  <ZoomIn size={14} color="var(--terracotta)" />
                </div>
              )}
            </div>
            <div style={{ padding: '1rem 1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--terracotta)', textTransform: 'uppercase' }}>
                Visible Excavation Traces Today
              </span>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0', lineHeight: 1.5 }}>
                {SITE_MEDIA.monumentOverview.excavationCut.caption}
              </p>
            </div>
          </div>

          {/* Schematic: 1882 Indraji Transverse Cut Diagram */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-strong)',
            borderRadius: '4px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--stone)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Archival Cross-Section (1882)
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  JBBRAS Vol. XV, Plate I
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                In 1882, Indraji excavated a 20-foot wide trench vertically through the solid brickwork core until discovering the central stone coffer at ~12 feet below the apex. The saddle created by this 1882 trench remains visible in the monument's profile today.
              </p>
            </div>

            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              padding: '0.75rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <svg viewBox="0 0 320 130" style={{ width: '100%', height: 'auto', maxHeight: '120px' }}>
                <rect x="20" y="105" width="280" height="15" fill="#E8DEC8" stroke="#3D3935" strokeWidth="1" />
                <path d="M 40 105 C 50 60, 80 30, 160 25 C 240 30, 270 60, 280 105 Z" fill="#DFD2BD" stroke="#3D3935" strokeWidth="1.2" />
                <polygon points="140,25 180,25 174,85 146,85" fill="#FAF7F0" stroke="#A8482A" strokeWidth="1.2" strokeDasharray="3 2" />
                <rect x="150" y="72" width="20" height="13" fill="#3D3935" stroke="#1C1B1A" rx="1" />
                <circle cx="160" cy="78" r="3" fill="#C9982E" />
                <text x="160" y="18" textAnchor="middle" fill="#736E66" fontSize="7.5" fontStyle="italic">Truncated Apex</text>
                <text x="160" y="55" textAnchor="middle" fill="#A8482A" fontSize="7" fontWeight="600">1882 Shaft (~12 ft)</text>
                <text x="160" y="98" textAnchor="middle" fill="#1C1B1A" fontSize="7" fontWeight="600">Stone Coffer Chamber</text>
              </svg>
            </div>
          </div>

        </div>

        {/* Narrative Context & Leadership */}
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-strong)',
          borderRadius: '4px',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          marginBottom: '3.5rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--terracotta)' }}>
                  Archaeological Leadership
                </span>
                <EvidenceBadge type="primary" />
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                {EXCAVATION_DATA.leader}
              </h3>

              <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {EXCAVATION_DATA.context.narrative}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <span><strong>Date:</strong> {EXCAVATION_DATA.dateOfWork}</span>
                <span>•</span>
                <span><strong>Co-investigator:</strong> {EXCAVATION_DATA.collaborator}</span>
                <span>•</span>
                <span><strong>Monograph:</strong> <em>JBBRAS</em> Vol. XV</span>
              </div>
            </div>

            {/* Historical Quotation Callout */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              borderLeft: '3px solid var(--terracotta)',
              padding: '1.5rem',
              borderRadius: '0 4px 4px 0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}>
              <Quote size={20} color="var(--terracotta)" style={{ marginBottom: '0.5rem' }} />
              <blockquote style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.08rem',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                marginBottom: '0.75rem'
              }}>
                {EXCAVATION_DATA.context.quoteHistorical}
              </blockquote>
              <cite style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', fontStyle: 'normal' }}>
                — {EXCAVATION_DATA.context.quoteAttribution}
              </cite>
            </div>
          </div>
        </div>

        {/* The Three Connected Elements Matrix */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            The Three Pillars of Excavation Evidence
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.75rem', maxWidth: '750px' }}>
            A rigorous critical comparison between the 1882 publication, institutional confirmations at Town Hall, and open historiographical questions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.5rem' }}>
            {EXCAVATION_DATA.threeElements.map((elem) => (
              <div 
                key={elem.id}
                className="archive-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: elem.id === 'unresolved-inquiries' ? 'var(--bg-elevated)' : 'var(--bg-card)',
                  borderColor: elem.id === 'unresolved-inquiries' ? 'var(--sand-dark)' : 'var(--border-subtle)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <EvidenceBadge type={elem.evidenceType} />
                    <CitationTag sourceId={elem.sourceId} onSelectSource={onSelectSource} />
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    {elem.title}
                  </h4>

                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {elem.points.map((pt, i) => (
                      <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--terracotta)', fontWeight: 700, flexShrink: 0 }}>•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Source: <em>{elem.sourceId === 'indraji-1882' ? 'Indraji (1882) JBBRAS' : elem.sourceId === 'asiatic-society' ? 'Asiatic Society Registry' : 'Scholarly Review (2022)'}</em>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verbatim Excerpts with Exact Historical Orthography */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '4px',
          padding: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <BookOpen size={18} color="var(--terracotta)" />
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', margin: 0 }}>
              Verbatim Transcriptions from 1882 Report
            </h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Preserving 19th-century diacritics and spellings (e.g. <em>Sopârâ</em>, <em>Rájá</em>) without silent modernization:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {EXCAVATION_DATA.verbatimExcerpts.map((excerpt, i) => (
              <div 
                key={i}
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '3px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {excerpt.topic}
                </span>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                  marginTop: '0.4rem',
                  marginBottom: '0.5rem'
                }}>
                  {excerpt.text}
                </p>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                  {excerpt.citation}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
