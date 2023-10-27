const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can set the port as needed

// Middleware to serve static files
app.use(express.static('client/public'));

// Define API routes
const menuRoutes = require('./server/routes/menuRoutes');
const reservationRoutes = require('./server/routes/reservationRoutes');

app.use('/api/menu', menuRoutes);
app.use('/api/reservation', reservationRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
