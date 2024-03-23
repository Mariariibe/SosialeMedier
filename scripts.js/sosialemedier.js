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
function updateWW() {
    windowWidth = window.innerWidth
    
}

window.setInterval(updateWW, 500)


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
        if (clickCounter1 % 2 === 0) {
            navItem1.style.marginBottom = "130px"
            ddCont1.style.display = "block"
            dropbtn1.style.fontWeight = "500"
        }
        else {
            navItem1.style.marginBottom = null
            ddCont1.style.display = "none"
            dropbtn1.style.fontWeight = null
        }
        clickCounter1++
    }
})

navItem2.addEventListener("click", function () {
    if (windowWidth < 1075) {
        if (clickCounter2 % 2 === 0) {
            navItem2.style.marginBottom = "150px"
            ddCont2.style.display = "block"
            dropbtn2.style.fontWeight = "500"
        }
        else {
            navItem2.style.marginBottom = null
            ddCont2.style.display = "none"
            dropbtn2.style.fontWeight = null
        }
        clickCounter2++
    }
})
