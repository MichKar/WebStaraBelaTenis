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



    
//AREÁL - ÚVODNÍ FOTO
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail = document.querySelector(".thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");

thumbnail.appendChild(thumbnailItems[0]);

nextBtn.onclick = function() {
        moveSlider("next");
}
prevBtn.onclick = function() {
        moveSlider("prev");
}

function moveSlider(direction) {
        let sliderItems = sliderList.querySelectorAll(".item");
        let thumbnailItems = document.querySelectorAll(".thumbnail .item");
       
        if(direction === "next") {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add("next");
       } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add("prev");
       }

       slider.addEventListener("animationend", function() {
        if(direction === "next") {
                slider.classList.remove("next");        
        } else {
                slider.classList.remove("prev");
        }
       }, {once: true})
}







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



//TENISOVÉ ÚSPĚCHY - tlačítko více úspěchů
document.addEventListener("DOMContentLoaded", function () {
        const successItems = document.querySelectorAll(".success");
        const showMoreButton = document.getElementById("showMoreSuccess");
        let visibleCount = 5;
    
        // Zobrazí se prvních 5 úspěchů
        for (let i = 0; i < visibleCount; i++) {
            successItems[i].classList.add("visible");
        }
    
        showMoreButton.addEventListener("click", function () {
            let hiddenItems = Array.from(successItems).filter(item => !item.classList.contains("visible"));
            hiddenItems.slice(0, 5).forEach(item => item.classList.add("visible"));
            if (hiddenItems.length <= 5) {
                showMoreButton.style.display = "none";
            }
        });
    });


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
