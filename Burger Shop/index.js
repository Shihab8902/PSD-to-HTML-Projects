//Navigation menu control

const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navContainer.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink)=>{
   navLink.addEventListener("click", ()=>{
        navContainer.classList.remove("active");
        hamburger.classList.remove("active");
   })
});

const brandLogo = document.querySelector(".brand");
brandLogo.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navContainer.classList.remove("active");
})
