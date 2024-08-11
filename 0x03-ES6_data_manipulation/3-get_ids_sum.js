// 3-get_student_ids_sum.js
function getStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;