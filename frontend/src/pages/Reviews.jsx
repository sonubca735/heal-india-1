import React from 'react';
import { useEffect, useState } from 'react';
import ReviewCarousel from '../components/ReviewCarousel/ReviewCarousel.jsx';
import SectionHeader from '../components/SectionHeader/SectionHeader.jsx';
import { reviewsFallback } from '../data/siteData.js';
import { getReviews } from '../services/api.js';

function Reviews() {
  const [reviews, setReviews] = useState(reviewsFallback);

  useEffect(() => {
    getReviews().then((response) => setReviews(response.data.length ? response.data : reviewsFallback)).catch(() => setReviews(reviewsFallback));
  }, []);

  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeader center eyebrow="Patient reviews" title="Real journeys, calmer outcomes" text="International patients share their treatment, travel, and recovery experience with Heal India." />
        <ReviewCarousel reviews={reviews} />
        <div className="grid three review-mini">
          {reviews.map((review) => <article className="card" key={review._id}><img src={review.image} alt={review.name} /><h3>{review.name}</h3><p>{review.country} • {review.treatment}</p><strong>{'★'.repeat(review.rating)}</strong><p>{review.review}</p></article>)}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
