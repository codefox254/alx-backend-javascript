function getStudentIdsSum(students) {
  return students.reduce(
    (sum, student) => sum + student.id, // Properly formatted arrow function
    0
  );
}

export default getStudentIdsSum;
