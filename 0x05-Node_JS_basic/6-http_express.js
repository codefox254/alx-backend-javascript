// 6-http_express.js
const express = require('express');

// Create an instance of Express
const app = express();

// Define the route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
