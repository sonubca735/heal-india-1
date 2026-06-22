import React from 'react';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './ReviewCarousel.css';

function ReviewCarousel({ reviews }) {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % reviews.length), 4200);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const move = (step) => setIndex((value) => (value + step + reviews.length) % reviews.length);

  return (
    <div className="review-wrap reveal">
      <button className="round-btn" onClick={() => move(-1)} aria-label="Previous"><ChevronLeft /></button>
      <article className="review-card">
        <img src={review.image} alt={review.name} />
        <div>
          <div className="stars">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} fill="currentColor" />)}</div>
          <p className="quote">“{review.review}”</p>
          <h3>{review.name}</h3>
          <span>{review.country} • {review.treatment}</span>
        </div>
      </article>
      <button className="round-btn" onClick={() => move(1)} aria-label="Next"><ChevronRight /></button>
    </div>
  );
}

export default ReviewCarousel;
