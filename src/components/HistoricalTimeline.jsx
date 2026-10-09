import React, { useState } from 'react';
import { CHRONOLOGY_EVENTS } from '../data/chronology';
import { CitationTag } from './CitationTag';
import { EvidenceBadge } from './EvidenceBadge';
import { Calendar, ChevronDown, ChevronRight, Filter } from 'lucide-react';

export const HistoricalTimeline = ({ onSelectSource }) => {
  const [filter, setFilter] = useState('all');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredEvents = CHRONOLOGY_EVENTS.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'primary') return event.evidenceType === 'primary';
    if (filter === 'scientific') return event.evidenceType === 'scientific';
    if (filter === 'scholarly') return event.evidenceType === 'scholarly' || event.evidenceType === 'open_question';
    return true;
  });

  return (
    <section id="chronology" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <span className="section-kicker">Section 03 — Researched Chronology</span>
        <h2>Documented Historical Chronology</h2>
        <p className="section-subtitle">
          From ancient maritime trade to nineteenth-century excavation and contemporary archaeometric analysis. Every entry corresponds to verifiable primary or peer-reviewed documentation.
        </p>

        {/* Filter bar */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginRight: '0.5rem' }}>
            <Filter size={14} /> Filter by Evidence:
          </span>
          {[
            { id: 'all', label: 'All Documented Milestones' },
            { id: 'primary', label: 'Primary Excavation Records' },
            { id: 'scientific', label: 'Scientific Archaeometry' },
            { id: 'scholarly', label: 'Scholarly Inquiries' }
          ].map(f => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.4rem 0.85rem',
                borderRadius: '3px',
                border: filter === f.id ? '1px solid var(--terracotta)' : '1px solid var(--border-subtle)',
                backgroundColor: filter === f.id ? 'var(--terracotta)' : 'var(--bg-card)',
                color: filter === f.id ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Timeline Stream */}
        <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border-strong)', marginLeft: '0.5rem' }}>
          {filteredEvents.map((event, idx) => {
            const isExpanded = !!expandedItems[event.id];

            return (
              <div 
                key={event.id}
                style={{
                  position: 'relative',
                  marginBottom: idx === filteredEvents.length - 1 ? 0 : '2.5rem',
                }}
              >
                {/* Node circle on vertical line */}
                <div 
                  style={{
                    position: 'absolute',
                    left: '-1.95rem',
                    top: '0.25rem',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: event.evidenceType === 'scientific' ? '#21683A' : event.evidenceType === 'primary' ? 'var(--terracotta)' : 'var(--stone)',
                    border: '2px solid var(--bg-secondary)',
                  }} 
                />

                {/* Timeline Card */}
                <div className="archive-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)' }}>
                  
                  {/* Top line: Period & Badges */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--terracotta)',
                      letterSpacing: '0.02em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}>
                      <Calendar size={14} />
                      {event.period}
                    </span>
                    <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                      <EvidenceBadge type={event.evidenceType} />
                      <CitationTag sourceId={event.sourceId} onSelectSource={onSelectSource} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                    {event.title}
                  </h3>

                  {/* Summary */}
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                    {event.summary}
                  </p>

                  {/* Expand / Collapse Details Button */}
                  {event.details && (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleExpand(event.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--terracotta)',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          padding: 0
                        }}
                      >
                        <span>{isExpanded ? "Hide contextual documentation" : "Read archival context"}</span>
                        {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      </button>

                      {isExpanded && (
                        <div 
                          style={{
                            marginTop: '0.75rem',
                            padding: '1rem',
                            backgroundColor: 'var(--bg-secondary)',
                            borderRadius: '3px',
                            borderLeft: '2px solid var(--border-strong)',
                            fontSize: '0.92rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6
                          }}
                        >
                          {event.details}
                        </div>
                      )}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
