function getAttendenceRate(student) {
    return (student.attendance.filter(e => e === true).length / student.attendance.length) * 100
}
function getAvgScore(student) {
    return student.testScores.reduce((percent, curr) => percent + curr) / student.testScores.length
}
 
function UnderPerformStudent(students) {
    return students.reduce((Obj, curr) => {
        let attendanceRate = getAttendenceRate(curr)
        let avgScore = getAvgScore(curr)
        if (attendanceRate < 80 && avgScore < 70) {
            Obj.push({ name: curr.name, attendanceRate, avgScore })
        }
        return Obj
    }
        , [])
}