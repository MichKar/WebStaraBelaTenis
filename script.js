// NAVIGACE - Rolování (skrytí + objevení) celé horní lišty
let body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", function(){
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
        } else if (currentScroll >  lastScroll && !body.classList.contains("scroll-down")){
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
        } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) { 
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
        };
        lastScroll = currentScroll;
});



// HAMBURGER MENU - zobrazení/skytí položek menu
let menu = document.querySelector(".btn-menu");
let close = document.querySelector(".btn-close");
let menuAndClose = document.querySelector(".btn-menu-close");
let navigation = document.querySelector(".navigation");
let navbar = document.querySelector(".navbar");

close.style.display = "none";
navigation.classList.remove("open");

// Otevření menu
menu.addEventListener("click", function(){
        menu.style.display = "none";
        close.style.display = "block";
        navigation.classList.add("open"); 
        navbar.style.backgroundColor = "black";
});

//definice fce pro zavření menu
function closeMenu () {
        close.style.display = "none";
        menu.style.display = "block";
        navigation.classList.remove("open"); 
}

// Zavření menu při stisknutí tlačítka Zavřít
close.addEventListener("click", closeMenu);

// Zavření menu při kliknutí na položku v menu
navigation.addEventListener("click", closeMenu);

// Zavření menu při scrollování
window.addEventListener("scroll", function() {
        if (navigation.classList.contains("open")) {
            closeMenu();
        }
    });



    
//prolínání úvodních obrázků
const wrapper = document.querySelector('.wrapper');
let images = Array.from(wrapper.children);
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');

let currentIndex = 0;
images[currentIndex].classList.add('active');

// Posun obrázků vpravo
rightBtn.addEventListener("click", function() {
    images[currentIndex].classList.remove('active'); 
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active'); 
});

// Posun obrázků vlevo
leftBtn.addEventListener("click", function() {
        images[currentIndex].classList.remove('active'); 
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active'); 
});





// TENISOVÁ ŠKOLA - rozklik tlačítek
function showSection(className) {
        document.querySelectorAll('.tennis-school-competitions, .tennis-school-information, .tennis-school-rules, .tennis-school-contact')
          .forEach(el => el.style.display = 'none');
        document.querySelector('.' + className).style.display = 'block';
      }


//TENISOVÁ ŠKOLA - MODAL
function showModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }
    
    // Skrytí modalu
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }
    
    // Zavření modalu kliknutím mimo obsah
    window.onclick = function(event) {
        let modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }


    

// TENISOVÉ SOUSTŘEDĚNÍ - více info po rozkliknutí
let btnSoustredeni = document.querySelector(".btn-soustredeni");
let soustredeni3 = document.querySelector(".soustredeni3");

btnSoustredeni.addEventListener("click", function(){
        if (soustredeni3.style.display=="none"){
        soustredeni3.style.display = "block";
        btnSoustredeni.innerHTML="Méně informací &#9650";
        } else if (soustredeni3.style.display=="block"){
        soustredeni3.style.display = "none";
        btnSoustredeni.innerHTML="Více informací &#9660";
        } else {
        soustredeni3.style.display = "block" ;
        btnSoustredeni.innerHTML="Méně informací &#9650" ; 
        }
});

// TENISOVÝ OBCHOD - kliknutí na btn open nebo Telephone
let btnOpen = document.querySelector(".btn-open");
let btnPhone = document.querySelector(".btn-phone");

btnPhone.addEventListener("click", function(){
        btnPhone.classList.toggle("active");
        btnOpen.classList.toggle("active");
});

btnOpen.addEventListener("click", function(){
        btnPhone.classList.toggle("active");
        btnOpen.classList.toggle("active");
 });

// kliknutí na úspěch-foto, zvětší se a naopak
let uspechFoto = document.querySelectorAll(".uspech-foto");

uspechFoto.forEach(function(oneUspech){
        oneUspech.addEventListener("click", function(){
                oneUspech.classList.toggle("zoom");
        })});



// FOOTER - aktuální rok
document.querySelector(".year").innerText = (new Date().getFullYear());
