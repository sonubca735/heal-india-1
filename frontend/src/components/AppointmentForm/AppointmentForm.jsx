import React from 'react';
import { useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import { bookAppointment } from '../../services/api.js';
import './AppointmentForm.css';

const blank = { name: '', email: '', phone: '', country: '', treatment: '', message: '' };

function AppointmentForm() {
  const [form, setForm] = useState(blank);
  const [status, setStatus] = useState('');

  const change = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    try {
      await bookAppointment(form);
      setStatus('Appointment request sent successfully.');
      setForm(blank);
    } catch {
      setStatus('Backend is offline, but the form is ready to connect.');
    }
  };

  return (
    <form className="form-card reveal" onSubmit={submit}>
      <h3><CalendarCheck /> Book a Free Consultation</h3>
      <div className="form-grid">
        <input name="name" value={form.name} onChange={change} placeholder="Full name" required />
        <input name="email" value={form.email} onChange={change} type="email" placeholder="Email" required />
        <input name="phone" value={form.phone} onChange={change} placeholder="Phone" required />
        <input name="country" value={form.country} onChange={change} placeholder="Country" required />
        <select name="treatment" value={form.treatment} onChange={change} required>
          <option value="">Select treatment</option>
          <option>Cardiology</option><option>Orthopedic</option><option>Dental Care</option>
          <option>Cosmetic Surgery</option><option>Neurology</option><option>IVF Treatment</option>
        </select>
        <textarea name="message" value={form.message} onChange={change} placeholder="Tell us about your case" />
      </div>
      <button className="btn primary">Request Appointment</button>
      {status && <p className="status">{status}</p>}
    </form>
  );
}

export default AppointmentForm;
