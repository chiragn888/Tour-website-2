const ham = document.querySelector('.ham');
const menu =.querySelector('.menu');

// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve values from the login form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hardcodedPassword = '12345';

    // Compare the password and handle login
    if (password === hardcodedPassword) {
        // Redirect to places.html upon successful login
        window.location.href = 'places.html';
    } else {
        // Display an error message if the login fails
        alert('Incorrect password. Please try again.');
    }
}

// Add event listener to the login form
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
