// Existing code...
var typed = new Typed('.text', {
    strings: ["Software Engineer"],
    typeSpeed: 25,
    backSpeed: 25,
    backDelay: 1500,
    loop: true
});

// Scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 80);
    //Remove toggle icon navbar
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Toggle icon navbar
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Light/Dark mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
    themeToggleBtn.textContent = currentTheme === 'dark-mode' ? '🌙' : '🌞';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light-mode';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
        themeToggleBtn.textContent = '🌙';
    } else {
        themeToggleBtn.textContent = '🌞';
    }
    localStorage.setItem('theme', theme);
});
