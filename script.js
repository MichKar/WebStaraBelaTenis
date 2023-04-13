// Rolování navigace (skrytí + objevení)

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


// Soustředění - více info rozkliknutí

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






// Tenisový obchod kliknutí na btn open nebo Telephone

let btnOpen = document.querySelector(".btn-open")
let btnTelephone = document.querySelector(".btn-phone")

btnTelephone.addEventListener("click", function(){
       btnTelephone.classList.toggle("active")
        btnOpen.classList.toggle("active")
});

btnOpen.addEventListener("click", function(){
        btnTelephone.classList.toggle("active")
         btnOpen.classList.toggle("active")
 });






// Gallery OVopen - scrollování

let galleryPhotos2 = document.querySelector(".gallery-photos2")
let backBtn2 = document.querySelector("#backBtn2")
let nextBtn2 = document.querySelector("#nextBtn2")

galleryPhotos2.addEventListener("wheel", function(e){
        e.preventDefault();
        galleryPhotos2.scrollLeft += e.deltaY;
        galleryPhotos2.style.scrollBehaviour = "auto";
})

nextBtn2.addEventListener("click", function(){
        galleryPhotos2.style.scrollBehaviour = "smooth";
        galleryPhotos2.scrollLeft += 200;
})

backBtn2.addEventListener("click", function(){
        galleryPhotos2.style.scroll = "smooth";
        galleryPhotos2.scrollLeft -= 200;
})





// Gallery - kliknutí na telefon u OVopen
let btnPhone2 = document.querySelector(".btn-phone2")
let popupPhone2 = document.querySelector(".popup-phone2")
let closePhone2 = document.querySelector(".close-phone2")

btnPhone2.addEventListener("click", function(){
        popupPhone2.style.visibility = "visible"
        popupPhone2.style.transform ="scale(1)"
});

popupPhone2.addEventListener("click", function(){
        popupPhone2.style.visibility = "hidden"
        popupPhone2.style.transform ="scale(0.1)"
});