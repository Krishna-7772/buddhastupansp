import React from 'react';
import { SOURCES } from '../data/sources';

export const CitationTag = ({ sourceId, onSelectSource }) => {
  const source = SOURCES.find(s => s.id === sourceId);
  const displayText = source ? source.shortRef : `Ref: ${sourceId}`;

  const handleClick = (e) => {
    e.preventDefault();
    if (onSelectSource) {
      onSelectSource(sourceId);
    } else {
      const el = document.getElementById(`source-${sourceId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        el.style.backgroundColor = 'var(--terracotta-light)';
        setTimeout(() => {
          el.style.backgroundColor = 'var(--bg-card)';
        }, 2000);
      }
    }
  };

  return (
    <button
      type="button"
      className="citation-tag"
      onClick={handleClick}
      aria-label={`Source citation: ${displayText}. Click to inspect reference.`}
      title={`Inspect source: ${source ? source.title : sourceId}`}
    >
      [{displayText}]
    </button>
  );
};
