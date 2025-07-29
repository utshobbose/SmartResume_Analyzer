require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Connect MongoDB
connectDB();

// Public Routes
app.use('/api/auth', authRoutes);

app.get('/test', (req, res) => {
  res.send('Server Ok');
});

app.get('/', (req, res) => {
  res.send('Resume Analyzer Backend is running');
});

// Protected Route Example
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({
    msg: 'You are authenticated',
    user: req.user, // contains userId from JWT
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
