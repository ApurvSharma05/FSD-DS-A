# Login Page with Express + MongoDB

This folder contains a complete login/register app with:

- Frontend login page (HTML/CSS/JS)
- Express API backend
- MongoDB integration with Mongoose
- Password hashing via bcrypt
- JWT-based authentication

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env` from `.env.example` and adjust values:

   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/login_demo
   JWT_SECRET=change-me-in-production
   ```

3. Ensure MongoDB is running locally (or use MongoDB Atlas URI in `MONGO_URI`).

4. Start server:

   ```bash
   npm run dev
   ```

5. Open in browser:

   ```
   http://localhost:5000
   ```

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` (requires `Authorization: Bearer <token>`)
