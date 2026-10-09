import React, { useEffect } from 'react';
import { X, ExternalLink, BookCheck, ShieldCheck } from 'lucide-react';
import { SOURCES } from '../data/sources';
import { EvidenceBadge } from './EvidenceBadge';

export const SourceModal = ({ sourceId, onClose }) => {
  const source = SOURCES.find(s => s.id === sourceId);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll while modal is mounted
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!source) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="source-modal-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(28, 27, 26, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 200,
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
          maxWidth: 'min(92vw, 640px)',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.18)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-secondary)'
          }}
        >
          <div>
            <span style={{ 
              fontSize: '0.72rem', 
              fontWeight: 600, 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em', 
              color: 'var(--terracotta)' 
            }}>
              Archival Source Record
            </span>
            <h3 id="source-modal-title" style={{ marginTop: '0.25rem', fontSize: '1.35rem', lineHeight: 1.25 }}>
              {source.shortRef}
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
            aria-label="Close source reference modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <EvidenceBadge type={
                source.type.includes('Primary') ? 'primary' :
                source.type.includes('Scientific') ? 'scientific' :
                source.type.includes('Scholarly') ? 'scholarly' : 'primary'
              } />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {source.type}
              </span>
            </div>
            
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
              {source.title}
            </h4>
            
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
              <strong>Author / Institution:</strong> {source.author}
            </p>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
              <strong>Publication:</strong> {source.publication} ({source.year})
            </p>
          </div>

          {/* Relevance note */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '3px solid var(--terracotta)',
              padding: '1rem',
              borderRadius: '0 3px 3px 0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <BookCheck size={16} color="var(--terracotta)" />
              <span style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--stone)' }}>
                What This Source Substantiates
              </span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.55 }}>
              {source.relevance}
            </p>
          </div>

          {/* Rights & Permissions note */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <ShieldCheck size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>
              <strong>Rights & Provenance:</strong> {source.rights}
            </span>
          </div>

          {/* Direct External Link */}
          {source.url && (
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Consult Original Document / Holding</span>
                <ExternalLink size={15} />
              </a>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', textAlign: 'center', marginTop: '0.4rem' }}>
                Opens authentic external institutional or publisher repository
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
