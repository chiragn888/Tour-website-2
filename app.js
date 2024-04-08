const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');

ham.addEventListener('click' , function(){
    ham.classList.toggle("active")
    menu.classList.toggle("on")
})

// Add the handleLogin function to manage the login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the username and password from the form inputs
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Compare them to the hardcoded values "12345"
    if (username === "12345" && password === "12345") {
        // If the credentials match, redirect the user to places.html
        window.location.href = 'places.html';
    } else {
        // If the credentials do not match, display an alert
        alert('Incorrect login details');
    }