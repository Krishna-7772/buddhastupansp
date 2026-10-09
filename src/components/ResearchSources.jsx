import React, { useState } from 'react';
import { SOURCES } from '../data/sources';
import { EvidenceBadge } from './EvidenceBadge';
import { ExternalLink, Bookmark, Filter } from 'lucide-react';

export const ResearchSources = () => {
  const [filterType, setFilterType] = useState('all');

  const filteredSources = SOURCES.filter(s => {
    if (filterType === 'all') return true;
    if (filterType === 'primary') return s.type.includes('Primary') || s.type.includes('Institutional');
    if (filterType === 'scientific') return s.type.includes('Scientific');
    if (filterType === 'scholarly') return s.type.includes('Scholarly');
    return true;
  });

  return (
    <section id="sources" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <span className="section-kicker">Section 13 — Research Bibliography & Institutional Archives</span>
        <h2>Verified Research Sources & Archival Records</h2>
        <p className="section-subtitle">
          Every assertion within the Sopara Heritage Archive is directly traceable to the foundational excavation records, institutional holding registries, and peer-reviewed scientific studies listed below.
        </p>

        {/* Filter bar */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginRight: '0.5rem' }}>
            <Filter size={14} /> Filter Sources:
          </span>
          {[
            { id: 'all', label: 'All Verified Sources (6)' },
            { id: 'primary', label: 'Primary Reports & Registries' },
            { id: 'scientific', label: 'Peer-Reviewed Scientific' },
            { id: 'scholarly', label: 'Scholarly Re-examinations' }
          ].map(f => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilterType(f.id)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.4rem 0.85rem',
                borderRadius: '3px',
                border: filterType === f.id ? '1px solid var(--terracotta)' : '1px solid var(--border-subtle)',
                backgroundColor: filterType === f.id ? 'var(--terracotta)' : 'var(--bg-card)',
                color: filterType === f.id ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Sources List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredSources.map((source) => (
            <div
              key={source.id}
              id={`source-${source.id}`}
              className="archive-card"
              style={{
                padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                backgroundColor: 'var(--bg-card)',
                transition: 'background-color 0.4s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Bookmark size={16} color="var(--terracotta)" />
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--terracotta)',
                    letterSpacing: '0.04em'
                  }}>
                    [{source.shortRef}]
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    • {source.type}
                  </span>
                </div>

                <EvidenceBadge type={
                  source.id === 'indraji-1882' || source.id === 'asiatic-society' || source.id === 'campbell-1882' || source.id === 'asi-mumbai-circle' ? 'primary' :
                  source.id === 'materials-2023' ? 'scientific' : 'scholarly'
                } />
              </div>

              {/* Title & Bibliographical string */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                {source.title}
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                <strong>Author / Institution:</strong> {source.author} • <strong>Publication:</strong> <em>{source.publication}</em> ({source.year})
              </p>

              {/* Relevance Annotation */}
              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                borderLeft: '3px solid var(--terracotta)',
                padding: '0.85rem 1rem',
                borderRadius: '0 3px 3px 0',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--stone)', fontWeight: 700, letterSpacing: '0.05em', display: 'block', marginBottom: '0.2rem' }}>
                  Archival Relevance & Evidentiary Scope
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.55 }}>
                  {source.relevance}
                </p>
              </div>

              {/* Action Link & Rights */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <strong>Rights Status:</strong> {source.rights}
                </span>

                {source.url && (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
                  >
                    <span>Consult Online Repository</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
