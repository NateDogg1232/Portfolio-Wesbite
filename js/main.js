//Put all global functions in here

var hamburgerMenuIsOpen = false
var hamburgerTimeout = null;

var hamburgerClass = document.getElementById("hamburger").getAttribute("class");


function onHamburgerClick() {
        hamburger = document.getElementById("hamburger");
        hamburgerMenu = document.getElementById("hamburger-menu");
        if (!hamburgerMenuIsOpen) {
            hamburger.setAttribute("class", "transition");
            hamburgerMenu.setAttribute("class", "transition");
            hamburgerMenuIsOpen = true;
        } else {
            hamburgerMenuIsOpen = false;
            hamburger.setAttribute("class", "");
            hamburgerMenu.setAttribute("class", "");
            clearTimeout(hamburgerTimeout);
        }
}

function convert24HourTo12Hour(time) {

}
