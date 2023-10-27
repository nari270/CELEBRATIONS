const mongoose = require('mongoose');

// Define the database URL
const dbURL = 'mongodb://localhost/celebrations'; // Update with your database URL

// Create a connection to the MongoDB database
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Check for database connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Check for successful database connection
db.once('open', () => {
  console.log('Connected to the database');
});

// Export the Mongoose connection
module.exports = mongoose;
