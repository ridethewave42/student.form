const studentForm = document.getElementById('studentForm');
const highScores = document.getElementById('highscores');
const allStudents = document.getElementById('allStudents');

const students = [];

studentForm.addEventListener('submit', function(e){
    e.preventDefault();

    const courseName = document.getElementById('courseName').value;
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentUID').value;
    const studentMark = document.getElementById('studentMarks').value;
    const studentEmail = document.getElementById('studentEmail').value;

    const student = {
        courseName,
        studentName,
        studentUID,
        studentMarks,
        studentEmail
    }

    students.push(student);
    displayStudents();
})


function displayStudents(){
    allStudents.innerHTML='';
    highScores.innerHTML= '';
    students.forEach(student=>{
        const listItem= document.createElement('li');
        listItem.textContent= `Name: ${student.studentName},  Course: ${student.courseName},  UID: ${student.studentUID}, Marks: ${student.studentMarks},  Email: ${student.studentEmail}`
        allStudents.appendChild(listItem);

        if(student.studentMarks > 80){
            const highScoresItem = document.createElement('li');
            highScoresItem.textContent = `Name: ${student.studentName},  Course: ${student.courseName},  UID: ${student.studentUID}, Marks: ${student.studentMarks}, Email: ${student.studentEmail}`
            highScores.appendChild(highScoresItem);
    })
}