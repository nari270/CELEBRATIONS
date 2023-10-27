exports.seed = function (knex) {
    return knex('Menu').insert([
      {
        itemName: 'Burger',
        price: 10.99,
      },
      {
        itemName: 'Pizza',
        price: 12.99,
      },
      // Add more menu items as needed
    ]);
  };
  