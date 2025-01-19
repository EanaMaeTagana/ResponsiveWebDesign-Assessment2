// node.js server

// variables

const express = require('express'); // import express module to create the server
const app = express(); // holds the server
const port = 3000; // set the port which will host the website, in this case 3000

// tells express to serve the static files from the folder "public"
app.use(express.static('public'));

// sets up the API when visiting /api/books, essentially serving the database to the user
app.get('/api/books', (req, res) => {
    // loads the database from the JSON file
    const works = require('./public/book-database.json'); 
    // shows the book information to the user
    res.json(works); 
});

// starts the server and listens for request
app.listen(port, () => {
    // logs the message when the server is running
    console.log(`Server running on: http://localhost:${port}`);
});
