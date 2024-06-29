const form = document.getElementById('registration-form');
const studentDataDiv = document.getElementById('student-data');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rollno = document.getElementById('rollno').value;
    const course = document.getElementById('course').value;

    const studentData = `
        <h2>Student Data:</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Roll No: ${rollno}</p>
        <p>Course: ${course}</p>
    `;

    studentDataDiv.innerHTML = studentData;
});