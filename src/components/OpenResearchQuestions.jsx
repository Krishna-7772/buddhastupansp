import React, { useState } from 'react';
import { RESEARCH_QUESTIONS } from '../data/researchQuestions';
import { CitationTag } from './CitationTag';
import { EvidenceBadge } from './EvidenceBadge';
import { ChevronRight } from 'lucide-react';

export const OpenResearchQuestions = ({ onSelectSource }) => {
  const [activeQuestionId, setActiveQuestionId] = useState(RESEARCH_QUESTIONS[0].id);

  const activeQuestion = RESEARCH_QUESTIONS.find(q => q.id === activeQuestionId) || RESEARCH_QUESTIONS[0];

  return (
    <section id="research-questions" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <span className="section-kicker">Section 10 — Open Research Inquiries</span>
        <h2>Open Archaeological Research Questions</h2>
        <p className="section-subtitle">
          Treating historical uncertainty as an essential intellectual feature of the archive. We present ongoing scholarly debates as rigorous open questions rather than premature conclusions.
        </p>

        {/* Question Selector & Detail Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2.5rem'
        }}>
          
          {/* Question List (Left) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
              Active Research Inquiries
            </span>

            {RESEARCH_QUESTIONS.map((q) => {
              const isSelected = q.id === activeQuestionId;

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setActiveQuestionId(q.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: isSelected ? 'var(--bg-card)' : 'var(--bg-secondary)',
                    border: isSelected ? '1px solid var(--terracotta)' : '1px solid var(--border-subtle)',
                    borderLeft: isSelected ? '4px solid var(--terracotta)' : '1px solid var(--border-subtle)',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: isSelected ? 'var(--terracotta)' : 'var(--text-muted)',
                    lineHeight: 1
                  }}>
                    {q.number}
                  </span>

                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--terracotta-hover)' : 'var(--text-primary)',
                      lineHeight: 1.35,
                      marginBottom: '0.25rem'
                    }}>
                      {q.title}
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {q.category}
                    </span>
                  </div>

                  <ChevronRight size={16} color={isSelected ? "var(--terracotta)" : "var(--text-light)"} style={{ flexShrink: 0, marginTop: '2px' }} />
                </button>
              );
            })}
          </div>

          {/* Active Question Detail Box (Right) */}
          <div className="archive-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', backgroundColor: 'var(--bg-card)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--terracotta)' }}>
                  Inquiry {activeQuestion.number} • {activeQuestion.category}
                </span>
                <h3 style={{ fontSize: '1.45rem', marginTop: '0.25rem', color: 'var(--text-primary)' }}>
                  {activeQuestion.title}
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                <EvidenceBadge type="open_question" />
                <CitationTag sourceId={activeQuestion.sourceId} onSelectSource={onSelectSource} />
              </div>
            </div>

            {/* Academic Framing */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '3px solid var(--terracotta)',
              padding: '1rem 1.25rem',
              borderRadius: '0 3px 3px 0',
              marginBottom: '1.5rem'
            }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--stone)', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>
                Context & Scholarly Origin: {activeQuestion.hypothesisOrigin}
              </span>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>
                {activeQuestion.framing}
              </p>
            </div>

            {/* What is known vs What awaits verification */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
              
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: '3px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--stone)', letterSpacing: '0.04em', display: 'block', marginBottom: '0.4rem' }}>
                  What Primary Records Document
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  {activeQuestion.whatIsKnown}
                </p>
              </div>

              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: '3px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--terracotta)', letterSpacing: '0.04em', display: 'block', marginBottom: '0.4rem' }}>
                  What Awaits Archival Verification
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  {activeQuestion.whatAwaitsVerification}
                </p>
              </div>

            </div>

            {/* Archive Stance */}
            <div style={{
              padding: '0.85rem 1rem',
              backgroundColor: 'var(--terracotta-light)',
              border: '1px solid var(--terracotta-border)',
              borderRadius: '3px',
              fontSize: '0.85rem',
              color: 'var(--stone)'
            }}>
              <strong>Archive Methodological Position:</strong> {activeQuestion.archiveStance}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
