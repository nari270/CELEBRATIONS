const mongoose = require('mongoose');

// Define the Menu schema
const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create a Menu model
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
