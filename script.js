// NAVIGACE - Rolování (skrytí + objevení)

let body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", function(){

        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
                body.classList.remove("scroll-up")
        } else if (currentScroll >  lastScroll && !body.classList.contains("scroll-down")){
                body.classList.remove("scroll-up")
                body.classList.add("scroll-down")
        } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) { 
                body.classList.remove("scroll-down")
                body.classList.add("scroll-up")
        };

        lastScroll = currentScroll;
    
});




// HAMBURGER MENU - zobrazení hlavního menu
let hamburger = document.querySelector("#image-menu");
let navigation = document.querySelector(".navigation");


hamburger.addEventListener("click", function(){
        console.log(hamburger.src)
        // if(hamburger.src.includes == "menu-orange.png") {   
       if(hamburger.src.includes == "http://127.0.0.1:5500/img/icons/menu-orange.png") {                         
                hamburger.src = "img/icons/close_orange.png"
                navigation.classList.toggle("activ-menu")
       }  else  {
                hamburger.src = "img/icons/menu-orange.png"
                navigation.classList.toggle("activ-menu")
       };


});








// TENISOVÉ SOUSTŘEDĚNÍ - více info rozkliknutí

let btnSoustredeni = document.querySelector(".btn-soustredeni")
let soustredeni3 = document.querySelector(".soustredeni3")


btnSoustredeni.addEventListener("click", function(){
       if (soustredeni3.style.display=="none"){
        soustredeni3.style.display = "block"
        btnSoustredeni.innerHTML="Méně informací &#9650"
        } else if (soustredeni3.style.display=="block"){
        soustredeni3.style.display = "none"
        btnSoustredeni.innerHTML="Více informací &#9660"
        } else {
        soustredeni3.style.display = "block" 
        btnSoustredeni.innerHTML="Méně informací &#9650"  
        }  
})






// TENISOVÝ OBCHOD - kliknutí na btn open nebo Telephone

let btnOpen = document.querySelector(".btn-open")
let btnPhone = document.querySelector(".btn-phone")

btnPhone.addEventListener("click", function(){
       btnPhone.classList.toggle("active")
        btnOpen.classList.toggle("active")
});

btnOpen.addEventListener("click", function(){
        btnPhone.classList.toggle("active")
         btnOpen.classList.toggle("active")
 });




// //  kliknutí na úspěch -foto, zvětší se a naopak
let uspechFoto = document.querySelectorAll(".uspech-foto")

uspechFoto.forEach(function(oneUspech){
        oneUspech.addEventListener("click", function(){
                oneUspech.classList.toggle("zoom")
        })})

