function calculateNumber(type, a, b) {
  // Round a and b to the nearest integer
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Perform operation based on the type
  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    // Handle division by 0 case
    if (roundedB === 0) {
      return 'Error';
    }
    return roundedA / roundedB;
  } else {
    // Handle invalid operation types
    throw new Error('Invalid operation type');
  }
}

// Export the function as default export
export default calculateNumber;
