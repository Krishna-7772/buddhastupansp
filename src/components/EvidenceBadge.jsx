import React from 'react';
import { EVIDENCE_TYPES } from '../data/sources';

export const EvidenceBadge = ({ type, showTooltip = true }) => {
  const meta = EVIDENCE_TYPES[type] || {
    label: type || "Unclassified",
    badgeClass: "badge-primary",
    description: "Documentation record"
  };

  return (
    <span 
      className={`evidence-badge ${meta.badgeClass}`}
      title={showTooltip ? meta.description : undefined}
      aria-label={`Evidence level: ${meta.label}`}
    >
      {meta.label}
    </span>
  );
};
