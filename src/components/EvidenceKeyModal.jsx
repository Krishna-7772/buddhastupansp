import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { EVIDENCE_TYPES } from '../data/sources';
import { EvidenceBadge } from './EvidenceBadge';

export const EvidenceKeyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="evidence-key-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(28, 27, 26, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-strong)',
          borderRadius: '4px',
          maxWidth: 'min(92vw, 680px)',
          width: '100%',
          maxHeight: '88vh',
          overflowY: 'auto',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-secondary)'
          }}
        >
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--terracotta)' }}>
              Methodological Framework
            </span>
            <h3 id="evidence-key-title" style={{ fontSize: '1.35rem', marginTop: '0.15rem' }}>
              Evidence Classification Key
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            style={{
              background: 'none',
              border: '1px solid var(--border-subtle)',
              borderRadius: '3px',
              padding: '0.35rem',
              cursor: 'pointer',
              color: 'var(--text-secondary)'
            }}
            aria-label="Close evidence classification key"
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            In adherence to strict archival and academic standards, the <strong>Sopara Heritage Archive</strong> classifies historical claims according to their documentary provenance. Rather than presenting all statements as uniform facts, we distinguish between direct primary records, scientific empirical findings, scholarly hypotheses, and traditional attributions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {Object.entries(EVIDENCE_TYPES).map(([key, data]) => (
              <div
                key={key}
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '3px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                  <EvidenceBadge type={key} showTooltip={false} />
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                    {data.label}
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {data.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '0.85rem 1rem',
              backgroundColor: 'var(--terracotta-light)',
              border: '1px solid var(--terracotta-border)',
              borderRadius: '3px',
              fontSize: '0.82rem',
              color: 'var(--stone)'
            }}
          >
            <strong>Research Principle:</strong> If a primary source has not been reviewed or if physical access is awaiting clearance, the associated data is marked as <em>awaiting verification</em> rather than presented as settled fact.
          </div>
        </div>
      </div>
    </div>
  );
};
