export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  // the eslint-disable-next-line no-restricted-syntax
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
