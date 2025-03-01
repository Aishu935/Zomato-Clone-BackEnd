const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', authMiddleware, restaurantRoutes); // Protect the restaurant routes with auth

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});