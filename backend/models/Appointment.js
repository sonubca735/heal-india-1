import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    treatment: { type: String, required: true, trim: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model('Appointment', appointmentSchema);
