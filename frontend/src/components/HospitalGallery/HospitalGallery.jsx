import React from 'react';
import { galleryImages } from '../../data/siteData.js';
import './HospitalGallery.css';

function HospitalGallery() {
  return (
    <div className="gallery">
      {galleryImages.map((image, index) => (
        <img key={image} src={image} alt={`Hospital gallery ${index + 1}`} />
      ))}
    </div>
  );
}

export default HospitalGallery;
