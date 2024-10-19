function calculateNumber(a, b) {
  const roundedA = Math.round(a);  // Round the first number
  const roundedB = Math.round(b);  // Round the second number
  return roundedA + roundedB;      // Return the sum of rounded numbers
}

module.exports = calculateNumber;
