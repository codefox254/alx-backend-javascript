function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id); // Added parentheses around arrow function argument
}

export default getListStudentIds;
