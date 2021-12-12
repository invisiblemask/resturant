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

// Video button
const videoFile = document.getElementById('video-file')
    videoButton = document.getElementById('video-button')
    videoIcon = document.getElementById('video-icon')

// Play Pause
function playPause() {
    if(videoFile.paused){
        videoFile.play()

        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else {
        videoFile.pause()

        videoIcon.classList.add('ri-play-line')
        videoIcon.classList.remove('ri-pause-line')
    }
}
videoButton.addEventListener('click', playPause)

// Stop video
function stopVideo() {
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
videoFile.addEventListener('ended', stopVideo)

// Scroll reveal animation
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.hero__data, .info__data,
           .store__img,
           .special__container,
           .dish__container, .service__icons,
           .review__container,
           .footer__data, .footer__rights,
           .special__container`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.store__data, 
           .store__wrapper,
           .event-info,
           .dish__container`,{
    origin: 'left',
})

sr.reveal(`.hero__img-overlay, 
           .video__content,
           .store__img-description,
           .event__data,
           .service__info`,{
    origin: 'right',
    interval: 100,
})