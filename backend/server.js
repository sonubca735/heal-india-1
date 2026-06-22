import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from 'express';
import morgan from 'morgan';
import connectDB from './config/db.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'Heal India API is running' });
});

app.use('/api/contact', contactRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/reviews', reviewRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

// Central error handler keeps API responses consistent for the frontend.
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message || 'Server error',
  });
});

app.listen(PORT, () => {
  console.log(`Heal India backend running on http://localhost:${PORT}`);
});
