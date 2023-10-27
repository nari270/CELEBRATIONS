// api.js - A service for making API requests

// Example function to fetch menu items from the server
export async function fetchMenuItems() {
    try {
      const response = await fetch('/api/menu');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch menu items');
      }
    } catch (error) {
      throw error;
    }
  }
  
  // Example function to submit a reservation to the server
  export async function submitReservation(reservationData) {
    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to submit reservation');
      }
    } catch (error) {
      throw error;
    }
  }
  