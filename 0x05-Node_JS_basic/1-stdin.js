// 1-stdin.js

// Display initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input from stdin
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Remove any extra newline characters
  console.log(`Your name is: ${name}`);
  
  // End the process after showing the name
  process.exit();
});

// Display closing message when the program ends
process.on('exit', () => {
  console.log('This important software is now closing');
});
