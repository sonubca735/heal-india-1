import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Stethoscope, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" to="/"><Stethoscope /> Heal India</Link>
          <p>A premium medical tourism platform connecting global patients with trusted Indian care.</p>
          <div className="socials">
            <a aria-label="Facebook" href="https://facebook.com"><Facebook /></a>
            <a aria-label="Instagram" href="https://instagram.com"><Instagram /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com"><Linkedin /></a>
            <a aria-label="Twitter" href="https://twitter.com"><Twitter /></a>
          </div>
        </div>
        <div>
          <h3>Quick links</h3>
          <Link to="/about">About</Link>
          <Link to="/treatments">Treatments</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p><MapPin size={18} /> New Delhi, India</p>
          <p><Phone size={18} /> +91 98765 43210</p>
          <p><Mail size={18} /> care@healindia.com</p>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>Monthly treatment guides and travel tips.</p>
          <form className="newsletter"><input placeholder="Email address" /><button>Join</button></form>
        </div>
      </div>
      <p className="copyright">Copyright © 2026 Heal India. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
