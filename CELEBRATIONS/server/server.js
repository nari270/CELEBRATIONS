const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const menuRoutes = require('./routes/menuRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to your database (replace with your database URL)
mongoose.connect('mongodb://localhost/celebrations', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

// Routes
app.use('/menu', menuRoutes);
app.use('/reservations', reservationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
