const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Define your routes here (e.g., menuRoutes and reservationRoutes)
const menuRoutes = require('./routes/menuRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

// Use the defined routes
app.use('/menu', menuRoutes);
app.use('/reservations', reservationRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
