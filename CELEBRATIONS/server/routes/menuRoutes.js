const express = require('express');
const router = express.Router();

// Sample menu data (replace with your actual data)
const menuItems = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
  { id: 3, name: 'Item 3', description: 'Description of Item 3' },
];

// Get all menu items
router.get('/', (req, res) => {
  res.json(menuItems);
});

// Get a specific menu item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const menuItem = menuItems.find(item => item.id === id);
  if (menuItem) {
    res.json(menuItem);
  } else {
    res.status(404).json({ message: 'Menu item not found' });
  }
});

// Add a new menu item
router.post('/', (req, res) => {
  const newItem = req.body; // Assuming the request body contains the new item
  newItem.id = menuItems.length + 1; // Generate a unique ID (replace with your logic)
  menuItems.push(newItem);
  res.status(201).json(newItem);
});

// Update a menu item by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body; // Assuming the request body contains the updated item
  const index = menuItems.findIndex(item => item.id === id);
  if (index !== -1) {
    menuItems[index] = { ...menuItems[index], ...updatedItem };
    res.json({ message: 'Menu item updated' });
  } else {
    res.status(404).json({ message: 'Menu item not found' });
  }
});

// Delete a menu item by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = menuItems.findIndex(item => item.id === id);
  if (index !== -1) {
    menuItems.splice(index, 1);
    res.json({ message: 'Menu item deleted' });
  } else {
    res.status(404).json({ message: 'Menu item not found' });
  }
});

module.exports = router;
