//Put all global functions in here

var hamburgerMenuIsOpen = false

var hamburgerStyling = hamburger = document.getElementById("hamburger").style;
var hamburgerMenuStyling = document.getElementById("hamburger-menu").style;

function onHamburgerClick() {
    if (!hamburgerMenuIsOpen) {
        hamburger = document.getElementById("hamburger");
        hamburgerMenu = document.getElementById("hamburger-menu");
        hamburgerMenu.style.width = "100px";
        hamburgerMenu.style.marginLeft = "0px";
        hamburgerMenu.style.visibility = "visible";


        hamburger.style.left = "100px";
    }
}
