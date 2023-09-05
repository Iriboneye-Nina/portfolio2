/*----menu show------*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/*------ Remove Menu Mobile ----*/
const navlink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListerner('click', linkAction))
/*-----------SCROLL SECTIONS ACTIVE LINK----------*/
const sections = document.querySelectorAll('section[id]')
window.addEventListerner('scroll',scrollActive)
function scrollActive(){
    const scrolly = window.pageYoffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsettop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classlist.add('active')   
        }else{
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
    }
    })
}
/*------------ SCROLL REVEAL ANIMATION--------*/
const sr = scrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/*SCROLL HOME*/
sr.reveal('.home_title', {})
sr.reveal('.home_title', {delay:200})
sr.reveal('.home_title', {origin:'right',delay: 400})
/*SCROLL ABOUT*/
sr.reveal('.about_img', {delay: 500})
sr.reveal('.about_subtitle', {delay: 300})
sr.reveal('.about_profession', {delay: 400})
sr.reveal('.about_text', {delay: 500})
sr.reveal('.about_social-icon', {delay: 600, interval: 200})
/*SCROLL SKILLS*/
sr.reveal('.skills-subtitle', {})
sr.reveal('.skills-name', {distance: '20px', delay: 50, interval})
sr.reveal('.skills-img', {delay:400})
/*-----SCROLL PORTFOLIO*/
sr.reveal('.portfolio_img',{interval: 200})
/*CROLL CONTACT*/
sr.reveal('.contact-subtitle', {})
sr.reveal('.portfolio_text',{interval:200})
sr.reveal('.portfolio_input',{delay:200})
sr.reveal('.portfolio_button',{interval:200})