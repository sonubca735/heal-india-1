import React from 'react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/siteData.js';
import './FAQ.css';

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((item, index) => (
        <article className={`faq-item ${open === index ? 'open' : ''}`} key={item.question}>
          <button onClick={() => setOpen(open === index ? -1 : index)}>
            {item.question}<ChevronDown />
          </button>
          <p>{item.answer}</p>
        </article>
      ))}
    </div>
  );
}

export default FAQ;
