/* menu icon navbar*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* scroll section active link*/
let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");
window.onscroll=()=>{   

    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            });
        }
    });

    /* navbar header sticky */
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100);

    /* remove menu icon when click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
/* progress bar */
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#experience-line-process").css("width", "3%");
	$(".spf").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#experience-line-process").css("width", "25%");
	$(".freelance").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#experience-line-process").css("width", "50%");
	$(".selin").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#experience-line-process").css("width", "75%");
    $(".ayudante").addClass("active").siblings().removeClass("active");
	
});

$(".step05").click( function() {
	$("#experience-line-process").css("width", "100%");
	$(".muon").addClass("active").siblings().removeClass("active");
});

/* dark light mode */
let darkModeIcon=document.querySelector('#darkMode-icon');
darkModeIcon.onclick=()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}
/* scroll reveal */
ScrollReveal({ 
    reset: true,
    distance:'40px',
    duration:2000,
    delay:200
 });
 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .studies-container, .portfolio-box, #experience-progress-content-section', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
 /*MODAL */
 const btnAbrirModal=document.querySelector("#btn-abrir-modal");
 const btnCerrarModal=document.querySelector("#btn-cerrar-modal");
 const btnModal=document.querySelector("#modal");

 btnAbrirModal.addEventListener("click",()=>{
    btnModal.showModal();
 });

 btnCerrarModal.addEventListener("click",()=>{
    btnModal.close();
 });