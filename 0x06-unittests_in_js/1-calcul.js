function calculateNumber(type, a, b) {
  const roundedA = Math.round(a); // Round first number
  const roundedB = Math.round(b); // Round second number

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;   // Perform addition for 'SUM'
    case 'SUBTRACT':
      return roundedA - roundedB;   // Perform subtraction for 'SUBTRACT'
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';  // Return error message when dividing by zero
      }
      return roundedA / roundedB;   // Perform division for 'DIVIDE'
    default:
      throw new Error('Invalid operation type');  // Handle invalid operation types
  }
}

module.exports = calculateNumber;  // Export the function for use in other files
