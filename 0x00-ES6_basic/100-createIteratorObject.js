export default function createIteratorObject(report) {
  const { allEmployees } = report;
  
  function* employeeIterator() {
    for (const department of Object.values(allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return employeeIterator();
}

