const NameInput = document.getElementById("nameInput");
const WelcomeMessage = document.getElementById("welcomeMessage");

const studentForm = document.getElementById("studentForm");
const studentCourse = document.getElementById("courseInput");


NameInput.addEventListener('input', function() {

    WelcomeMessage.textContent = "Welcome, " + NameInput.value + "!";
});



studentForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const name = NameInput.value;
    const course = studentCourse.value;

    WelcomeMessage.textContent = "Registration successful! Name:" + name + ", Course: " + course;
});

