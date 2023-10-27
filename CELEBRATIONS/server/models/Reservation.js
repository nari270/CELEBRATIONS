const mongoose = require('mongoose');

// Define the Reservation schema
const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
});

// Create a Reservation model
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
