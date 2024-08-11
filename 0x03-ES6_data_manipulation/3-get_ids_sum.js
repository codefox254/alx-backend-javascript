function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0); // Ensured proper formatting for arrow function
}

export default getStudentIdsSum;
