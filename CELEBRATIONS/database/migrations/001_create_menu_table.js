exports.up = function (knex) {
    return knex.schema.createTable('Menu', (table) => {
      table.increments('id').primary();
      table.string('itemName').notNullable();
      table.decimal('price').notNullable();
      // Add more table columns as needed
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Menu');
  };
  