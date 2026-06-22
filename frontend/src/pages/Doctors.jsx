import React from 'react';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard/DoctorCard.jsx';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner.jsx';
import SectionHeader from '../components/SectionHeader/SectionHeader.jsx';
import { doctorsFallback } from '../data/siteData.js';
import { getDoctors } from '../services/api.js';

function Doctors() {
  const [doctors, setDoctors] = useState(doctorsFallback);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDoctors = async () => {
      setLoading(true);
      try {
        const response = await getDoctors(search);
        setDoctors(response.data.length ? response.data : doctorsFallback);
      } catch {
        setDoctors(doctorsFallback.filter((doctor) => doctor.name.toLowerCase().includes(search.toLowerCase()) || doctor.specialty.toLowerCase().includes(search.toLowerCase())));
      } finally {
        setLoading(false);
      }
    };
    const timer = setTimeout(loadDoctors, 250);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeader center eyebrow="Best doctors" title="Find experienced specialists" text="Search by doctor name, specialty, or hospital and request a consultation review." />
        <label className="search-box"><Search /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search doctors or specialties" /></label>
        {loading ? <LoadingSpinner label="Finding doctors" /> : <div className="grid four">{doctors.map((doctor) => <DoctorCard key={doctor._id} doctor={doctor} />)}</div>}
      </div>
    </section>
  );
}

export default Doctors;
