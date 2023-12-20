// Шапка
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');

    if (window.scrollY > 200) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}

// Burger 

let navToggle = document.querySelector('#navToggle');
let nav = document.querySelector('#nav');
navToggle.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('show');
})

// Крестик при открытии меню
const burgerItem = document.querySelector('.burger__item');
burgerItem.addEventListener('click', function () {
    burgerItem.classList.toggle('active');
});

// Удаление классов при использовании burgerMenu

let menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('show');
        burgerItem.classList.remove('active')
    });
});

// Слайдер

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

