import Appointment from '../models/Appointment.js';

export const createAppointment = async (req, res, next) => {
  try {
    const { name, email, phone, country, treatment, message } = req.body;

    if (!name || !email || !phone || !country || !treatment) {
      return res.status(400).json({ message: 'Required appointment fields are missing' });
    }

    const appointment = await Appointment.create({ name, email, phone, country, treatment, message });
    res.status(201).json(appointment);
  } catch (error) {
    next(error);
  }
};
