exports.seed = function (knex) {
    return knex('Reservation').insert([
      {
        customerName: 'John Doe',
        reservationTime: new Date('2023-11-15T18:00:00'),
      },
      {
        customerName: 'Jane Smith',
        reservationTime: new Date('2023-11-16T19:30:00'),
      },
      // Add more reservations as needed
    ]);
  };
  