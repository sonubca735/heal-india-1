import {
  BadgeIndianRupee,
  Car,
  HeartPulse,
  Hotel,
  Languages,
  Map,
  Plane,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react';

export const heroStats = [
  { value: '12K+', label: 'Patients assisted' },
  { value: '120+', label: 'Partner hospitals' },
  { value: '45%', label: 'Average savings' },
  { value: '24/7', label: 'Care coordination' },
];

export const treatments = [
  {
    title: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
    description: 'Heart bypass, angioplasty, valve repair, and preventive cardiac care.',
    price: 'US: $55,000+ | India: from $6,500',
  },
  {
    title: 'Orthopedic',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    description: 'Joint replacement, spine care, sports injury repair, and rehabilitation.',
    price: 'US: $38,000+ | India: from $4,800',
  },
  {
    title: 'Dental Care',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80',
    description: 'Implants, smile design, crowns, veneers, and full-mouth restoration.',
    price: 'UK: $4,000+ | India: from $550',
  },
  {
    title: 'Cosmetic Surgery',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    description: 'Rhinoplasty, body contouring, hair transplant, and aesthetic treatments.',
    price: 'US: $12,000+ | India: from $1,900',
  },
  {
    title: 'Neurology',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80',
    description: 'Brain, spine, stroke, epilepsy, and advanced neuro-rehabilitation care.',
    price: 'US: $45,000+ | India: from $5,200',
  },
  {
    title: 'IVF Treatment',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=900&q=80',
    description: 'Fertility consultation, IVF cycles, ICSI, donor programs, and counseling.',
    price: 'US: $15,000+ | India: from $2,500',
  },
];

export const doctorsFallback = [
  {
    _id: '1',
    name: 'Dr. Aarya Mehta',
    specialty: 'Cardiac Surgeon',
    experience: '18 years',
    rating: 4.9,
    hospital: 'Apollo Heart Institute, Delhi',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
  },
  {
    _id: '2',
    name: 'Dr. Kabir Rao',
    specialty: 'Orthopedic Specialist',
    experience: '16 years',
    rating: 4.8,
    hospital: 'Fortis Bone & Joint Centre, Mumbai',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80',
  },
  {
    _id: '3',
    name: 'Dr. Nisha Kapoor',
    specialty: 'IVF Consultant',
    experience: '14 years',
    rating: 4.9,
    hospital: 'Nova Fertility Centre, Bengaluru',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80',
  },
  {
    _id: '4',
    name: 'Dr. Reyansh Sen',
    specialty: 'Neurologist',
    experience: '20 years',
    rating: 4.7,
    hospital: 'Max Neuro Sciences, Gurugram',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=80',
  },
];

export const reviewsFallback = [
  {
    _id: 'r1',
    name: 'Amelia Stone',
    country: 'United Kingdom',
    treatment: 'Knee Replacement',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    review:
      'Heal India handled my hospital appointment, airport pickup, and hotel stay. The care team made the entire journey simple.',
  },
  {
    _id: 'r2',
    name: 'Omar Khalid',
    country: 'UAE',
    treatment: 'Cardiac Surgery',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    review:
      'The doctor shortlist was excellent, transparent, and fast. I saved significantly while receiving world-class treatment.',
  },
  {
    _id: 'r3',
    name: 'Sofia Garcia',
    country: 'Spain',
    treatment: 'Dental Implants',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    review:
      'My dental treatment and city tour were beautifully coordinated. I always knew who to call and where to go.',
  },
];

export const tourismServices = [
  { title: 'Visa Support', icon: Plane, text: 'Medical visa guidance, document checklists, and hospital invitation letters.' },
  { title: 'Hotel Booking', icon: Hotel, text: 'Comfortable recovery-friendly stays near top hospitals.' },
  { title: 'Airport Pickup', icon: Car, text: 'Reliable arrival assistance with verified drivers and coordinators.' },
  { title: 'Translator Services', icon: Languages, text: 'Language support for consultations, billing, and travel.' },
  { title: 'Tour Packages', icon: Map, text: 'Gentle city experiences planned around recovery schedules.' },
];

export const aboutStats = [
  { title: 'Trusted Network', value: '120+', icon: ShieldCheck },
  { title: 'Doctors', value: '450+', icon: Stethoscope },
  { title: 'Global Patients', value: '35+', icon: Users },
  { title: 'Cost Advantage', value: '45%', icon: BadgeIndianRupee },
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=900&q=80',
];

export const faqs = [
  {
    question: 'How does Heal India choose hospitals?',
    answer: 'We shortlist accredited hospitals based on specialty strength, international patient support, doctor experience, and transparent pricing.',
  },
  {
    question: 'Can I get a treatment estimate before traveling?',
    answer: 'Yes. Share your reports and our team coordinates with hospitals to provide a preliminary treatment plan and estimated cost.',
  },
  {
    question: 'Do you help with travel and accommodation?',
    answer: 'Yes. We support medical visas, airport pickup, hotels, translators, and recovery-friendly tourism planning.',
  },
];

export const HeartPulseIcon = HeartPulse;
