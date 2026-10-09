import React from 'react';
import { MATERIALS_RESEARCH } from '../data/materialsResearch';
import { CitationTag } from './CitationTag';
import { EvidenceBadge } from './EvidenceBadge';
import { CheckCircle2, XCircle, ExternalLink, Layers, Flame } from 'lucide-react';

export const MaterialsResearch = ({ onSelectSource }) => {
  return (
    <section id="materials" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <span className="section-kicker">Section 07 — Archaeometric Science</span>
        <h2>Scientific Study of Building Materials (2023)</h2>
        <p className="section-subtitle">
          Empirical laboratory characterization of ancient brick masonry and mud mortar samples from the Sopara stupa, revealing indigenous pyro-technology and geological sourcing.
        </p>

        {/* Paper Reference Callout */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '4px',
          padding: '1.25rem 1.5rem',
          marginBottom: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <EvidenceBadge type="scientific" />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Peer-Reviewed Article in <em>{MATERIALS_RESEARCH.journal}</em>
              </span>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', margin: 0 }}>
              {MATERIALS_RESEARCH.studyTitle}
              <CitationTag sourceId={MATERIALS_RESEARCH.sourceId} onSelectSource={onSelectSource} />
            </h3>
          </div>

          <a
            href={`https://doi.org/${MATERIALS_RESEARCH.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
          >
            <span>Access via Elsevier DOI</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Conceptual Explanations Grid: Why It Matters */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          
          <div className="archive-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Flame size={18} color="var(--terracotta)" />
              <h3 style={{ fontSize: '1.25rem' }}>Why Brick Composition Matters</h3>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
              Bricks are ceramic time-capsules. Ancient clays contain distinct geochemical trace elements that indicate whether raw materials were extracted from local riverbeds or transported from afar. Furthermore, the mineral transformations inside the clay indicate kiln temperatures and firing mastery.
            </p>
          </div>

          <div className="archive-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Layers size={18} color="var(--terracotta)" />
              <h3 style={{ fontSize: '1.25rem' }}>Why Mortar Is Archaeologically Informative</h3>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
              Unlike modern Portland cement, ancient mud mortar was formulated from specific sand-to-silt ratios and cohesive clay binders. Mortar analysis demonstrates how ancient artisans achieved structural flexibility, allowing monumental structures to settle and breathe in monsoonal conditions without brittle failure.
            </p>
          </div>

        </div>

        {/* Analytical Methods Accordion / Cards */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem' }}>
            Laboratory Analytical Techniques Applied
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            The 2023 investigation deployed complementary archaeometric methods to investigate micro-structural and mineralogical properties:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
            {MATERIALS_RESEARCH.analyticalMethods.map((m, i) => (
              <div 
                key={i}
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '3px'
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {m.technique}
                </span>
                <h4 style={{ fontSize: '1rem', marginTop: '0.25rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  {m.focus}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {m.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Empirical Findings */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ fontSize: '1.45rem', marginBottom: '1.25rem' }}>
            Primary Empirical Findings
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            {MATERIALS_RESEARCH.keyFindings.map((finding, idx) => (
              <div key={idx} className="archive-card" style={{ borderLeft: '3px solid #21683A' }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 600, color: '#21683A', letterSpacing: '0.05em' }}>
                  Scientific Result {idx + 1}
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                  {finding.title}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {finding.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Crucial Distinction: What It Establishes vs What It Does NOT */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-strong)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '1rem 1.5rem',
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>
              Methodological Rigor: Scientific Scope & Limitations
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}>
            
            {/* What It Establishes */}
            <div style={{ padding: '1.75rem', borderRight: '1px solid var(--border-subtle)', backgroundColor: 'rgba(33, 104, 58, 0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <CheckCircle2 size={18} color="#21683A" />
                <h4 style={{ color: '#21683A', fontSize: '1.1rem', margin: 0 }}>
                  What the Study Substantiates
                </h4>
              </div>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {MATERIALS_RESEARCH.whatItEstablishesVsNot.whatItEstablishes.map((item, i) => (
                  <li key={i} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55, display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#21683A', fontWeight: 700 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What It Does NOT Establish */}
            <div style={{ padding: '1.75rem', backgroundColor: 'rgba(168, 72, 42, 0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <XCircle size={18} color="var(--terracotta)" />
                <h4 style={{ color: 'var(--terracotta)', fontSize: '1.1rem', margin: 0 }}>
                  What the Study Does NOT Establish
                </h4>
              </div>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {MATERIALS_RESEARCH.whatItEstablishesVsNot.whatItDoesNotEstablish.map((item, i) => (
                  <li key={i} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55, display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--terracotta)', fontWeight: 700 }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
