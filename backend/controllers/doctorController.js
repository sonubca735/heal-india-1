import Doctor from '../models/Doctor.js';

const fallbackDoctors = [
  {
    name: 'Dr. Aarya Mehta',
    specialty: 'Cardiac Surgeon',
    experience: '18 years',
    rating: 4.9,
    hospital: 'Apollo Heart Institute, Delhi',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Dr. Kabir Rao',
    specialty: 'Orthopedic Specialist',
    experience: '16 years',
    rating: 4.8,
    hospital: 'Fortis Bone & Joint Centre, Mumbai',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Dr. Nisha Kapoor',
    specialty: 'IVF Consultant',
    experience: '14 years',
    rating: 4.9,
    hospital: 'Nova Fertility Centre, Bengaluru',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Dr. Reyansh Sen',
    specialty: 'Neurologist',
    experience: '20 years',
    rating: 4.7,
    hospital: 'Max Neuro Sciences, Gurugram',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=80',
  },
];

export const getDoctors = async (req, res, next) => {
  try {
    const { search = '' } = req.query;
    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { specialty: { $regex: search, $options: 'i' } },
            { hospital: { $regex: search, $options: 'i' } },
          ],
        }
      : {};

    const doctors = await Doctor.find(query).sort({ rating: -1 });
    res.json(doctors.length ? doctors : fallbackDoctors);
  } catch (error) {
    next(error);
  }
};
