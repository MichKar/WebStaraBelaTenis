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
//fce pro zavření menu
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
const tabButtons = document.querySelectorAll(".ts-tab-buttons button");
const tabContents = document.querySelectorAll(".ts-tab-content");
const toggles = document.querySelectorAll(".ts-accordion-toggle");
const accordionContents = document.querySelectorAll(".ts-accordion-content");

// Funkce pro zavření všech tlačítek na desktopu i accordionů
function closeAllSections() {
  tabButtons.forEach(b => b.classList.remove("active"));
  tabContents.forEach(c => c.classList.remove("active"));
  toggles.forEach(t => t.classList.remove("open"));
  accordionContents.forEach(c => c.classList.remove("open"));
}

// TŠ tlačítka - pro desktop
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    btn.classList.add("active");
    document.querySelector(`.ts-tab-content[data-content="${target}"]`).classList.add("active");
  });
});

// TŠ Acordion - pro mobily
document.addEventListener('DOMContentLoaded', function () {
  const accordionToggles = document.querySelectorAll('.ts-accordion-toggle');

  accordionToggles.forEach(toggle => {
    toggle.addEventListener('click', function (event) {
      event.preventDefault();

      const content = toggle.nextElementSibling;
      if (!content) return;

      const isOpen = content.classList.contains('open');

      // Ulož aktuální pozici tlačítka vůči viewportu
      const rectBefore = toggle.getBoundingClientRect();
      const offsetTopBefore = rectBefore.top;

      // Zavřeme vše
      document.querySelectorAll('.ts-accordion-toggle.open').forEach(btn => btn.classList.remove('open'));
      document.querySelectorAll('.ts-accordion-content.open').forEach(panel => panel.classList.remove('open'));

      // Otevřeme novou sekci jen pokud ještě nebyla otevřená
      if (!isOpen) {
        toggle.classList.add('open');
        content.classList.add('open');
      }

      // Po DOM změně přepočítáme a korigujeme scroll
      requestAnimationFrame(() => {
        const rectAfter = toggle.getBoundingClientRect();
        const offsetTopAfter = rectAfter.top;

        const delta = offsetTopAfter - offsetTopBefore;

        window.scrollBy({
          top: delta,
          behavior: 'smooth' 
        });
      });
    });
  });
});












// HLAVIČKA tlačítko pro tábory
const headerBtnCamp = document.querySelector(".header-btn-camp");

//pro desktop
headerBtnCamp.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    document.querySelector(`.ts-tab-content[data-content="ts-camp"]`).classList.add("active");

  } else {  //pro mobily
    document.querySelectorAll(".ts-accordion-content").forEach(c => c.classList.remove("open"));
    document.querySelectorAll(".ts-accordion-toggle").forEach(t => t.classList.remove("open"));

    // Najít cílovou sekci
    const targetSection = document.querySelector(".ts-section.tennis-school-camp");
    if (targetSection) {
      //nalezení odpovídající .ts-accordion-content a toggle
      const accordionContent = targetSection.closest(".ts-accordion-content");
      const toggle = accordionContent?.previousElementSibling;
      // Otevření konkrétního akordeonu
      accordionContent?.classList.add("open");
      toggle?.classList.add("open");
      toggle?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});




// Vnitřní accordion tábory pro mobil
  document.addEventListener('DOMContentLoaded', function () {
    const allButtons = document.querySelectorAll('.accordion2-btn');
    const allPanels = document.querySelectorAll('.panel2');

    allButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        const panel = allPanels[index];
        const isOpen = panel.classList.contains('open');
        // Zavřít všechny
        allButtons.forEach(btn => btn.classList.remove('active'));
        allPanels.forEach(p => p.classList.remove('open'));
        // Otevřít jen pokud nebyl aktivní
        if (!isOpen) {
          button.classList.add('active');
          panel.classList.add('open');
        }
      });
    });
  });

// Při načtení stránky nic neotvírej
window.addEventListener("DOMContentLoaded", () => {
  closeAllSections();
});

// Při změně velikosti okna také vše zavři
window.addEventListener("resize", () => {
  closeAllSections();
});




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




// úspěchy na mobilech
  const gallery = document.querySelector('.success-gallery');
  const cards = gallery.querySelectorAll('.success-card');

  function updateCardScaling() {
    const galleryRect = gallery.getBoundingClientRect();
    const galleryCenter = galleryRect.left + galleryRect.width / 2;
    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(galleryCenter - cardCenter);
      if (distance < cardRect.width / 2) {
        card.classList.add('in-center');
      } else {
        card.classList.remove('in-center');
      }
    });
  }
  gallery.addEventListener('scroll', () => {
    requestAnimationFrame(updateCardScaling);
  });
  window.addEventListener('load', updateCardScaling);
  window.addEventListener('resize', updateCardScaling);





// FOOTER - aktuální rok
document.querySelector(".year").innerText = (new Date().getFullYear());
