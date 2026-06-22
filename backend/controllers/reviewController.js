import Review from '../models/Review.js';

const fallbackReviews = [
  {
    name: 'Amelia Stone',
    country: 'United Kingdom',
    treatment: 'Knee Replacement',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    review: 'Heal India handled my hospital appointment, airport pickup, and hotel stay. The care team made the entire journey simple.',
  },
  {
    name: 'Omar Khalid',
    country: 'UAE',
    treatment: 'Cardiac Surgery',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    review: 'The doctor shortlist was excellent and transparent. I saved significantly while receiving world-class treatment.',
  },
  {
    name: 'Sofia Garcia',
    country: 'Spain',
    treatment: 'Dental Implants',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    review: 'My dental treatment and city tour were beautifully coordinated. I always knew who to call and where to go.',
  },
];

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews.length ? reviews : fallbackReviews);
  } catch (error) {
    next(error);
  }
};
