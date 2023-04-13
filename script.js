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





// Tábor - automatická změna fotek

// let image = document.querySelector("#image")
// let images = ["img/Nová složka/TS-tabor-01.jpg", "img/Nová složka/TS-tabor02.jpg","img/Nová složka/TS-tabor05.jpg","img/Nová složka/TS-tabor06.jpg", "img/Nová složka/TS-tabor15.jpg","img/Nová složka/TS-tabor20.jpg"]

// setInterval (function(){
//                 let number = Math.floor(Math.random()*6)
//                 image.src = images[number]
//         },3000
// )









// Gallery Tenisový obchod - scrollování

let galleryPhotos = document.querySelector(".gallery-photos")
let backBtn = document.querySelector("#backBtn")
let nextBtn = document.querySelector("#nextBtn")

galleryPhotos.addEventListener("wheel", function(e){
        e.preventDefault();
        galleryPhotos.scrollLeft += e.deltaY;
        galleryPhotos.style.scrollBehaviour = "auto";
})

nextBtn.addEventListener("click", function(){
        galleryPhotos.style.scrollBehaviour = "smooth";
        galleryPhotos.scrollLeft += 200;
})

backBtn.addEventListener("click", function(){
        galleryPhotos.style.scroll = "smooth";
        galleryPhotos.scrollLeft -= 200;
})


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


// Gallery - kliknutí na kalendář u Obchodu

let btnTimetable = document.querySelector(".btn-timetable")
let popupTimetable = document.querySelector(".popup-timetable")
let closeTimetable = document.querySelector(".close-timetable")

btnTimetable.addEventListener("click", function(){
        if (popupPhone.style.visibility === "visible"){
        popupPhone.style.visibility ="hidden"
        popupTimetable.style.visibility = "visible"
        popupTimetable.style.transform ="scale(1)"
        } else {
        popupTimetable.style.visibility = "visible"
        popupTimetable.style.transform ="scale(1)"
}
});

popupTimetable.addEventListener("click", function(){
        popupTimetable.style.visibility = "hidden"
        popupTimetable.style.transform ="scale(0.1)"
});


// Gallery - kliknutí na telefon u obchodu
let btnPhone = document.querySelector(".btn-phone")
let popupPhone = document.querySelector(".popup-phone")
let closePhone = document.querySelector(".close-phone")
let html = document.querySelector("html")

btnPhone.addEventListener("click", function(){
        popupPhone.style.visibility = "visible"
        popupPhone.style.transform ="scale(1)"
});

popupPhone.addEventListener("click", function(){
        popupPhone.style.visibility = "hidden"
        popupPhone.style.transform ="scale(0.1)"
});


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