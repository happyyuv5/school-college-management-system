document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to LOVING KIDS SCHOOL Portal");
});document.addEventListener("DOMContentLoaded", () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    function displayStudents() {
        const studentList = document.getElementById("student-list");
        studentList.innerHTML = students.map((student, index) =>
            `<li>${student.name} - ${student.course}
             <button onclick="deleteStudent(${index})">Delete</button>
            </li>`
        ).join('');
    }

    document.getElementById("register-btn").addEventListener("click", (e) => {
        e.preventDefault(); // Prevent page refresh
        const name = document.getElementById("name").value;
        const course = document.getElementById("course").value;

        if (name && course) {
            students.push({ name, course });
            localStorage.setItem("students", JSON.stringify(students));
            displayStudents();
        }
    });

    function deleteStudent(index) {
        students.splice(index, 1); // Remove student
        localStorage.setItem("students", JSON.stringify(students));
        displayStudents();
    }

    displayStudents();
});
document.addEventListener("DOMContentLoaded", () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    function displayStudents() {
        const studentList = document.getElementById("student-list");
        studentList.innerHTML = students.map((student, index) =>
            `<div class="student-card">
                <img src="assets/images/student-${index % 3 + 1}.jpg" alt="${student.name}">
                <h3>${student.name}</h3>
                <p>Course: ${student.course}</p>
            </div>`
        ).join('');
        updateProgress();
    }

    function updateProgress() {
        const progressFill = document.getElementById("progress-fill");
        const progressText = document.getElementById("progress-text");
        const progressPercentage = (students.length / 20) * 100; // Max 20 students for demo
        progressFill.style.width = `${progressPercentage}%`;
        progressText.innerText = `${students.length} Registered Students`;
    }

    document.getElementById("register-btn").addEventListener("click", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const course = document.getElementById("course").value;

        if (name && course) {
            students.push({ name, course });
            localStorage.setItem("students", JSON.stringify(students));
            displayStudents();
        }
    });

    document.getElementById("search-input").addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filteredStudents = students.filter((student) =>
            student.name.toLowerCase().includes(query)
        );

        const studentList = document.getElementById("student-list");
        studentList.innerHTML = filteredStudents.map((student, index) =>
            `<div class="student-card">
                <img src="assets/images/student-${index % 3 + 1}.jpg" alt="${student.name}">
                <h3>${student.name}</h3>
                <p>Course: ${student.course}</p>
            </div>`
        ).join('');
    });

    displayStudents();
});