function getStudentsByLocation(students, city) {
  return students.filter(
    (student) => student.location === city
  ); // Split line to conform to max-len rule
}

export default getStudentsByLocation;
