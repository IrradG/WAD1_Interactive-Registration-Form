const NameInput = document.getElementById("nameInput");
const WelcomeMessage = document.getElementById("welcomeMessage");

const studentForm = document.getElementById("studentForm");
const studentCourse = document.getElementById("courseInput");

const themeButton = document.getElementById("themeButton");



NameInput.addEventListener('input', function() {

    WelcomeMessage.textContent = "Welcome, " + NameInput.value + "!";
});





studentForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const name = NameInput.value;
    const course = studentCourse.value;

    WelcomeMessage.textContent = "Registration successful! Name:" + name + ", Course: " + course;
});


themeButton.addEventListener('click', function() {

    document.body.classList.toggle("dark");

});



document.addEventListener("keydown", function(event) {

if (event.key === "Escape") {
    WelcomeMessage.textContent = "";
}

});