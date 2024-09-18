// 4-http.js
const http = require('http');

// Create the server and define the response for every request
const app = http.createServer((req, res) => {
  // Set the correct content type (plain text)
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response message and end the response
  res.end('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

// Export the app variable
module.exports = app;

