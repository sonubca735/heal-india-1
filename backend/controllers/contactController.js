import Contact from '../models/Contact.js';

export const createContactMessage = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All contact fields are required' });
    }

    const savedMessage = await Contact.create({ name, email, phone, message });
    res.status(201).json(savedMessage);
  } catch (error) {
    next(error);
  }
};
