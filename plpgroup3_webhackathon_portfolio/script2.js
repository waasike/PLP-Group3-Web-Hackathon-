// Hamburger menu on mobile view
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener('click', ()=>{
  navUL.classList.toggle("show");
})


// SWIPER FOR GALLERY SECTION
const productContainers = [...document.querySelectorAll('.gallery-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth + 4.4;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 4.4;
    })
})

