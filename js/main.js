//Put all global functions in here

var hamburgerMenuIsOpen = false

var hamburgerStyling = hamburger = document.getElementById("hamburger").style;
var hamburgerMenuStyling = document.getElementById("hamburger-menu").style;

function onHamburgerClick() {
    hamburger = document.getElementById("hamburger");
    hamburgerMenu = document.getElementById("hamburger-menu");
    hamburger.classList.toggle("x");
    if (!hamburgerMenuIsOpen) {
        hamburgerMenu.style.width = "300px";
        hamburgerMenu.style.marginLeft = "0px";
        hamburgerMenu.style.visibility = "visible";


        hamburger.style.left = "300px";
        //translate(-10px, 8px)
        document.getElementById("bar1").style.transform = "rotate(-45deg) translate(-9px, 6px)";
        document.getElementById("bar2").style.opacity = "0";
        //translate(-20px, -20px)
        document.getElementById("bar3").style.transform = "rotate(45deg) translate(-8px, -8px)";
        hamburgerMenuIsOpen = true;
    } else {
        hamburgerMenuIsOpen = false;
        hamburger.style = hamburgerStyling;
        document.getElementById("bar1").style.transform = "";
        document.getElementById("bar2").style.opacity = "1";
        document.getElementById("bar3").style.transform = "";
        hamburgerMenu.style = hamburgerMenuStyling;
    }
}
