const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.use__elem-percent'),
    lines = document.querySelectorAll('.use__elem-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})