const form = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorField = document.getElementById('errorField');
const successField = document.getElementById('successField');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    let errorMessage = '';

    if (username.length < 5) {
        errorMessage += '- Username must be at least 5 characters long.<br>';
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(password)) {
        errorMessage += '- Password must contain at least 1 uppercase, 1 lowercase, and 1 number.';
    }
    if (errorMessage) {
        errorField.innerHTML = errorMessage;
        successField.innerHTML = '';
    } else {
        successField.innerHTML = "Form sunbmitted successfully!";
        errorField.innerHTML = '';
    }
})
