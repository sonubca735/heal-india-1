import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
import './DoctorCard.css';

function DoctorCard({ doctor }) {
  return (
    <article className="card doctor-card reveal">
      <img src={doctor.image} alt={doctor.name} />
      <div>
        <h3>{doctor.name}</h3>
        <p>{doctor.specialty}</p>
        <div className="pill-row">
          <span>{doctor.experience}</span>
          <span><Star size={16} fill="currentColor" /> {doctor.rating}</span>
        </div>
        <p className="muted">{doctor.hospital}</p>
        <button className="btn outline"><MessageCircle size={18} /> Review</button>
      </div>
    </article>
  );
}

export default DoctorCard;
