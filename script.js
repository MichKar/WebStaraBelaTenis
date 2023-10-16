// NAVIGACE - Rolování (skrytí + objevení)
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

// HAMBURGER MENU - zobrazení/skytí hlavního menu
let menu = document.querySelector(".btn-menu");
let close = document.querySelector(".btn-close");
let navigation = document.querySelector(".navigation");

menu.addEventListener("click", function(){
        menu.style.display = "none";
        close.style.display = "block";
        navigation.classList.toggle("activ-menu");
});

close.addEventListener("click", function(){
                close.style.display = "none";
                menu.style.display = "block";
                navigation.classList.toggle("activ-menu");
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