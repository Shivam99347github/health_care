// Import required modules
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();

// Serve static files (HTML, CSS, JavaScript) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});