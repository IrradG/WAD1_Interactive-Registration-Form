const NameInput = document.getElementById('nameInput');
const WelcomeMessage = document.getElementById('welcomeMessage');


NameInput.addEventListener('input', function() {

    WelcomeMessage.textContent = "Welcome, " + NameInput.value + "!";
});