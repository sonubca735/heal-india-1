import React from 'react';
import './SectionHeader.css';

function SectionHeader({ eyebrow, title, text, center }) {
  return (
    <div className={`section-header ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default SectionHeader;
