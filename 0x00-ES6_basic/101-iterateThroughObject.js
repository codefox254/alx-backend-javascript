export default function iterateThroughObject(reportWithIterator) {
  // Convert iterator to an array and join with '|'
  return Array.from(reportWithIterator).join(' | ');
}

