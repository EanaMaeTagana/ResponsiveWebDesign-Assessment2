const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// API route to serve JSON data
app.get('/api/books', (req, res) => {
    const works = require('./public/book-database.json'); // Load the database
    res.json(works); // Send the JSON data
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
