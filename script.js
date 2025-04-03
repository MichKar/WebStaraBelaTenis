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



//CENÍK
let summerPrice = document.querySelector(".prices-header .summer");
let winterPrice = document.querySelector(".prices-header .winter");
let summerCard = document.querySelector(".card-summer");
let winterCard = document.querySelector(".card-winter");
let originalDisplay = getComputedStyle(winterCard).display;

function toggleSeason(isWinter) {
        if (isWinter) {
            summerPrice.classList.remove("active-price-header");
            winterPrice.classList.add("active-price-header");
            summerCard.style.opacity = "0";
            setTimeout(() => {
                summerCard.style.display = "none";
                winterCard.style.display = "block";
                setTimeout(() => {
                    winterCard.style.opacity = "1";
                }, 0);
            }, 0);
    
        } else {
            winterPrice.classList.remove("active-price-header");
            summerPrice.classList.add("active-price-header");
            winterCard.style.opacity = "0";
            setTimeout(() => {
                winterCard.style.display = "none";
                summerCard.style.display = "block";
                setTimeout(() => {
                    summerCard.style.opacity = "1";
                }, 0);
            }, 0);
        }
    }
winterPrice.addEventListener("click", function() { 
        toggleSeason(true);   
});
summerPrice.addEventListener("click", function() { 
        toggleSeason(false);  
});

//tlačítko "!" - alert
let btnAlert = document.querySelector(".btn-alert");
let rezervationAlertText = document.querySelector(".rezervation-alert");
btnAlert.addEventListener("click", function() {
        rezervationAlertText.classList.toggle("alert-active");    
})



// TENISOVÁ ŠKOLA - rozklik tlačítek
function showSection(className) {
        document.querySelectorAll('.tennis-school-competitions, .tennis-school-information, .tennis-school-price, .tennis-school-camp, .tennis-school-rules, .tennis-school-contact')
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






// FOOTER - aktuální rok
document.querySelector(".year").innerText = (new Date().getFullYear());
