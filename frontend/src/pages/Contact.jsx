import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm.jsx';
import SectionHeader from '../components/SectionHeader/SectionHeader.jsx';
import { sendContactMessage } from '../services/api.js';

const blank = { name: '', email: '', phone: '', message: '' };

function Contact() {
  const [form, setForm] = useState(blank);
  const [status, setStatus] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    try {
      await sendContactMessage(form);
      setStatus('Message saved successfully.');
      setForm(blank);
    } catch {
      setStatus('Backend is offline, but the form is ready to connect.');
    }
  };

  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeader center eyebrow="Contact" title="Start your India treatment plan" text="Send your details and our coordinator will help shortlist hospitals, doctors, and travel options." />
        <div className="contact-grid">
          <form className="form-card" onSubmit={submit}>
            <h3>Contact Form</h3>
            <input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" required />
            <input name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="Email" required />
            <input name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" required />
            <textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" required />
            <button className="btn primary">Send Message</button>
            {status && <p className="status">{status}</p>}
          </form>
          <div className="contact-side">
            <article><MapPin /> New Delhi, India</article>
            <article><Phone /> +91 98765 43210</article>
            <article><Mail /> care@healindia.com</article>
            <iframe title="Google Maps - New Delhi" src="https://www.google.com/maps?q=New%20Delhi%20India&output=embed" loading="lazy" />
          </div>
        </div>
        <div className="section-narrow"><AppointmentForm /></div>
      </div>
    </section>
  );
}

export default Contact;
