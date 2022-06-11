const nav = document.querySelector("nav");

/* Sticky NavBar */  
function stickyNavbar(){
    nav.classList.toggle("scrolled", window.pageYOffset > 0);
    //console.log(window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavbar);

var navLinks = document.getElementById("navLinks")
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-500px";
}

const toggleButton = document.getElementsByClassName('clickme')[0]
const pSkills = document.getElementsByClassName('PSkills')[0]

toggleButton.addEventListener('click', () => {
    pSkills.classList.toggle('active')

})