function getStudentsByLocation(students, city) {
  return students.filter(
    (student) => student.location === city, // Added trailing comma
  );
}

export default getStudentsByLocation;
