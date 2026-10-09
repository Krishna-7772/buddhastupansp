import React, { useState, useEffect } from 'react';
import { Menu, X, Info } from 'lucide-react';

export const SiteHeader = ({ onOpenEvidenceKey }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Chronology", href: "#chronology" },
    { label: "Excavation", href: "#excavation" },
    { label: "Architecture", href: "#architecture" },
    { label: "Relics", href: "#relics" },
    { label: "Video", href: "#video-tour" },
    { label: "Conservation", href: "#conservation" },
    { label: "Location", href: "#location" },
    { label: "Gallery", href: "#gallery" },
    { label: "Sources", href: "#sources" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(251, 249, 245, 0.98)' : 'var(--bg-primary)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
        transition: 'all 0.2s ease',
      }}
      aria-label="Site Header"
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '68px', paddingY: '0.4rem' }}>
        
        {/* Brand identity */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '70%' }}>
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{ 
              textDecoration: 'none', 
              color: 'var(--text-primary)', 
              display: 'flex', 
              alignItems: 'baseline', 
              gap: '0.45rem',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', 
              fontWeight: 700, 
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
              whiteSpace: 'nowrap'
            }}>
              Sopara Heritage Archive
            </span>
            <span style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--terracotta)',
              backgroundColor: 'var(--terracotta-light)',
              padding: '0.12rem 0.4rem',
              borderRadius: '2px',
              border: '1px solid var(--terracotta-border)',
              whiteSpace: 'nowrap'
            }}>
              Stupa Module
            </span>
          </a>
          <span style={{ 
            fontSize: '0.72rem', 
            color: 'var(--text-muted)', 
            marginTop: '-1px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            Archaeological Documentation • Nala Sopara
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav 
          style={{ display: 'none', alignItems: 'center', gap: '0.95rem' }} 
          className="desktop-nav"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.84rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                padding: '0.25rem 0',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--terracotta)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.label}
            </a>
          ))}

          {/* Evidence Classifier Guide Button */}
          <button
            onClick={onOpenEvidenceKey}
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-strong)',
              borderRadius: '3px',
              padding: '0.35rem 0.65rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              whiteSpace: 'nowrap'
            }}
            title="Learn how historical evidence is classified in this archive"
          >
            <Info size={14} color="var(--terracotta)" />
            <span>Evidence Key</span>
          </button>
        </nav>

        {/* Mobile controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-controls">
          <button
            onClick={onOpenEvidenceKey}
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '3px',
              padding: '0.45rem 0.65rem',
              color: 'var(--terracotta)',
              cursor: 'pointer',
              fontSize: '0.78rem',
              fontWeight: 600
            }}
            aria-label="Open evidence classification key"
          >
            <Info size={16} />
            <span style={{ display: 'none' }} className="mobile-key-label">Key</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: '1px solid var(--border-strong)',
              borderRadius: '3px',
              padding: '0.45rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              minWidth: '40px',
              minHeight: '40px'
            }}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--bg-primary)',
            padding: '1.5rem',
            overflowY: 'auto',
            borderTop: '1px solid var(--border-strong)',
            zIndex: 99
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--terracotta)', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
              Archive Navigation Index
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  padding: '0.65rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '44px'
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>→</span>
              </a>
            ))}

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEvidenceKey();
                }}
                type="button"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  minHeight: '48px'
                }}
              >
                <Info size={16} color="var(--terracotta)" />
                View Evidence Classification Key
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive navigation styling helper */}
      <style>{`
        @media (min-width: 1180px) {
          .desktop-nav { display: flex !important; }
          .mobile-controls { display: none !important; }
        }
        @media (min-width: 480px) {
          .mobile-key-label { display: inline !important; }
        }
      `}</style>
    </header>
  );
};
