// RESPONSIVE MENU MOBILE
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

// NAVBAR SCROLL ANIMATION
const body = document.body;
const header = document.querySelector("header");
const main = document.querySelector("main");
const headerHeight = document.querySelector("header").offsetHeight;

main.style.top = headerHeight + "px";

let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll - lastScroll > 0) {
        header.classList.add("scroll-down");
        header.classList.remove("scroll-up");
    } else {
        header.classList.add("scroll-up");
        header.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
})

// SCROLL REVEAL
window.revealitens = ScrollReveal({ reset: true })

// SCROLL REVEAL ABOUT-ME
revealitens.reveal('.apresentacao', {
    duration: 1000,
    distance: '90px'
})
revealitens.reveal('.h2-apresentacao', {
    duration: 800,
    distance: '60px',
    origin: 'left',
})
revealitens.reveal('.articles', {
    duration: 1000,
    distance: '90px',
})

// SCROLL REVEAL PARAGRAPHS
revealitens.reveal('.paragraph-articles', {
    duration: 1000,
    distance: '90px',
})


// SCROLL REVEAL CARD-SKILLS
revealitens.reveal('.skills', {
    duration: 1000,
    distance: '90px',
    origin: 'bottom'
})
revealitens.reveal('.card1', {
    duration: 600,
    distance: '90px',
    delay: 400,
    origin: 'left'
})
revealitens.reveal('.card2', {
    duration: 600,
    distance: '180px',
    delay: 500,
    origin: 'left'
})
revealitens.reveal('.card3', {
    duration: 600,
    delay: 600,
    distance: '360px',
    origin: 'left'
})
revealitens.reveal('.skills', {
    duration: 1000,
    distance: '90px',
    origin: 'bottom',
    delay: 700,
})
revealitens.reveal('.card4', {
    duration: 600,
    distance: '90px',
    delay: 800,
    origin: 'left'
})
revealitens.reveal('.card5', {
    duration: 600,
    distance: '180px',
    delay: 900,
    origin: 'left'
})
revealitens.reveal('.card6', {
    duration: 600,
    delay: 1000,
    distance: '360px',
    origin: 'left'
})

// SMOOTH SCROOLLING
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1, function () {
                window.location.hash = hash;
            });
        }
    })
});