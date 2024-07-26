export default function createIteratorObject(report) {
  return (function* _() {
    // the eslint-disable-next-line no-restricted-syntax
    for (const department of Object.values(report.allEmployees)) {
      // the eslint-disable-next-line no-restricted-syntax
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
