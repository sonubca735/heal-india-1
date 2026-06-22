import React from 'react';
import { ArrowRight } from 'lucide-react';
import './TreatmentCard.css';

function TreatmentCard({ treatment }) {
  return (
    <article className="card treatment-card reveal">
      <img src={treatment.image} alt={treatment.title} />
      <div>
        <h3>{treatment.title}</h3>
        <p>{treatment.description}</p>
        <strong>{treatment.price}</strong>
        <button className="text-btn">Learn more <ArrowRight size={18} /></button>
      </div>
    </article>
  );
}

export default TreatmentCard;
