exports.up = function (knex) {
    return knex.schema.createTable('Reservation', (table) => {
      table.increments('id').primary();
      table.string('customerName').notNullable();
      table.dateTime('reservationTime').notNullable();
      // Add more table columns as needed
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Reservation');
  };
  