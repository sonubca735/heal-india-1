# Heal India

Heal India is a responsive full-stack medical tourism website built with React, Node.js, Express, and MongoDB. It helps foreign patients explore Indian treatments, doctors, reviews, appointment booking, travel support, and contact options.

## Project Structure

```text
heal-india/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
└── backend/
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── server.js
    └── package.json
```

## Frontend Setup

```bash
cd heal-india/frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

## Quick Start On Windows

Double-click `start-website.bat` from the `heal-india` folder. It opens separate terminal windows for the backend and frontend.

## Open In VS Code

Open this file in VS Code:

```text
heal-india.code-workspace
```

You will see two folders:

- `frontend - React`
- `backend - Node Express`

For the complete code map, open `PROJECT_STRUCTURE.md`.

To run from VS Code, open Command Palette and run:

```text
Tasks: Run Task
```

Then select:

```text
Start Full Heal India Website
```

## Backend Setup

```bash
cd heal-india/backend
npm install
copy .env.example .env
npm run dev
```

The backend runs on `http://localhost:5000`.

## MongoDB Connection

1. Install MongoDB Community Server or use MongoDB Atlas.
2. Put your connection string in `backend/.env`.
3. Local example:

```env
MONGO_URI=mongodb://127.0.0.1:27017/heal-india
PORT=5000
CLIENT_URL=http://localhost:5173
```

## API Routes

- `POST /api/contact` stores contact messages.
- `POST /api/appointments` stores appointment requests.
- `GET /api/doctors` returns doctor data and supports `?search=cardiology`.
- `GET /api/reviews` returns patient reviews.

The frontend includes fallback doctors and reviews so the website still looks complete before MongoDB is seeded.
