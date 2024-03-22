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

let windowWidth = window.innerWidth
console.log(windowWidth)
function updateWW() {
    windowWidth = window.innerWidth
}

window.setInterval(updateWW, 1000)


let clickCounter1 = 0
let clickCounter2 = 0
const navItem1 = document.querySelector(".nav-item")
const navItem2 = document.querySelectorAll(".nav-item")[1]
const ddCont1 = document.querySelector(".dropdown-content")
const ddCont2 = document.querySelectorAll(".dropdown-content")[1]
const dropbtn1 = document.querySelector(".dropbtn")
const dropbtn2 = document.querySelectorAll(".dropbtn")[1]

navItem1.addEventListener("click", function () {
    if (windowWidth < 1075) {
        console.log(clickCounter1)
        console.log(windowWidth)
        if (clickCounter1 % 2 === 0) {
            navItem1.style.marginBottom = "150px"
            
            ddCont1.style.display = "block"
        }
        else {
            navItem1.style.marginBottom = "0px"
            ddCont1.style.display = "none"
        }
        clickCounter1++
    }
})

navItem2.addEventListener("click", function () {
    if (windowWidth < 1075) {
        if (clickCounter2 % 2 === 0) {
            navItem2.style.marginBottom = "150px"
            ddCont2.style.display = "block"
        }
        else {
            navItem2.style.marginBottom = "0px"
            ddCont2.style.display = "none"
        }
        clickCounter2++
    }
})