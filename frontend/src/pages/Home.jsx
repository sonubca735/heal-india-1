import React from 'react';
import { ArrowRight, HeartPulse, Plane, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm.jsx';
import FAQ from '../components/FAQ/FAQ.jsx';
import HospitalGallery from '../components/HospitalGallery/HospitalGallery.jsx';
import ReviewCarousel from '../components/ReviewCarousel/ReviewCarousel.jsx';
import SectionHeader from '../components/SectionHeader/SectionHeader.jsx';
import TreatmentCard from '../components/TreatmentCard/TreatmentCard.jsx';
import { heroStats, reviewsFallback, treatments, tourismServices } from '../data/siteData.js';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-badge"><ShieldCheck size={18} /> Trusted medical tourism support</span>
            <h1>Affordable Medical Treatment in India</h1>
            <p>Connect with top hospitals and doctors across India while our care coordinators help with travel, stay, language support, and recovery planning.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">Book Consultation</Link>
              <Link className="btn secondary" to="/treatments">Explore Treatments <ArrowRight size={18} /></Link>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=950&q=80" alt="Indian doctor consulting patient" />
            <div className="hero-floating"><HeartPulse /> 24/7 care coordination</div>
          </div>
        </div>
        <div className="container stats">
          {heroStats.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader center eyebrow="Treatments" title="World-class procedures at practical prices" text="Compare popular treatment categories and request a doctor-led estimate before you travel." />
          <div className="grid three">{treatments.slice(0, 3).map((item) => <TreatmentCard key={item.title} treatment={item} />)}</div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <SectionHeader eyebrow="Medical tourism" title="Everything around the treatment, handled" text="Heal India supports the full journey from visa documents to airport pickup and recovery-friendly sightseeing." />
            <div className="service-list">
              {tourismServices.map((service) => {
                const Icon = service.icon;
                return <article key={service.title}><Icon /><div><h3>{service.title}</h3><p>{service.text}</p></div></article>;
              })}
            </div>
          </div>
          <AppointmentForm />
        </div>
      </section>

      <section className="section soft">
        <div className="container assistant-banner">
          <div>
            <SectionHeader eyebrow="AI health guide" title="Chat with our medical triage assistant" text="Describe your symptoms and get a helpful guide on specialties, next steps, and what to discuss with a doctor." />
          </div>
          <div className="assistant-actions">
            <Link className="btn primary" to="/chat">Open Chatbot</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader center eyebrow="Patient stories" title="Patients choose India with confidence" />
          <ReviewCarousel reviews={reviewsFallback} />
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <SectionHeader eyebrow="Hospital gallery" title="Premium hospital environments" text="Modern facilities, international patient desks, private rooms, and recovery spaces." />
            <FAQ />
          </div>
          <HospitalGallery />
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div><Stethoscope /><h2>Ready to plan your treatment in India?</h2></div>
          <Link className="btn light" to="/contact">Start Consultation</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
