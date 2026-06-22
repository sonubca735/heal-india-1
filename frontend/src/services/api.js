import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 12000,
});

export const getDoctors = (search = '') =>
  api.get('/doctors', { params: search ? { search } : {} });

export const getReviews = () => api.get('/reviews');

export const sendContactMessage = (payload) => api.post('/contact', payload);

export const bookAppointment = (payload) => api.post('/appointments', payload);

export const sendChatMessage = (messages) => api.post('/chat', { messages });

export default api;
