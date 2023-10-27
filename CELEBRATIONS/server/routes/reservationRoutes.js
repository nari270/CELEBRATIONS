const express = require('express');
const router = express.Router();

// Sample reservation data (replace with your actual data)
const reservations = [
  { id: 1, name: 'Reservation 1', date: '2023-01-01' },
  { id: 2, name: 'Reservation 2', date: '2023-01-15' },
  { id: 3, name: 'Reservation 3', date: '2023-02-10' },
];

// Get all reservations
router.get('/', (req, res) => {
  res.json(reservations);
});

// Get a specific reservation by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const reservation = reservations.find(item => item.id === id);
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
});

// Add a new reservation
router.post('/', (req, res) => {
  const newReservation = req.body; // Assuming the request body contains the new reservation
  newReservation.id = reservations.length + 1; // Generate a unique ID (replace with your logic)
  reservations.push(newReservation);
  res.status(201).json(newReservation);
});

// Update a reservation by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedReservation = req.body; // Assuming the request body contains the updated reservation
  const index = reservations.findIndex(item => item.id === id);
  if (index !== -1) {
    reservations[index] = { ...reservations[index], ...updatedReservation };
    res.json({ message: 'Reservation updated' });
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
});

// Delete a reservation by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = reservations.findIndex(item => item.id === id);
  if (index !== -1) {
    reservations.splice(index, 1);
    res.json({ message: 'Reservation deleted' });
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
});

module.exports = router;
