// Define and export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  if (!(endpoint && typeof endpoint === 'object' && 'protocol' in endpoint && 'name' in endpoint)) {
    throw new Error('Invalid endpoint');
  }

  // Initialize or update the count for the endpoint in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for this endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count exceeds the threshold
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Simulate an API call (you can replace this with actual API logic if needed)
  console.log(`Calling ${endpoint.protocol}://${endpoint.name}`);
}
