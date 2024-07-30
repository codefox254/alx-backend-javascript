// Export a const instance of WeakMap named weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0);
    }

    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    if (count >= 5) {
        throw new Error('Endpoint load is high');
    }

    // Simulate API call
    console.log(`Calling ${endpoint.protocol}://${endpoint.name}`);
}

// Example usage:
const endpoint = { protocol: 'http', name: 'getUsers' };

try {
    for (let i = 0; i < 6; i++) {
        queryAPI(endpoint);
    }
} catch (error) {
    console.error(error.message);  // Output: Endpoint load is high
}

