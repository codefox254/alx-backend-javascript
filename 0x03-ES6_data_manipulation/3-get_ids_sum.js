function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0); // Ensure proper formatting for arrow function
} // Add a newline here if required by linting configuration

export default getStudentIdsSum;
