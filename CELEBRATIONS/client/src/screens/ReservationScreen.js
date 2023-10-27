import React from 'react';
import ReservationForm from '../components/ReservationForm/ReservationForm';

const ReservationScreen = () => {
  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>
      <p>Fill out the form below to reserve your table:</p>
      <ReservationForm />
    </div>
  );
};

export default ReservationScreen;
