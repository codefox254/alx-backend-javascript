// 5-http.js
const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

// Database file path (passed as an argument)
const databaseFile = process.argv[2];

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Parse the URL to determine the path
  const reqUrl = url.parse(req.url, true).pathname;

  // Set the content type to plain text for all responses
  res.setHeader('Content-Type', 'text/plain');

  // Handle the root path ('/')
  if (reqUrl === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
  // Handle the '/students' path
  else if (reqUrl === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    // Call countStudents function to get and display student data
    countStudents(databaseFile)
      .then(() => {
        res.end(); // End the response after processing students
      })
      .catch((error) => {
        res.end(error.message); // Display error message if database cannot be loaded
      });
  } else {
    // If the path is neither '/' nor '/students', return a 404 Not Found
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
