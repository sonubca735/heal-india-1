import React from 'react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Stethoscope, X } from 'lucide-react';
import './Navbar.css';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/treatments', 'Treatments'],
  ['/doctors', 'Doctors'],
  ['/reviews', 'Reviews'],
  ['/contact', 'Contact'],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span><Stethoscope size={24} /></span> Heal India
        </Link>
        <button className="nav-toggle" type="button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'open' : ''}>
          {links.map(([path, label]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
