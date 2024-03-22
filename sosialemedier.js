let hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    ddCont1.style.display = "none"
    ddCont2.style.display = "none"
}

const navItem1 = document.querySelector(".nav-item")
const navItem2 = document.querySelectorAll(".nav-item")[1]
const ddCont1 = document.querySelector(".dropdown-content")
const ddCont2 = document.querySelectorAll(".dropdown-content")[1]

navItem1.addEventListener("click", function() {
    navItem1.style.marginBottom = "150px"
    ddCont1.style.display = "block"
})

navItem2.addEventListener("click", function() {
    navItem2.style.marginBottom = "150px"
    ddCont2.style.display = "block"
})