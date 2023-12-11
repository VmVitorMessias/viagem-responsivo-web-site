const menuToggle = document.querySelector('.nav__toggle'),
    navMenu = document.querySelector('.nav__menu'),
    navLink = document.querySelectorAll('.nav__link');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
};

const linkAction = () => {
    const navMenu = document.querySelector('.nav__menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach(link => {
    link.addEventListener('click', linkAction);
});
