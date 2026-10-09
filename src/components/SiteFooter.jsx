import React from 'react';
import { ArrowUp } from 'lucide-react';

export const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-primary)',
      borderTop: '2px solid var(--border-strong)',
      paddingTop: '4rem',
      paddingBottom: '3.5rem',
      fontSize: '0.88rem',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        
        {/* Top Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Identity & Context */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Sopara Heritage Archive
            </h3>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--terracotta)',
              backgroundColor: 'var(--terracotta-light)',
              padding: '0.2rem 0.5rem',
              borderRadius: '2px',
              border: '1px solid var(--terracotta-border)',
              display: 'inline-block',
              marginBottom: '0.75rem'
            }}>
              Module 01: Buddhist Stupa at Nala Sopara
            </span>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              An open digital documentation archive dedicated to the archaeological preservation and scholarly interpretation of ancient Surparaka and its Buddhist Stupa. Established in academic research affiliation with the <strong>University of Mumbai</strong>.
            </p>
          </div>

          {/* Research & Attribution Policy */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Research & Attribution Principles
            </h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              All narratives, dimensions, and object descriptions are derived strictly from documented excavation publications, institutional holding catalogues, and peer-reviewed studies. Interpretations are subject to ongoing revision as newly discovered archival or field evidence emerges.
            </p>
            <a href="#sources" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--terracotta)' }}>
              Consult the complete bibliographical apparatus →
            </a>
          </div>

          {/* Academic Transparency & Rights */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Statutory Transparency & Permissions
            </h4>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.55, color: 'var(--text-muted)' }}>
              This platform is an independent academic research and educational documentation archive. It does not claim official governmental, Archaeological Survey of India (ASI), or museum sponsorship. Archival visual reproductions and object photographs remain subject to the statutory copyright of their respective holding institutions.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 Sopara Heritage Archive • Research Documentation Monograph • University of Mumbai Academic Initiative
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'none',
              border: '1px solid var(--border-strong)',
              borderRadius: '3px',
              padding: '0.35rem 0.75rem',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            <span>Back to Summit</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
