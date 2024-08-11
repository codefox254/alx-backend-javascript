import createInt8TypedArray from './5-typed_arrays'; // Adjust the path if needed

describe('createInt8TypedArray', () => {
  test('should create an Int8Array with the correct value at the specified position', () => {
    const length = 10;
    const position = 5;
    const value = 42;
    const buffer = createInt8TypedArray(length, position, value);
    const int8Array = new Int8Array(buffer);

    expect(int8Array[position]).toBe(value);
  });

  test('should throw an error if position is out of range', () => {
    const length = 10;
    const invalidPosition = 15; // Out of range
    const value = 42;

    expect(() => createInt8TypedArray(length, invalidPosition, value))
      .toThrow('Position outside range');
  });

  test('should throw an error if position is negative', () => {
    const length = 10;
    const negativePosition = -1; // Out of range
    const value = 42;

    expect(() => createInt8TypedArray(length, negativePosition, value))
      .toThrow('Position outside range');
  });
});
