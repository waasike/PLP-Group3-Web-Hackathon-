//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
 });



// Hamburger menu on mobile view
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener('click', ()=>{
  navUL.classList.toggle("show");
})

// SWIPER
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
    
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next', 
//       prevEl: '.swiper-button-prev',
//     },
  
// });

// DARK MODE
function myFunction() {
    var element = document.body;
    var element1 = document.getElementById("home-header");
    var element2 = document.getElementById("home-small-header")
    var element3 = document.getElementById("navbar")

    // element1.classList.toggle("home-details");
    element3.classList.toggle("dark-mode-bar")
    element2.classList.toggle("dark-mode-home-small")
    element1.classList.toggle("dark-mode-home");
    element.classList.toggle("dark-mode");
}

// ACTIVE BUTTON
var btnContainer = document.getElementById("nav-ul");

var btns = btnContainer.getElementsByClassName("navlinks");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// NAVIGATION BAR 
window.onscroll = function() {newFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function newFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
