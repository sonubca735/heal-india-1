import React from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader.jsx';
import { aboutStats } from '../data/siteData.js';

function About() {
  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeader eyebrow="About Heal India" title="A care-first bridge between global patients and Indian healthcare" text="Heal India helps foreign patients discover affordable, high-quality treatment in India with transparent information and travel support." />
        <div className="about-grid">
          <article><h3>Mission</h3><p>Make trusted Indian healthcare easier to access for international patients through verified doctors, fair estimates, and responsive coordination.</p></article>
          <article><h3>Vision</h3><p>Become the most dependable medical tourism companion for patients seeking quality treatment and meaningful recovery experiences in India.</p></article>
          <article><h3>Why India?</h3><p>India combines internationally trained doctors, advanced hospitals, English-speaking teams, and major cost advantages across complex treatments.</p></article>
        </div>
        <div className="stats-card-grid">
          {aboutStats.map((item) => {
            const Icon = item.icon;
            return <article key={item.title}><Icon /><strong>{item.value}</strong><span>{item.title}</span></article>;
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
