const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');

// Removing the event listener for 'ham'
ham.removeEventListener('click', handleHamClick);

function handleHamClick() {
    ham.classList.toggle("active");
    menu.classList.toggle("on");
}
