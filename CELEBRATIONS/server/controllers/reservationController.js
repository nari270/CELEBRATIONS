// Import the Reservation model
const Reservation = require('../models/Reservation');

// Controller for handling reservation-related operations

// Get all reservations
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a specific reservation by ID
const getReservationById = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Add a new reservation
const createReservation = async (req, res) => {
  const { name, date } = req.body;
  try {
    const reservation = new Reservation({ name, date });
    const savedReservation = await reservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a reservation by ID
const updateReservation = async (req, res) => {
  const { id } = req.params;
  const { name, date } = req.body;
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(id, { name, date }, { new: true });
    if (!updatedReservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(updatedReservation);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a reservation by ID
const deleteReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReservation = await Reservation.findByIdAndRemove(id);
    if (!deletedReservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json({ message: 'Reservation deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
};
