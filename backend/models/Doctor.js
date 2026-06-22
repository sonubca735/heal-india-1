import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: { type: String, required: true },
    rating: { type: Number, default: 4.8 },
    hospital: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Doctor', doctorSchema);
