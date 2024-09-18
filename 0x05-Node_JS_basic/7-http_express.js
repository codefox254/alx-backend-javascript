const express = require('express');
const fs = require('fs');
const path = require('path');

// Import the function from the previous file for reading students asynchronously
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = path.resolve(__dirname, 'database.csv');
  
  countStudents(databasePath)
    .then((data) => {
      res.write('This is the list of our students\n');
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.write('This is the list of our students\n');
      res.write(error.message);
      res.end();
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
