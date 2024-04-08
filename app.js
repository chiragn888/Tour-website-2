const ham = document.querySelector('.ham-icon');
const menu = document.querySelector('.menu');

ham.addEventListener('click', function () {
    ham.classList.toggle("active");
    menu.classList.toggle("open");