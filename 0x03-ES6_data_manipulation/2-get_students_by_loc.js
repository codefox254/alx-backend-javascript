function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city); // Added parentheses around arrow function argument
}

export default getStudentsByLocation;
