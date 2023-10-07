const showMenuBtn = document.querySelector('.hamburger__icon');
const hideMenuBtn = document.querySelector('.close__menu');
const layer = document.querySelector('.layer');
const menu = document.querySelector('.nav__items');

layer.addEventListener('click', (e) => {
    e.target.classList.remove('show');
    menu.classList.remove('show');
});

showMenuBtn.addEventListener('click', () => {
    layer.classList.add('show');
    menu.classList.add('show');
});

hideMenuBtn.addEventListener('click', () => {
    layer.classList.remove('show');
    menu.classList.remove('show');
});

menu.addEventListener('click', e => {
    if (e.target.classList.contains('nav__item')) {
        layer.classList.remove('show');
        e.target.parentElement.classList.remove('show');
    }
});