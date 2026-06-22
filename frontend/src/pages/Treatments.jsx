import React from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader.jsx';
import TreatmentCard from '../components/TreatmentCard/TreatmentCard.jsx';
import { treatments } from '../data/siteData.js';

function Treatments() {
  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeader center eyebrow="Treatments" title="Explore affordable treatment categories" text="Each category includes hospital matching, doctor review, estimate coordination, and travel support." />
        <div className="grid three">{treatments.map((item) => <TreatmentCard key={item.title} treatment={item} />)}</div>
      </div>
    </section>
  );
}

export default Treatments;
