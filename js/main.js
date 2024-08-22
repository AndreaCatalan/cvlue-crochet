/*== show menu ==*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      
    //menu show//
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
    //menu hidden//
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*== remove menu mobile ==*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    // click nav__link = remove show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*== shadow header ==*/
const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*== swiper favorites ==*/
const swiperFavorites = new Swiper('.favorites__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
})

/*== show scroll up ==*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*== social section & active link ==*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href*=' +sectionId + ']').classList.add('active-link')
    }else{
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
    })
}
window.addEventListener('scroll', scrollActive);

/*== scroll reveal animation ==*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true, 
})

sr.reveal('.home__data, .favorites__container, .footer__container')
sr.reveal('.home__circle, .home__img', {delay: 600, scale: .10})
sr.reveal('.home__knit-1, .home__knit-2, .home__knit-6', {delay: 1000, interval: 100})
sr.reveal('.home__knit-4', {delay: 1200})
sr.reveal('.home__knit-3', {delay: 1400,})
sr.reveal('.home__knit-5, .home__knit-7', {delay: 1600})
sr.reveal('.care__img, .contact__img', {origin: 'left'})
sr.reveal('.care__list, .contact__data', {origin: 'right'})
sr.reveal('.banner__item, .products__card', {interval: 100})