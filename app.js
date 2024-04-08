const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');

ham.addEventListener('click' , function(){
    ham.classList.toggle("active")
    menu.classList.toggle("on")
})

// Add a function to handle the login form submission event.
function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the username and password input values
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Check if the username and password input values match the hardcoded "12345"
    if (username === '12345' && password === '12345') {
        // Redirect to places.html upon successful authentication
        window.location.href = 'places.html';
    } else {
        // Display an error message if the credentials are incorrect
        alert('Incorrect username or password. Please try again.');
    }
}

// Replace the existing event listener with the one provided in the plan