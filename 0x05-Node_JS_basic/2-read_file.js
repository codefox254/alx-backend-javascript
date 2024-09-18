// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split data by new lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check if the file has at least a header and some students
    if (lines.length < 2) {
      throw new Error('The database has no valid student entries.');
    }

    // Remove the header line and process the remaining lines
    const studentRecords = lines.slice(1);

    // Initialize an object to count students per field
    const fieldStudents = {};

    // Process each student record
    studentRecords.forEach((line) => {
      const studentData = line.split(',');
      const firstName = studentData[0].trim();
      const field = studentData[3].trim();

      if (firstName && field) {
        if (!fieldStudents[field]) {
          fieldStudents[field] = [];
        }
        fieldStudents[field].push(firstName);
      }
    });

    // Log the total number of students
    console.log(`Number of students: ${studentRecords.length}`);

    // Log the number of students per field and their names
    for (const field in fieldStudents) {
      if (fieldStudents.hasOwnProperty(field)) {
        const studentsInField = fieldStudents[field];
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
      }
    }
  } catch (err) {
    // If an error occurs (like file not found), throw an appropriate error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
