import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Treatments from './pages/Treatments.jsx';
import Doctors from './pages/Doctors.jsx';
import Reviews from './pages/Reviews.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
