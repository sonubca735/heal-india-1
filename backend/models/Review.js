import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    treatment: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    image: { type: String, required: true },
    review: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Review', reviewSchema);
