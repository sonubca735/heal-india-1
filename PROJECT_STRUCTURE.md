# Heal India Code Structure

Open `heal-india.code-workspace` in VS Code.

## Frontend - React

```text
frontend/
├── index.html
├── package.json
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── assets/
    ├── components/
    │   ├── Navbar/
    │   │   ├── Navbar.jsx
    │   │   └── Navbar.css
    │   ├── Footer/
    │   │   ├── Footer.jsx
    │   │   └── Footer.css
    │   ├── TreatmentCard/
    │   ├── DoctorCard/
    │   ├── ReviewCarousel/
    │   ├── AppointmentForm/
    │   ├── FAQ/
    │   └── HospitalGallery/
    ├── data/
    │   └── siteData.js
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Treatments.jsx
    │   ├── Doctors.jsx
    │   ├── Reviews.jsx
    │   └── Contact.jsx
    ├── services/
    │   └── api.js
    └── styles/
        └── global.css
```

## Backend - Node.js + Express

```text
backend/
├── server.js
├── package.json
├── config/
│   └── db.js
├── controllers/
│   ├── appointmentController.js
│   ├── contactController.js
│   ├── doctorController.js
│   └── reviewController.js
├── models/
│   ├── Appointment.js
│   ├── Contact.js
│   ├── Doctor.js
│   └── Review.js
└── routes/
    ├── appointmentRoutes.js
    ├── contactRoutes.js
    ├── doctorRoutes.js
    └── reviewRoutes.js
```

## Run Commands

Frontend:

```bash
cd frontend
npm.cmd run dev
```

Backend:

```bash
cd backend
npm.cmd run dev
```
