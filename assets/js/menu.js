// SHOW MENU
const navMenu = document.getElementById('nav-menu')
    navToggle = document.getElementById('nav-toggle')
    navClose = document.getElementById('nav-close')

// Show menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction () {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change header background
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Scroll reveal animation
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(
    `.special__container,
    .footer__data, 
    .footer__rights`,
{
    origin: 'top',
    interval: 100,
})

sr.reveal(
    `.dish__container`,
{
    origin: 'left',
})

sr.reveal(
    `.hero__img-overlay, 
    .video__content,
    .store__img-description,
    .event__data,
    .service__info`,{
    origin: 'right',
    interval: 100,
})