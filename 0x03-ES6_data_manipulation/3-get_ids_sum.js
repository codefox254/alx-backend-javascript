function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0); // Ensure proper formatting for arrow function
}

export default getStudentIdsSum; // Ensure a newline here
