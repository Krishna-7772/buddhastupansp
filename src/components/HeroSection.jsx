import React, { useState, useRef } from 'react';
import { ChevronDown, Play, Pause, Volume2, VolumeX, Compass, Video } from 'lucide-react';
import { SITE_MEDIA } from '../data/mediaManifest';
import { CitationTag } from './CitationTag';
import { EvidenceBadge } from './EvidenceBadge';

export const HeroSection = ({ onSelectSource }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#1C1B1A',
        color: '#FAF7F0',
        paddingTop: 'clamp(4rem, 8vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6.5rem)'
      }}
      aria-label="Introduction to Sopara Heritage Archive"
    >
      {/* Background Video Layer */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <video
          ref={videoRef}
          src={SITE_MEDIA.heroVideo.src}
          poster={SITE_MEDIA.heroVideo.poster}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.42,
            filter: 'brightness(0.9) contrast(1.05)'
          }}
          aria-hidden="true"
        />

        {/* Rich cinematic gradient overlay for perfect readability and editorial atmosphere */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(28, 27, 26, 0.72) 0%, rgba(28, 27, 26, 0.6) 45%, rgba(28, 27, 26, 0.94) 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Video Controls (Floating bottom right) */}
      <div 
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          zIndex: 10,
          display: 'flex',
          gap: '8px',
          backgroundColor: 'rgba(28, 27, 26, 0.75)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '4px',
          padding: '6px'
        }}
      >
        <button
          type="button"
          onClick={togglePlay}
          style={{
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '2px'
          }}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          title={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          style={{
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '2px'
          }}
          aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
          title={isMuted ? "Unmute video sound" : "Mute video sound"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* Foreground Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 5, width: '100%' }}>
        
        {/* Archival Monograph Header Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#E8A388',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            backgroundColor: 'rgba(168, 72, 42, 0.28)',
            padding: '0.35rem 0.75rem',
            borderRadius: '2px',
            border: '1px solid rgba(232, 163, 136, 0.35)'
          }}>
            <Compass size={14} />
            Nala Sopara, Maharashtra • c. 3rd–2nd Century BCE
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>•</span>
          <span style={{ fontSize: '0.75rem', color: '#DDD6C9', letterSpacing: '0.06em' }}>
            Archaeological Documentation Monograph
          </span>
          <EvidenceBadge type="primary" />
        </div>

        {/* Hero Title & Narrative */}
        <div style={{ maxWidth: '840px' }}>
          <h1 style={{ 
            color: '#FFFFFF', 
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', 
            lineHeight: 1.12, 
            marginBottom: '1.25rem',
            textShadow: '0 2px 14px rgba(0, 0, 0, 0.6)'
          }}>
            The Buddhist Stupa of Nala Sopara
          </h1>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)',
            lineHeight: 1.45,
            color: '#F4EDE4',
            marginBottom: '1.5rem',
            fontWeight: 400,
            textShadow: '0 1px 8px rgba(0, 0, 0, 0.7)'
          }}>
            A monumental brick reliquary at ancient Surparaka, documented through genuine on-site surveys, the landmark 1882 excavation of Pandit Bhagvanlal Indraji, and modern archaeometric science.
            <CitationTag sourceId="indraji-1882" onSelectSource={onSelectSource} />
          </p>

          <p style={{ 
            fontSize: '1.05rem', 
            lineHeight: 1.7, 
            color: '#D8D0C5', 
            marginBottom: '2.25rem',
            maxWidth: '740px'
          }}>
            Historically known in local tradition as <em>Burud Raja cha Kot</em>, this sacred circular monument in Gas village yielded an undisturbed central stone coffer enshrining eight bronze Buddhist deities, five concentric caskets, gold offerings, and historically attributed alms-bowl fragments.
            <CitationTag sourceId="asiatic-society" onSelectSource={onSelectSource} />
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
            <a 
              href="#overview" 
              className="btn-primary"
              style={{
                backgroundColor: 'var(--terracotta)',
                borderColor: 'var(--terracotta)',
                padding: '0.85rem 1.6rem',
                fontSize: '0.98rem'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#overview')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Explore the Monument</span>
              <ChevronDown size={17} />
            </a>

            <a 
              href="#video-tour" 
              className="btn-secondary"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                padding: '0.85rem 1.4rem',
                fontSize: '0.98rem',
                backdropFilter: 'blur(4px)'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#video-tour')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Video size={17} />
              <span>Watch On-Site Footage</span>
            </a>

            <a 
              href="#gallery" 
              className="btn-secondary"
              style={{
                backgroundColor: 'transparent',
                color: '#DDD6C9',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                padding: '0.85rem 1.3rem',
                fontSize: '0.95rem'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Compass size={17} />
              <span>Browse Site Gallery</span>
            </a>
          </div>

          {/* Key Facts Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.16)',
            paddingTop: '1.5rem'
          }}>
            <div>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A89E8E', display: 'block' }}>
                Statutory Status
              </span>
              <strong style={{ fontSize: '0.9rem', color: '#FAF7F0' }}>
                Centrally Protected (ASI)
              </strong>
            </div>

            <div>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A89E8E', display: 'block' }}>
                Historical Setting
              </span>
              <strong style={{ fontSize: '0.9rem', color: '#FAF7F0' }}>
                Surparaka Emporium (Aparanta)
              </strong>
            </div>

            <div>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A89E8E', display: 'block' }}>
                GPS Location
              </span>
              <strong style={{ fontSize: '0.9rem', color: '#FAF7F0' }}>
                Gas Village (19.414° N, 72.795° E)
              </strong>
            </div>

            <div>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A89E8E', display: 'block' }}>
                Excavation Milestone
              </span>
              <strong style={{ fontSize: '0.9rem', color: '#FAF7F0' }}>
                April 1882 (Bhagvanlal Indraji)
              </strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
